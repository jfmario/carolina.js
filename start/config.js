
var path = require('path');
var yaml = require('yamljs');

module.exports = yaml.load(
  path.join(__dirname, 'config.yml')
);