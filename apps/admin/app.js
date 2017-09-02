
var path = require('path');
var express = require('express');
var ExpressApp = require('../../lib/apps/app').ExpressApp;

var app = new ExpressApp(__dirname, {});
var router = new express.Router();

router.get('/', function(req, res, next) {
  return res.render('carolinaAdminApp/admin.pug');
});
app.router = router;

module.exports = app;
