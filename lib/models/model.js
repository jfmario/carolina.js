
var path = require('path');

var conn = require('./conn');
var fields = require('./fields');

class Model {

  getSchema() {
    return {
      key: new fields.StringField(),
      value: new fields.StringField()
    }
  }
  getSettings() {
    return {};
  }

  constructor(name, appName, obj) {

    if (!obj) { obj = {}; }

    this.name = name;
    this.appName = appName;
    this.schema = this.getSchema();
    this._settings = this.getSettings();
    this.schema.creationDate = new fields.DateField({
      adminEdit: false,
      edit: false
    });
    this.schema.modifiedDate = new fields.DateField({
      adminEdit: false,
      edit: false
    });
    for (var prop in this.schema) {
      if (this.schema.hasOwnProperty(prop)) {
        if (obj.hasOwnProperty(prop)) {
          this[prop] = this.schema[prop].set(obj[prop]);
        }
        else {
          this[prop] = this.schema[prop].set(this.schema[prop].default);
        }
      }
    }

    this.conn = conn.connect(this.appName, this.name);
  }

  save(cb) {

    var saveObj = {};

    for (var prop in this.schema) {
      if (this.schema.hasOwnProperty(prop)) {
        if (this.hasOwnProperty(prop)) {
          saveObj[prop] = this[prop];
        }
      }
    }

    console.log(saveObj);
    this.conn.insert(saveObj, cb);
  }
}

module.exports = Model;
