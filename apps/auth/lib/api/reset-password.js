
var User = require('../../models/user');

var generateToken = require('../../../../lib/utils/generate-token');
var emailInterface = require('../../../../lib/email/index');

module.exports = function(req, res, next) {

  if(!req.body.hasOwnProperty('username'))
    return res.status(400).json({ error: "No username provided." });

  User.getOne(
    { username: req.body.username },
    function (err, userDoc) {
      if (!userDoc) return res.status(400).json({ error: "No such user." });
      else {
        
        var user = new User(userDoc);
        var token = generateToken(12);

        user.set('password', token);
        user.save(function(){});

        emailInterface.sendMail({
          to: user.emailAddress,
          subject: User.app.data.passwordResetSubject,
          message: User.app.data.passwordResetText + "\n\n" + token
        });
        
        return res.status(200).json({ message: "A new password has been emailed to you if you have an e-mail address on file." });
      }
    }
  ) 
};