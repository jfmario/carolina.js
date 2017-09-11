
var crypto = require('crypto');
var path = require('path');

var fs = require('fs-extra');
var yaml = require('yamljs');

var config = require(path.resolve(process.cwd(), 'config'));

module.paths.unshift('./my-apps');
module.paths.unshift('./node_modules');

function hashValue(passwordValue) {

  var password = crypto.createHash('sha512').update(
    passwordValue + config.secrets.clientSideSalt).digest('hex');
  for (var i = 1; i <= 8; ++i) {
    var salted = password + config.secrets['salt' + i];
    password = crypto.createHash('sha512').update(salted).digest('hex');
  }

  return password;
}

function loadData (dataFile) {

  var dataObject = yaml.load(
    path.join(process.cwd(), 'fixtures', dataFile)
  );

  for (var appName in dataObject) {
    if (dataObject.hasOwnProperty(appName)) {
      
      var app = require(config.apps[appName].app + '/app');

      for (var modelName in dataObject[appName]) {
        if (dataObject[appName].hasOwnProperty(modelName)) {
          var Model = app.models[modelName];
          for (var i = 0; i < dataObject[appName][modelName].length; ++i) {

            var data = dataObject[appName][modelName][i];
            var obj = {};

            if (data.hasOwnProperty('fields')) {
              for (var prop in data.fields) {
                if (data.fields.hasOwnProperty(prop)) {
                  obj[prop] = data.fields[prop];
                }
              }
            }
            if (data.hasOwnProperty('hashFields')) {
              for (var prop in data.hashFields) {
                if (data.hashFields.hasOwnProperty(prop)) {
                  obj[prop] = hashValue(data.hashFields[prop]);
                }
              }
            }
            if (data.hasOwnProperty('fileFields')) {
              for (var prop in data.fileFields) {
                if (data.fileFields.hasOwnProperty(prop)) {
                  var text = fs.readFileSync(
                    path.join(process.cwd(), 'fixtures', 'files', data.fileFields[prop])
                  ).toString();
                  obj[prop] = text;
                }
              }
            }

            var object = new Model(obj);
            object.set('creationDate', new Date());
            object.save(function(){});
          }
        }
      }
    }
  }
}

module.exports = function(args) {

  for (var prop in config.apps) {
    if (config.apps.hasOwnProperty(prop)) {

      var appConfig = config.apps[prop]
      var app = require(appConfig.app + '/app');

      app.load(prop, config);
      app.prepare();
    }
  }

  if (args.dataName == 'all') {
    var fixtureFiles = fs.readdirSync(
      path.join(process.cwd(), 'fixtures')
    );
    for (var i = 0; i < fixtureFiles.length; ++i) {
      if (fixtureFiles[i].endsWith('.yml')) {
        loadData(fixtureFiles[i]);
      }
    }
  }
  else {
    loadData(args.dataName + '.yml');
  }
};