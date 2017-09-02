
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
      salt0: generateToken(parseInt(Math.random() * 24) + 8),
      salt1: generateToken(parseInt(Math.random() * 24) + 8),
      salt2: generateToken(parseInt(Math.random() * 24) + 8),
      salt3: generateToken(parseInt(Math.random() * 24) + 8),
      salt4: generateToken(parseInt(Math.random() * 24) + 8),
      salt5: generateToken(parseInt(Math.random() * 24) + 8),
      salt6: generateToken(parseInt(Math.random() * 24) + 8),
      salt7: generateToken(parseInt(Math.random() * 24) + 8),
      salt8: generateToken(parseInt(Math.random() * 24) + 8)
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