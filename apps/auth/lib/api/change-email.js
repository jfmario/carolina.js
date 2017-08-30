
module.exports = function(req, res, next) {
  
  if (!req.body.hasOwnProperty('newEmailAddress'))
    return res.status(400).json({ error: "No new e-mail address specified." });

  var user = req.user;
  user.set('emailAddress', req.body.newEmailAddress);
  user.set('emailVerified', false);
  user.set('emailToken', '');
  user.save(function(){});
  return res.status(201).json({ message: "E-mail address updated." });
}
