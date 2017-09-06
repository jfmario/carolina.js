
var express = require('express');
var router = new express.Router();

function main (req, res, next) {

  var app = require('./app');
  var site = require(process.cwd(), 'config');

  // res.send(app.data.welcomeMessage + '\n' + app.data.enterButtonText + '!');
  res.render('carolinaStarterApp/landing_page.pug', {
    app: app,
    site: site,
    bootswatchTheme: appd
  });
}

router.get('/', main);
module.exports = router;