
module.exports = function(req, res, next) {
  if (req.user.groups.indexOf('admin') != -1) next();
  else res.status(401).json({ error: "Not an admin acount." });
};