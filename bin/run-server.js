
var path = require('path');
var express = require('express');

module.exports = function(args) {

  var config = require(
    path.join(
      process.cwd(),
      'config'
    )
  );
  var server = express();
  for (var prop in config.apps) {
    if (config.apps.hasOwnProperty(prop)) {

      var appConfig = config.apps[prop]
      var app = require(appConfig.app + '/app');

      app.load(prop, config);
      app.prepare();
      if (app.hasOwnProperty('router') && appConfig.hasOwnProperty('mount'))
        server.use(appConfig.mount, app.router);
    }
  }

  server.listen(8000, function() {
    console.log("Listening...");
  });
}