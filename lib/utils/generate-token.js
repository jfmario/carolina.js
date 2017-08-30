
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

module.exports = function(size) {
  var token = '';
  for (var i = 0; i < size; ++i) {
    token += CHARS.charAt(parseInt(Math.random() * CHARS.length));
  }
  return token;
};