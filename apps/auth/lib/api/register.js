
var User = require('../../models/user');

module.exports = function(req, res, next) {

  if (!req.body.hasOwnProperty('username')) {
    return res.status(400).json({ error: "No username." });
  }
  if (!req.body.hasOwnProperty('password'))
    return res.status(400).json({ error: "No password." });
  var user = new User({
    username: req.body.username,
    password: req.body.password
  });
  if (req.body.hasOwnProperty('emailAddress'))
    user.set('emailAddress', req.body.emailAddress);
  
  user.create(function(err, doc) {
    if (err) return res.status(400).json({ error: "Username exists." });
    else return res.status(201).json({ message: "Created." });
  });
};