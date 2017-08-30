
var VueApp = require('../../lib/apps/app').VueApp;

var data = {
  bootswatchTheme: 'lumen',
  emailVerificationSubject: "Carolina Account Verification",
  emailVerificationText: "Click on the link below to verify your e-mail.",
  passwordResetSubject: "Carolina Account Password Reset",
  passwordResetText: "Your new password is below:"
};
var app = new VueApp(__dirname, data);

app.models = {
  User: require('./models/user')
}
app.api = require('./api');
app.vueFiles = [
  { app: 'common', file: 'localdb.vue.js' },
  { app: 'carolinaAuthenticationApp', file: 'auth-forgot-password.vue.js' },
  { app: 'carolinaAuthenticationApp', file: 'auth-login.vue.js' },
  { app: 'carolinaAuthenticationApp', file: 'auth-profile.vue.js' },
  { app: 'carolinaAuthenticationApp', file: 'auth-register.vue.js' },
  { app: 'carolinaAuthenticationApp', file: 'main.vue.js' }
];
module.exports = app;
