
var crypto = require('crypto');
var path = require('path');
var config = require(path.join(process.cwd(), 'config'));

class Field {

  constructor(obj) {

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        this[prop] = obj[prop];
      }
    }
    if (!obj.hasOwnProperty('adminEdit')) this.adminEdit = true;
    if (!obj.hasOwnProperty('default')) this.default = 0;
    if (!obj.hasOwnProperty('edit')) this.edit = true;
    if (!obj.hasOwnProperty('required')) this.required = false;
    if (!obj.hasOwnProperty('unique')) this.unique = false;

    this.type = 'generic';
  }

  set(value) {
    return value;
  }
}

class DateField extends Field {

  constructor(obj) {
    super(obj);

    if (!obj.hasOwnProperty('default')) this.default = '';

    this.type = 'date';
  }

  set(value) {
    if (value instanceof Date) return value;
    else return new Date(value);
  }
}

class StringField extends Field {

  constructor(obj) {
    super(obj);
    
    if (!obj.hasOwnProperty('default')) this.default = '';
    if (!obj.hasOwnProperty('max')) this.max = null;
    if (!obj.hasOwnProperty('min')) this.min = null;
    if (!obj.hasOwnProperty('textArea')) this.textArea = false;

    this.type = 'string';
  }
  set(value) {
    value = value.toString();
    if (this.max && value.length > this.max) value = value.substring(0, max);
    if (this.min && value.length < this.min) {
      var padding = this.min - value.length;
      for (var i = 0; i < padding; ++i) value = value + '=';
    }
    return value;
  }
}

class HashedField extends StringField {

  constructor(obj) {

    super(obj);
    
    if (!obj.hasOwnProperty('algorithm')) this.algorithm = 'sha512';

    this.type = 'hash';
  }

  set(value) {
    return crypto.createHmac(this.algorithm, config.secret).update(value).digest('hex');
  }
}

class ListField extends StringField {

  constructor(obj) {

    super(obj);
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        this[prop] = obj[prop];
      }
    }

    this.type = 'list';
  }
  
  set(value) {
    if (typeof(value) == 'string') {

      var list = [];
      var splitString = value.split(',');
      for (var i = 0; i < splitString.length; ++i) {
        list.push(splitString[i].trim());
      }

      return list;
    }
    else if (value instanceof Array) return value;
    else return Array(value);
  }
}

this.Field = Field;
this.DateField = DateField;
this.StringField = StringField;
this.HashedField = HashedField;
this.ListField = ListField;
