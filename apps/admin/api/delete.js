var path = require('path');

var config = require(path.join(process.cwd(), 'config'));

module.paths.unshift('./my-apps');

module.exports = function(req, res, next) {

  if (!req.body.hasOwnProperty('appName'))
    return res.status(400).json({ error: "No appName specified." });
  if (!req.body.hasOwnProperty('modelName'))
    return res.status(400).json({ error: "No modelName specified." });
  if (!req.body.hasOwnProperty('itemKey'))
    return res.status(400).json({ error: "No itemKey specified." });

  var app = require(config.apps[req.body.appName].app + '/app');
  if (app.hasOwnProperty('models')) {
    if (app.models.hasOwnProperty(req.body.modelName)) {

      var Model = app.models[req.body.modelName];
      Model.deleteByKey(req.body.itemKey, function(){});
      return res.status(200).json({ message: "Deleted." });
    }
  }
}
