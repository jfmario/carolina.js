
var ExpressApp = require('../../lib/apps/app').ExpressApp;

var data = {
  bootswatchTheme: 'minty',
  enterButtonText: 'enter',
  link: '/main',
  title: 'Title',
  welcomeMessage: "Welcome to the site."
};
var app = new ExpressApp(__dirname, data);

app.router = require('./router');
module.exports = app;
