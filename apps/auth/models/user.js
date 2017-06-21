
var Model = require('carolina/lib/models/model');
var fields = require('carolina/lib/models/fields');

class User extends Model {

  static getSchema() {
    return {
      username: new fields.StringField({
        adminEdit: false,
        edit: false,
        max: 32,
        min: 4,
        required: true,
        unique: true
      }),
      password: new fields.HashedField({
        max: 32,
        min: 4,
        required: true
      }),
      emailAddress: new fields.StringField({
        required: true,
        unique: true
      }),
      groups: new fields.ListField({
        autoIncludes: ['all'],
        edit: false
      }),
      bio: new fields.StringField({
        textArea: true
      })
    };
  }

  constructor(obj) {
    super('User', obj);
  }
}