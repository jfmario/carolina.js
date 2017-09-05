
var path = require('path');

var config = require(path.join(process.cwd(), 'config'));

module.exports = function(req, res, next) {

  if (!req.body.hasOwnProperty('appName'))
    return res.status(400).json({ error: "No appName specified." });
  if (!req.body.hasOwnProperty('modelName'))
    return res.status(400).json({ error: "No modelName specified." });
  if (!req.body.hasOwnProperty('pageNumber'))
    req.body.pageNumber = 1;
  else req.body.pageNumber = parseInt(req.body.pageNumber);
  var appName = req.body.appName;
  var modelName = req.body.modelName;

  var app = require(config.apps[appName].app + '/app');
  if (app.hasOwnProperty('models')) {
    if (app.models.hasOwnProperty(modelName)) {
      var Model = app.models[modelName];
      var indexField = Model.getMetadata().indexField;
      Model.getPage(req.body.pageNumber, 50, function (err, items) {

        if (err) return res.status(500).json({ error: err });

        var list = [];
        for (var i = 0; i < items.length; ++i) {
          list.push(items[i][indexField]);
        }

        return res.status(200).json(list);
      });
    }
  }
};
