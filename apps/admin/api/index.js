
var express = require('express');

var authguard = require('../../auth/lib/middleware/authguard');
var adminguard = require('../../auth/lib/middleware/adminguard');

var router = new express.Router();

router.use(authguard);
router.use(adminguard);
router.post('/overview', require('./overview'));
module.exports = router;
