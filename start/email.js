
var config = require('./config');
var EmailClass = require(config.emailInterface.app);

module.exports = new EmailClass(config.emailInterface);