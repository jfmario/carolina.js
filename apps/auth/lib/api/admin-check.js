
module.exports = function(req, res, next) {
  if (req.user.groups.indexOf('admin') != -1)
    return res.status(200).json({ message: 'OK' });
  else res.status(401).json({ error: "Not an admin acount." });
};