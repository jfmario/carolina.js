
var express = require('express');

var router = new express.Router();

// register API endpoints
router.get('/endpoint1', require('./endpoint1'));
router.post('/endpoint2', require('./endpoint2'));

// export the API router
module.exports = router;
