
var crypto = require('crypto');
var path = require('path');

var config = require(path.join(process.cwd(), 'config'));

var passwordProperties = [
  'password',
  'oldPassword',
  'newPassword'
];

function hashOver(password) {

  for (var i = 1; i <= 8; ++i) {
    var salted = password + config.secrets['salt' + i];
    password = crypto.createHash('sha512').update(salted).digest('hex');
  }

  return password;
}

module.exports = function(req, res, next) {

  for (var i = 0; i < passwordProperties.length; ++i) {
    var prop = passwordProperties[i];
    if (req.body.hasOwnProperty(prop)) {
      req.body[prop] = hashOver(req.body[prop]);
    }
  }

  next();
};