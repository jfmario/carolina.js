
var express = require('express');
var router = new express.Router();

function main (req, res, next) {
  var app = require('./app');
  res.send(app.data.welcomeMessage + '\n' + app.data.enterButtonText + '!');
}

router.get('/', main);
module.exports = router;