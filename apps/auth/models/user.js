
var Model = require('../../../lib/models/model');
var fields = require('../../../lib/models/fields');

var app = require('../app');

class User extends Model {

  getSchema() {
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
        required: false,
        unique: true
      }),
      groups: new fields.ListField({
        default: ['all'],
        edit: false
      }),
      bio: new fields.StringField({
        textArea: true
      })
    };
  }

  constructor(obj) {
    super('User', app.name, obj);
  }
}

module.exports = User;