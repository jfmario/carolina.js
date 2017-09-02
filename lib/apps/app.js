
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
      app: this.data,
      appName: this.name,
      site: this.siteConfig
    };
    if (this.data.hasOwnProperty('title'))
      this.templateData.title = this.data.title;
    if (this.data.hasOwnProperty('bootswatchTheme'))
      this.templateData.bootswatchTheme = this.data.bootswatchTheme;
    
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
  build() {

    var vText = `var carolinaData = {};carolinaData.APP_NAME = "${this.name}";`;
    vText += `carolinaData.TOKEN = "${this.siteConfig.secrets.clientSideSalt}";`;

    if (this.hasOwnProperty('vueFiles')) {
      for (var i = 0; i < this.vueFiles.length; ++i) {
        var vueFileData = this.vueFiles[i];
        var app = require(this.siteConfig.apps[vueFileData.app].app + '/app');
        console.log(app);
        var fileText = fs.readFileSync(
          path.resolve(app.dir, 'vue', vueFileData.file)
        ).toString();
        
        vText += fileText;
      }
    }

    if (!fs.existsSync(path.resolve(process.cwd(), 'static', app.name))) {
      fs.mkdirSync(path.resolve(process.cwd(), 'static', app.name));
    }
    fs.writeFileSync(
      path.resolve(process.cwd(), 'static', app.name,  'vue-app.js'),
      vText
    );
  }
}

this.App = App;
this.ExpressApp = ExpressApp;
this.VueApp = VueApp;