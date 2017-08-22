
var path = require('path');

var fs = require('fs-extra');
var nunjucks = require('nunjucks');

var generateToken = require('../lib/utils/generate-token');

module.exports = function(args) {

  fs.mkdirSync(args.name);

  var configFile = nunjucks.renderString(fs.readFileSync(
    path.resolve(__dirname, '..', 'start',
    'config.yml')).toString(), {
      adminPass: generateToken(8),
      appName: args.name,
      token: generateToken(32)
    });
  fs.writeFileSync(path.resolve(args.name, 'config.yml'), configFile);

  var packageJson = nunjucks.renderString(fs.readFileSync(
    path.resolve(__dirname, '..', 'start',
    'package.json')).toString(), {
      appName: args.name,
      version: "1.0.0"
    });
  fs.writeFileSync(path.resolve(args.name, 'package.json'), packageJson);

  fs.copySync(
    path.resolve(
      __dirname,
      '..', 'start',
      'config.js'
    ),
    path.resolve(
      args.name,
      'config.js'
    )
  );

  var config = require(
    path.join(
      process.cwd(),
      args.name,
      'config'
    )
  );

  console.log(config);
  
  var authApp = require('carolina/apps/auth/app');
  authApp.load('carolinaAuthenticationApp', config);
  authApp.prepare();

  process.chdir(args.name);
  
  var User = require('carolina/apps/auth/models/user');
  var adminUser = new User({
    username: config.adminUser.username,
    password: config.adminUser.password,
    groups: ['all', 'admin']
  });

  adminUser.save(function(){});
};