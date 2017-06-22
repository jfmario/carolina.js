  
var User = require('./apps/auth/models/user');

var user = new User({ username: 'johnfmarion', password: 'password', groups: 'all, some, admins' });


user.save(function(err, d) { console.log (err); console.log(d) });