
var express = require('express');
var router = new express.Router();

router.post('/login', require('./lib/api/login'));
router.post('/register', require('./lib/api/register'));
// following routes required login
router.use(require('./lib/middleware/authguard'));
module.exports = router;