
var User = require('../../models/user');

module.exports = function(req, res, next) {
  var user = req.user;
  return res.json(user.exportData());
}