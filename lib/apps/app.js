
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

this.ExpressApp = ExpressApp;
