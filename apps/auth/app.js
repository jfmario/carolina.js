
var VueApp = require('../../lib/apps/app').VueApp;

var data = {};
var app = new VueApp(__dirname, data);

app.models = {
  User: require('./models/user')
}
app.api = require('./api');
module.exports = app;
