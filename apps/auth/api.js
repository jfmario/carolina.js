
var express = require('express');
var router = new express.Router();

router.post('/login', require('./lib/api/login'));
router.post('/register', require('./lib/api/register'));
router.post('/reset-password', require('./lib/api/reset-password'));
// following routes required login
router.use(require('./lib/middleware/authguard'));
router.post('/admin-check', require('./lib/api/admin-check'));
router.post('/change-email', require('./lib/api/change-email'));
router.post('/change-password', require('./lib/api/change-password'));
router.post('/check', require('./lib/api/check'));
router.post('/confirm-email', require('./lib/api/confirm-email'));
router.post('/profile', require('./lib/api/profile'));
router.post('/send-email-verification', require('./lib/api/send-email-verification'));
router.post('/update-image', require('./lib/api/update-image'));
// TODO: E-Mail Verification and Password Reset
module.exports = router;