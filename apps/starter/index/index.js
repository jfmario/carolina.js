
var express = require('express');

var router = new express.Router();

function main (req, res, next) {
  res.send('Welcome! The application is working.');
}

router.get('/', main);
module.exports = router;