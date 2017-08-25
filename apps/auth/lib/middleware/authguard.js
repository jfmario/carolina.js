
var User = require('../../models/user');

module.exports = function(req, res, next) {
  
  if (!req.body.hasOwnProperty('carolinaUser'))
    res.status(401).json({ error: "Login required." });
  if (!req.body.hasOwnProperty('carolinaToken'))
    res.status(401).json({ error: "Login required." });
  
  var user = User.getOne({
    username: req.body.carolinaUser
  });
  if (user.checkToken()) next();
  else res.status(401).json({ error: "Bad or expired token." });
}