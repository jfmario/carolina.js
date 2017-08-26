
var User = require('../../models/user');

module.exports = function(req, res, next) {
  
  if (!req.body.hasOwnProperty('carolinaUser'))
    return res.status(401).json({ error: "Login required." });
  if (!req.body.hasOwnProperty('carolinaToken'))
    return res.status(401).json({ error: "Login required." });

  User.lookup(
    req.body.carolinaUser,
    function (err, doc) {
      if (err) return res.status(400).json({ error: err });
      else {
        var user = new User(doc);
        if (user.checkToken(req.body.carolinaToken)) {
          req.user = user;
          next();
        }
        else return res.status(401).json({ error: "Bad or expired token." });
      }
    }
  )
};