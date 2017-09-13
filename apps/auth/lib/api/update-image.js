
module.exports = function(req, res, next) {
  
  if (!req.body.hasOwnProperty('image'))
    return res.status(400).json({ error: "Image not provided." });
  var user = req.user;
  user.set('image', req.body.image);

  user.save();

  return res.status(200).json({ message: "Image updated." });
}