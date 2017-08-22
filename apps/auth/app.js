
var ExpressApp = require('../../lib/apps/app').ExpressApp;

var data = {
  secret: '1234567890'
};
var app = new ExpressApp(__dirname, data);

// app.router = require('./router');
module.exports = app;
