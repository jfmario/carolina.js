
var path = require('path');

var fs = require('fs-extra');
var nunjucks = require('nunjucks');

var generateToken = require('../lib/utils/generate-token');

module.exports = function(args) {

  fs.mkdirSync(args.name);

  var configFile = nunjucks.renderString(fs.readFileSync(
    path.resolve(__dirname, '..', 'start',
    'config.yml')).toString(), {
      adminPass: generateToken(16),
      token: generateToken(32)
    });
  fs.writeFileSync(path.resolve(args.name, 'config.yml'), configFile);
};