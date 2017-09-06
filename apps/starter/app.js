
var path = require('path');
var express = require('express');

var ExpressApp = require('../../lib/apps/app').ExpressApp;

var data = {
  bootswatchTheme: 'minty',
  enterButtonText: 'enter',
  link: '/main',
  title: 'Title',
  welcomeMessage: "Welcome to the site."
};
var app = new ExpressApp(__dirname, data);

function main (req, res, next) {

  // res.send(app.data.welcomeMessage + '\n' + app.data.enterButtonText + '!');
  res.render('carolinaStarterApp/landing_page.pug', {
    app: app,
    site: require(path.resolve(process.cwd(), 'config')),
    bootswatchTheme: app.data.bootswatchTheme
  });
}

var router = new express.Router();
router.get('/', main);

app.router = router;
module.exports = app;
