
var path = require('path');
var fs = require('fs-extra');
var config = require(path.resolve(process.cwd(), 'config'));

module.paths.unshift('./my-apps');
module.paths.unshift('./node_modules');

module.exports = function(args) {

  var database = args.database;
  var appName = args.app;
  var modelName = args.model;

  if (config.db[database].type == 'nedb') {
    fs.removeSync(path.join(
      process.cwd(),
      config.db[database].path,
      appName,
      modelName + '.db'
    ));
  }
};