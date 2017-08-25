
var path = require('path');

var fs = require('fs-extra');
var nunjucks = require('nunjucks');

var path = require('path');

var generateToken = require('../lib/utils/generate-token');

var config = require(path.resolve(process.cwd(), 'config'));

module.exports = function(args) {

  for (var prop in config.apps) {
    if (config.apps.hasOwnProperty(prop)) {

      var appConfig = config.apps[prop]
      var app = require(appConfig.app + '/app');

      app.load(prop, config);
      app.prepare();
    }
  }

  var User = require('carolina/apps/auth/models/user');
  var adminUser = new User({
    username: config.adminUser.username,
    password: config.adminUser.password,
    groups: ['all', 'admin']
  });
  console.log(adminUser);
  adminUser.save(function(){});
};