
var express = require('express');
var router = new express.Router();

var app = require('./app');

function main (req, res, next) {
  res.send(app.data.welcomeMessage + '\n' + app.data.enterButtonText + '!');
}

router.get('/', main);
module.exports = router;