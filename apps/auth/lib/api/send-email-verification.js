
var generateToken = require('../../../../lib/utils/generate-token');
var emailInterface = require('../../../../lib/email/index');

module.exports = function(req, res, next) {

  var User = require('../../models/user');
  
  var user = req.user;
  var token = generateToken(32);

  user.set('emailToken', token);

  var date = new Date()
  date.setDate(date.getDate() + 3);

  user.set('emailTokenExpiration', date);
  user.save();
  emailInterface.sendMail({
    to: user.emailAddress,
    subject: User.app.data.emailVerificationSubject,
    message: User.app.data.emailVerificationText + "\nhttp://" + req.headers.host + '/auth/api/verify-email/' + token
  });
  res.status(201).json({ message: "Token sent." });
}