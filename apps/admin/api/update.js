var path = require('path');

var config = require(path.join(process.cwd(), 'config'));

module.exports = function(req, res, next) {

  if (!req.body.hasOwnProperty('appName'))
    return res.status(400).json({ error: "No appName specified." });
  if (!req.body.hasOwnProperty('modelName'))
    return res.status(400).json({ error: "No modelName specified." });
  if (!req.body.hasOwnProperty('itemKey'))
    return res.status(400).json({ error: "No itemKey specified." });
  if (!req.body.hasOwnProperty('update'))
    return res.status(400).json({ error: "No update specified." });

  var app = require(config.apps[req.body.appName].app + '/app');
  if (app.hasOwnProperty('models')) {
    if (app.models.hasOwnProperty(req.body.modelName)) {

      var Model = app.models[req.body.modelName];
      var schema = Model.getSchemaJSON();
      Model.lookup(req.body.itemKey, function (err, doc) {

        var obj = new Model(doc);
        for (var i = 0; i < schema.fieldNames.length; ++i) {
          if (schema.fieldDetails[schema.fieldNames[i]].attributes.adminEdit == true) {
            if (req.body.update.hasOwnProperty(schema.fieldNames[i])) {
              obj.set(schema.fieldNames[i], req.body.update[schema.fieldNames[i]]);
            }
          }
        }

        obj.save(function(err, doc){});

        return res.status(200).json({ message: "Updated." });
      });
    }
  }
}
