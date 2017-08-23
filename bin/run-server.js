
var fs = require('fs-extra');
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
      if (fs.existsSync(path.resolve(app.dir, 'static/')))
        fs.copySync(
          path.resolve(app.dir, 'static/'),
          path.resolve(process.cwd(), 'static', prop)
        )
      if (fs.existsSync(path.resolve(app.dir, 'templates/')))
        fs.copySync(
          path.resolve(app.dir, 'templates/'),
          path.resolve(process.cwd(), 'templates', prop)
        )
      if (app.hasOwnProperty('router') && appConfig.hasOwnProperty('mount'))
        server.use('/' + appConfig.mount, app.router);
    }
  }

  server.use('/static', express.static('static'));
  server.set("view engine", 'pug');
  server.listen(8000, function() {
    console.log("Listening...");
  });
}