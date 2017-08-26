
var path = require('path');

var conn = require('./conn');
var fields = require('./fields');

class Model {

  static getMetadata () {
    return {
      indexField: 'key',
      model: 'Model'
    }
  }
  static getSchema() {
    return {
      key: new fields.StringField(),
      value: new fields.StringField()
    }
  }

  static getOne(query, cb) {
    conn.connect(this.app.name, this.getMetadata().model).findOne(
      query,
      cb
    );
  }
  static lookup(value, cb) {
    
    var indexField = this.getMetadata().indexField;
    var query = {};

    query[indexField] = value;
    this.getOne(
      query,
      cb
    );
  }

  constructor(name, obj) {

    if (!obj) { obj = {}; }

    this.name = name;
    this.appName = this.constructor.app.name;
    this.schema = this.constructor.getSchema();
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

  exportData() {

    var exportObj = {};
    for (var prop in this.schema) {
      if (this.schema.hasOwnProperty(prop)) {
        if (!this.schema[prop].hidden)
          exportObj[prop] = this[prop];
      }
    }

    return exportObj;
  }

  set(prop, value) {
    if (this.schema.hasOwnProperty(prop)) {
      this[prop] = this.schema[prop].set(value);
    }
    else this[prop] = value;
  }
  create(cb) {
    
    var testQuery = {};
    var indexField = this.constructor.getMetadata().indexField;
    var self = this;

    testQuery[indexField] = this[indexField];
    this.constructor.getOne(
      testQuery,
      function (err, doc) {
        if (doc) {
          return cb("Already exists.", null);
        }
        else {
          self.save(cb);
        }
      }
    );
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
    var query = {};
    var indexField = this.constructor.getMetadata().indexField;

    query[indexField] = this[indexField];
    this.conn.update(
      query,
      saveObj,
      { upsert: true },
      cb
    );
  }

  getVueForm(isAdmin) {
    
    var vueModelName = this.constructor.getMetadata().model.toLowerCase();
    var fields = [];
    for (var prop in this.schema) {
      if (this.schema.hasOwnProperty(prop)) {
        fields.append(this.schema[prop].getVueForm(vueModelName, prop, isAdmin));
      }
    }

    return `<form class="form">${fields.join('\n')}</form>`;
  }
}

module.exports = Model;
