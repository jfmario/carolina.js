
module.exports = function(req, res, next) {
  
  if (!req.body.hasOwnProperty('oldPassword'))
    return res.status(400).json({ error: "Old password not provided." });
  if (!req.body.hasOwnProperty('newPassword'))
    return res.status(400).json({ error: "New password not provided." });
  var user = req.user;

  if (user.checkPassword(req.body.oldPassword)) {
    
    user.set('password', req.body.newPassword);
    user.save();

    return res.status(201).json({ message: "Password updated." });
  }
  else {
    res.status(401).json({ error: "Incorrect password." });
  }
}