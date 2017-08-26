
var path = require('path');
var config = require(path.resolve(process.cwd(), 'config'));

var emailAppName = config.emailInterface.app;
var EmailInterfaceClass = null;
if (emailAppName.startsWith('.'))
  EmailInterfaceClass = require(path.resolve(process.cwd(), emailAppName));
else
  EmailInterfaceClass = require(emailAppName);

module.exports = new EmailInterfaceClass(config.emailInterface);