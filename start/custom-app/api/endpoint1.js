
// Example endpoint returns a JSON message.
module.exports = function(req, res, next) {
  return res.status(200).json({ message: "Responding to a GET Request to endpoint1." });
};