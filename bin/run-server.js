
var fs = require('fs-extra');
var path = require('path');

var bodyParser = require('body-parser');
var express = require('express');

module.exports = function(args) {

  var config = require(
    path.join(
      process.cwd(),
      'config'
    )
  );
  var server = express();

  server.use(bodyParser.json());
  
  for (var prop in config.apps) {
    if (config.apps.hasOwnProperty(prop)) {

      console.log("Load phase");
      var appConfig = config.apps[prop]
      var app = require(appConfig.app + '/app');

      app.load(prop, config);

      console.log("Prepare phase");
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

    app.build();
  }

  if (fs.existsSync(path.resolve(process.cwd(), 'favicon.ico')))
    fs.copySync(
      path.resolve(process.cwd(), 'favicon.ico'),
      path.resolve(process.cwd(), 'static', 'favicon.ico')
    );
  
  server.use('/static', express.static('static'));
  server.set('views', path.join(process.cwd(), 'templates'));
  server.set("view engine", 'pug');
  server.listen(
    config.runConfig[args.runConfig].port, 
    config.runConfig[args.runConfig].host,
    function() {
      console.log("Listening on " + config.runConfig[args.runConfig].host +
        ':' + config.runConfig[args.runConfig].port + '...');
    }
  );
}