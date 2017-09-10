
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
    var self = this;
    if (cb)
      conn.connect(this.app.name, this.getMetadata().model).findOne(
        query,
        cb
      );
    else return new Promise(function(resolve, reject) {
      conn.connect(self.app.name, self.getMetadata().model).findOne(
        query,
        function(err, doc) {
          if (err != null) return reject(err);
          resolve(new self(doc));
        }
      );
    })
  }
  static getAll(cb) {
    if (cb)
      conn.connect(this.app.name, this.getMetadata().model).find({}, cb);
    else return new Promise(function(resolve, reject) {
      conn.connect(self.app.name, self.getMetadata().model).find({},
        function (err, docs) {

          if (err != null) return reject(err);

          var objectList = [];
          for (var i = 0; i < docs.length; ++i) {
            objectList.push(new self(docs[i]));
          }
          resolve(objectList);
        });
    });
  }
  static getPage(page, pageSize, cb) {

    var self = this;
    var sortObj = {};
    sortObj[this.getMetadata().indexField] = 1;

    if (cb)
      conn.connect(this.app.name, this.getMetadata().model).find({})
        .sort(sortObj)
        .skip(pageSize * (page-1))
        .limit(pageSize)
        .exec(cb);
    else return new Promise(function(resolve, reject) {
      conn.connect(self.app.name, self.getMetadata().model).find({})
        .sort(sortObj)
        .skip(pageSize * (page-1))
        .limit(pageSize)
        .exec(function(err, docs) {

          if (err != null) return reject(err);

          var objectList = [];
          for (var i = 0; i < docs.length; ++i) {
            objectList.push(new self(docs[i]));
          }
          resolve(objectList);
        });
    });
  }
  static getQueryPage(queryObj, sortObj, page, pageSize, cb) {

    var self = this;
    
    if (cb) {
      conn.connect(this.apply.name, this.getMetadata().model).find(queryObj)
        .sort(sortObj)
        .skip(pageSize * (page-1))
        .limit(pageSize)
        .exec(cb);
    }
    else return new Promise(function(resolve, reject) {
      conn.connect(self.apply.name, self.getMetadata().model).find(queryObj)
        .sort(sortObj)
        .skip(pageSize * (page-1))
        .limit(pageSize)
        .exec(function(err, docs) {

          if (err != null) return reject(err);

          var objectList = [];
          for (var i = 0; i < docs.length; ++i) {
            objectList.push(new self(docs[i]));
          }
          resolve(objectList);
        });
    })
  }
  static lookup(value, cb) {
    
    var self = this;
    var indexField = this.getMetadata().indexField;
    var query = {};

    query[indexField] = value;

    if (cb)
      this.getOne(query, cb);
    else return new Promise(function(resolve, reject) {
      self.getOne(query, function(err, doc) {
        if (err != null) {
          return reject(err);
        }
        else return resolve(new self(doc));
      });
    });
  }
  static deleteByKey(value, cb) {

    var indexField = this.getMetadata().indexField;
    var query = {};

    query[indexField] = value;

    if (cb)
      conn.connect(this.app.name, this.getMetadata().model).remove(
        query, {}, cb);
    else return new Promise(function(resolve, reject) {
      conn.connect(this.app.name, this.getMetadata().model).remove(
        query, {}, function(err) {
          if (err != null) return reject(err);
          else resolve(true);
        });
    });
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

    if (cb) {
      this.constructor.getOne(
        testQuery,
        function (err, doc) {
          if (doc) {
            return cb("Already exists.", null);
          }
          else {
            self.creationDate = new Date();
            self.save(cb);
          }
        }
      );
    }
    else return new Promise(function(resolve, reject) {
      self.constructor.getOne(testQuery, function(err, doc) {
        if (doc) return reject(err);
        else {
          self.creationDate = new Data();
          self.save(function(err, doc) {
            if (err != null) return reject(err);
            else resolve(true);
          });
        }
      });
    })

  }
  save(cb) {

    var self = this;
    var saveObj = {};
    for (var prop in this.schema) {
      if (this.schema.hasOwnProperty(prop)) {
        if (this.hasOwnProperty(prop)) {
          saveObj[prop] = this[prop];
        }
      }
    }

    saveObj.modifiedDate = new Date();

    var query = {};
    var indexField = this.constructor.getMetadata().indexField;

    query[indexField] = this[indexField];

    if (cb) {
      this.conn.update(
        query,
        saveObj,
        { upsert: true },
        cb
      );
    }
    else return new Promise(function(resolve, reject) {
      self.conn.update(query, saveObj, { upsert: true }, function(err, doc) {
        if (err != null) return reject(err);
        else return resolve(true);
      })
    })
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
