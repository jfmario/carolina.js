
var fields = require('./fields');

class Model {

  static getSchema() {
    return {
      key: new fields.StringField(),
      value: new fields.StringField()
    }
  }

  constructor(name, obj) {
    this.name = name;
    this.schema = this.getSchema();
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
  }
}

module.exports = Model;