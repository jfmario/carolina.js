
var User = require('../../models/user');

function login(req, res, next) {

  if (!req.body.hasOwnProperty('username')) {
    return res.status(400).json({ error: "No username." });
  }
  if (!req.body.hasOwnProperty('password'))
    return res.status(400).json({ error: "No password." });
  
  User.getOne(
    { username: req.body.username },
    function (err, userDoc) {
      if (!userDoc)
        res.status(401).json({ error: "No such user." });
      else {
        user = new User(userDoc);
        if (!user.checkPassword(req.body.password))
          res.status(401).json({ error: "Bad password." });
        else {
          var token = user.createToken();
          res.status(200).json({ carolinaToken: token });
        }
      }
    }
  ) 
}
module.exports = login;