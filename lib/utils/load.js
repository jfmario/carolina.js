
var fs = require('fs-extra');
var path = require('path');

module.paths.unshift('./my-apps');
module.paths.unshift('./node_modules');

module.exports = function() {

  var config = require(
    path.join(
      process.cwd(),
      'config'
    )
  );

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
}
