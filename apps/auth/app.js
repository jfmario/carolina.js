
var VueApp = require('../../lib/apps/app').VueApp;

var data = {
  emailVerificationSubject: "Carolina Account Verification",
  emailVerificationText: "Click on the link below to verify your e-mail."
};
var app = new VueApp(__dirname, data);

app.models = {
  User: require('./models/user')
}
app.api = require('./api');
module.exports = app;
