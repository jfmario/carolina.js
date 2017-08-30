
module.exports = function(req, res, next) {

  if (!req.body.hasOwnProperty('emailVerificationToken'))
    return res.status(400).json({ error: "No verification code provided." });
  
  var user = req.user;
  if (user.checkEmailToken(req.body.emailVerificationToken)) {
    user.set('emailVerified', true);
    user.save(function(){});
    return res.status(200).json({ message: "Email verified." });
  }
  else
    return res.status(400).json({ error: "Bad or expired token." });
};