
var path = require('path');
var fs = require('fs-extra');

var express = require('express');

class App {

  constructor(directory, data) {
    this.dir = directory;
    this.data = data;
  }

  load(appName, siteConfig) {
    this.name = appName
    this.siteConfig = siteConfig;
  }
  prepare() {

    var siteAppConfig = this.siteConfig.apps[this.name];
    this.dbName = siteAppConfig.db;
    if (siteAppConfig.hasOwnProperty('data')) {
      for (var prop in siteAppConfig.data) {
        if (siteAppConfig.data.hasOwnProperty(prop))
          this.data[prop] = siteAppConfig.data[prop];
      }
    }

    if (this.hasOwnProperty('models')) {
      for (var prop in this.models) {
        if (this.models.hasOwnProperty(prop)) {
          this.models[prop].app = this;
        }
      }
    }
  }

  build() {}
  getRouter() {
    return this.router;
  }
}

class ExpressApp extends App {
  constructor(directory, data) {
    super(directory, data);
  }
}

class VueApp extends App {

  constructor(directory, data) {
    
    super(directory, data);

    this.mainTemplate = 'index.pug';
  }

  prepare() {
    
    super.prepare();
    
    this.templateData = {
      app: this.siteConfig.apps[this.name],
      appName: this.name,
      site: this.siteConfig
    };
    if (this.siteConfig.apps[this.name].hasOwnProperty('title'))
      this.templateData.title = this.siteConfig.apps[this.name].title;
    if (this.siteConfig.apps[this.name].hasOwnProperty('bootswatchTheme'))
      this.templateData.bootswatchTheme = this.siteConfig.apps[this.name].bootswatchTheme;
    
    var self = this;
    var router = express.Router();
    router.get('/', function(req, res, next) {
      self.templateData.req = req;
      res.render(self.name + '/' + self.mainTemplate, self.templateData);
    });

    if (this.hasOwnProperty('api')) {
      router.use('/api', this.api);
    }

    this.router = router;
  }
}

this.App = App;
this.ExpressApp = ExpressApp;
this.VueApp = VueApp;