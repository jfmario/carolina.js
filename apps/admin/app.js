
var path = require('path');
var express = require('express');
var ExpressApp = require('../../lib/apps/app').ExpressApp;

var app = new ExpressApp(__dirname, {});
var router = new express.Router();

var siteConfig = require(path.join(process.cwd(), 'config'))

router.get('/', function(req, res, next) {
  data = {
    app: app,
    site: siteConfig,
    appConfig: siteConfig.apps[app.name],
    title: siteConfig.name
  };
  if (app.data.hasOwnProperty('bootswatchTheme')) {
    data.bootswatchTheme = app.data.bootswatchTheme;
  }
  return res.render('common/bootstrap_ng.pug', data);
});
app.router = router;

module.exports = app;
