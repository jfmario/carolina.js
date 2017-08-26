
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
    if (!obj.hasOwnProperty('hidden')) this.hidden = false;
    if (!obj.hasOwnProperty('name')) this.name = "Field";
    if (!obj.hasOwnProperty('required')) this.required = false;
    if (!obj.hasOwnProperty('unique')) this.unique = false;

    this.type = 'generic';
  }

  set(value) {
    return value;
  }

  getVueField(isAdmin) {
    return '';
  }
}

class BooleanField extends Field {

  constructor(obj) {

    super(obj);
    if (!obj.hasOwnProperty('default')) this.default = false;

    this.type = 'date';
  }

  set(value) {
    if (value) return true;
    else return false;
  }
  getVueField(model, fieldname, isAdmin) {

    if (this.hidden) return '';

    var field = '<input class="form-control" type="checkbox" name="' + fieldname + '" ';
    var pattern = null;

    if (!this.adminEdit) field += "disabled ";
    if (!this.edit) {
      if (this.adminEdit && isAdmin);
      else field += "disabled ";
    }

    field += `v-model="${model}.${fieldname}" />`;
    return `<label>${fieldname}</label>${field}`
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
  getVueField(model, fieldname, isAdmin) {

    if (this.hidden) return '';

    var field = '<input class="form-control" type="date" name="' + fieldname + '" ';
    var pattern = null;

    if (!this.adminEdit) field += "disabled ";
    if (!this.edit) {
      if (this.adminEdit && isAdmin);
      else field += "disabled ";
    }
    if (this.required) field += "required ";

    field += `v-model="${model}.${fieldname}" />`;
    return `<label>${fieldname}</label>${field}`
  }
}

class StringField extends Field {

  constructor(obj) {
    super(obj);
    
    if (!obj.hasOwnProperty('default')) this.default = '';
    if (!obj.hasOwnProperty('max')) this.max = null;
    if (!obj.hasOwnProperty('min')) this.min = null;

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
  getVueField(model, fieldname, isAdmin) {

    if (this.hidden) return '';

    var field = '<input class="form-control" type="text" name="' + fieldname + '" ';
    var pattern = null;

    if (!this.adminEdit) field += "disabled ";
    if (!this.edit) {
      if (this.adminEdit && isAdmin);
      else field += "disabled ";
    }
    if (this.max && this.min) pattern="{" + this.min + ',' + this.max + '}';
    else if (this.max) pattern = "{," + this.max + '}';
    else if (this.min) pattern = "{" + this.min + ",}";
    if (pattern) {
      pattern = "." + pattern;
      field += 'pattern="' + pattern + '" ';
    }
    if (this.required) field += "required ";

    field += `v-model="${model}.${fieldname}" />`;
    return `<label>${fieldname}</label>${field}`
  }
}

class HashedField extends StringField {

  constructor(obj) {

    super(obj);
    
    if (!obj.hasOwnProperty('algorithm')) this.algorithm = 'sha512';

    this.type = 'hash';
  }

  set(value) {
    return value.toString();
  }
  getVueField(model, fieldname, isAdmin) {

    if (this.hidden) return '';

    var field = '<input class="form-control" type="password" name="' + fieldname + '" ';
    var pattern = null;

    if (!this.adminEdit) field += "disabled ";
    if (!this.edit) {
      if (this.adminEdit && isAdmin);
      else field += "disabled ";
    }
    if (this.max && this.min) pattern="{" + this.min + ',' + this.max + '}';
    else if (this.max) pattern = "{," + this.max + '}';
    else if (this.min) pattern = "{" + this.min + ",}";
    if (pattern) {
      pattern = "." + pattern;
      field += 'pattern="' + pattern + '" ';
    }
    if (this.required) field += "required ";

    field += `v-model="${model}.${fieldname}" />`;
    return `<label>${fieldname}</label>${field}`;
  }
}

class ListField extends StringField {

  constructor(obj) {

    super(obj);
    

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
this.BooleanField = BooleanField;
this.DateField = DateField;
this.StringField = StringField;
this.HashedField = HashedField;
this.ListField = ListField;
