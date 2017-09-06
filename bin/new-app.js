
var fs = require('fs-extra');
var path = require('path');

module.exports = function(args) {
  fs.copySync(
    path.join(__dirname, '..', 'start', 'custom-app/'),
    path.join(process.cwd(), 'my-apps', args.name)
  );
};