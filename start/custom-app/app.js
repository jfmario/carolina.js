
var path = require('path');
var express = require('express');
var ExpressApp = require('carolina/lib/apps/app').ExpressApp;

// load the site configuration
var siteConfig = require(path.join(process.cwd(), 'config'));

// define overridable options for your app.
var data = {
  customData: '12345',
  bootswatchTheme: 'slate'
};

// initialize the app object
var app = new ExpressApp(__dirname, data);

// create an express Router to handle requests
var router = new express.Router();

// import API endpoints
router.use('/api', require('./api/index'));

// define main page
router.get('/', function(req, res, next) {
  
  // options to pass the template
  var templateData = {
    app: app,
    site: siteConfig,
    appConfig: siteConfig.apps[app.name],
    title: siteConfig.name,
    message: "This is my custom app."
  };
  /** 
   * if inheriting built-in bootstrap themes,
   * make bootswatchTheme a root-level entry in data.
   */
  if (app.data.hasOwnProperty('bootswatchTheme')) {
    templateData.bootswatchTheme = app.data.bootswatchTheme;
  }

  // render and return custom template with data
  return res.render(app.name + '/index.pug', templateData);
});

app.models = {
  // include models here as in the below line
  // MyModel: require('./models/my-model')
};

// set your app's router
app.router = router;

// export your app
module.exports = app;
