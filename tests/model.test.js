
var chai = require('chai');
var User = require('../apps/auth/models/user');

var expect = chai.expect;

describe("Models", function() {

  var user = new User({ username: 'johnfmarion', password: 'password', groups: 'all, some, admins' });

  it("User.creationDate is of type date.", function() {  
    expect(user.creationDate).to.be.a('Date')
  });

  user.save(function(err, d) { console.log (err); console.log(d) });
});