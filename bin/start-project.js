
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
};