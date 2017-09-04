
var path = require('path');

var config = require(path.join(process.cwd(),'config'));

module.exports = function (req, res, next) {

  var appList = [];
  for (var appName in config.apps) {
    if (config.apps.hasOwnProperty(appName)) {
      appList.push(appName);
    }
  }

  return res.json({ apps: appList });
}
