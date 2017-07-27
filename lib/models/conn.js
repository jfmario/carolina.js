
var path = require('path');

var nedb = require('nedb');

var config = require(path.resolve(process.cwd(), 'config'));

var CONNECTIONS = {};

class Conn {

  constructor (obj) {
    this.db = {};
  }

  getNewConnection(app, model) {}

  connect(app, model) {
    if (this.db.hasOwnProperty(app) && this.db[app].hasOwnProperty(model)) {
      return this.db[app][model];
    }
    else {
      return this.getNewConnection(app, model);
    }
  }
}

class NedbConn extends Conn {

  constructor(obj) {
    super(obj);
    this.path = obj.path;
  }

  getNewConnection(app, model) {
    if (!this.db.hasOwnProperty(app)) {
      this.db[app] = {};
    }
    this.db[app][model] = new nedb({
      filename: path.resolve(this.path, app, model + '.db'),
      autoload: true
    });
    return this.db[app][model];
  }
}

this.connect = function(app, model) {
  var dbName = app.db;
  if (CONNECTIONS.hasOwnProperty(dbName)) {
    return CONNECTIONS[dbName].connect(app, model);
  }
  else {
    if (config.db[dbName].type == 'nedb') {
      CONNECTIONS[dbName] = new NedbConn(config.db[dbName]);
    }
    return CONNECTIONS[dbName];
  }
}