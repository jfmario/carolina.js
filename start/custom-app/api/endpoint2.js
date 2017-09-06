
// Example reads data and returns a message.
module.exports = function(req, res, next) {
  // JSON will be parsed as req.body
  if (req.body.hasOwnProperty('message'))
    console.log(req.body.message);
  return res.status(200).json({ message: "Responding to a POST Request to endpoint2." });
};