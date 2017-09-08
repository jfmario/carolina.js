
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
  static getSchemaJSON() {

    var schema = this.getSchema();
    var schemaObj = {
      fieldNames: [],
      fieldDetails: {}
    };
    for (var field in schema) {
      if (schema.hasOwnProperty(field)) {
        schemaObj.fieldNames.push(field);
        schemaObj.fieldDetails[field] = schema[field].toJSON();
      }
    }

    return schemaObj;
  }

  static getOne(query, cb) {
    conn.connect(this.app.name, this.getMetadata().model).findOne(
      query,
      cb
    );
  }
  static getAll(cb) {
    conn.connect(this.app.name, this.getMetadata().model).find({}, cb);
  }
  static getPage(page, pageSize, cb) {

    var sortObj = {};
    sortObj[this.getMetadata().indexField] = 1;

    conn.connect(this.app.name, this.getMetadata().model).find({})
      .sort(sortObj)
      .skip(pageSize * (page-1))
      .limit(pageSize)
      .exec(cb);
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
  static deleteByKey(value, cb) {

    var indexField = this.getMetadata().indexField;
    var query = {};

    query[indexField] = value;
    conn.connect(this.app.name, this.getMetadata().model).delete(
      query, {} cb
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
  delete(cb) {

    var query = {};
    var indexField = this.constructor.getMetadata().indexField;

    query[indexField] = this[indexField];
    this.conn.remove(
      query,
      {}, cb
    );
  }
}

module.exports = Model;
