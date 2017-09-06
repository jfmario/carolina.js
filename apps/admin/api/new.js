
var crypto = require('crypto');
var path = require('path');

var config = require(path.join(process.cwd(), 'config'));

module.paths.unshift('./my-apps');

function hashOver(password) {

  for (var i = 1; i <= 8; ++i) {
    var salted = password + config.secrets['salt' + i];
    password = crypto.createHash('sha512').update(salted).digest('hex');
  }

  return password;
}

module.exports = function(req, res, next) {

  if (!req.body.hasOwnProperty('appName'))
    return res.status(400).json({ error: "No appName specified." });
  if (!req.body.hasOwnProperty('modelName'))
    return res.status(400).json({ error: "No modelName specified." });
  if (!req.body.hasOwnProperty('attributes'))
    return res.status(400).json({ error: "No attributes specified." });

  var app = require(config.apps[req.body.appName].app + '/app');
  if (app.hasOwnProperty('models')) {
    if (app.models.hasOwnProperty(req.body.modelName)) {

      var Model = app.models[req.body.modelName];
      var schema = Model.getSchemaJSON();
      var indexField = Model.getMetadata().indexField;
      Model.lookup(req.body.attributes[indexField], function (err, doc) {

        // test uniqueness
        if (doc) return res.status(400).json({ error: "Item with that " + Model.getMetadata().indexField + " exists." });

        var obj = new Model({});
        for (var i = 0; i < schema.fieldNames.length; ++i) {
          if (req.body.attributes.hasOwnProperty(schema.fieldNames[i])) {
            if (schema.fieldDetails[schema.fieldNames[i]].type == 'hash')
              obj.set(schema.fieldNames[i], hashOver(req.body.attributes[schema.fieldNames[i]]));
            else obj.set(schema.fieldNames[i], req.body.attributes[schema.fieldNames[i]]);
          }
        }

        obj.save(function(err, doc){});

        return res.status(200).json({ message: "Created." });
      });
    }
  }
}
