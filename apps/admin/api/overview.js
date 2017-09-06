
var path = require('path');

var config = require(path.join(process.cwd(),'config'));

module.paths.unshift('./my-apps');

module.exports = function (req, res, next) {

  var appList = [];
  for (var appName in config.apps) {
    if (config.apps.hasOwnProperty(appName)) {

      var appListing = { name: appName };
      var app = require(config.apps[appName].app + '/app');
      var models = [];

      if (app.hasOwnProperty('models')) {
        for (var modelName in app.models) {
          if (app.models.hasOwnProperty(modelName)) {
            models.push(modelName);
          }
        }
      }

      appListing.models = models;
      appList.push(appListing);
    }
  }

  return res.json({ apps: appList });
};
