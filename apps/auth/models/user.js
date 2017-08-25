
var path = require('path');
var crypto = require('crypto');

var Model = require('../../../lib/models/model');
var fields = require('../../../lib/models/fields');
var generateToken = require('../../../lib/utils/generate-token');

var app = require('../app');

var config = require(path.join(process.cwd(), 'config'));

class User extends Model {

  static getMetadata() {
    return {
      indexField: 'username',
      model: 'User'
    }
  }
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
      password: new fields.StringField({
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
      }),
      token: new fields.StringField({
        edit: false,
      }),
      tokenExpiration: new fields.DateField({
        edit: false,
        required: false
      })
    };
  }

  constructor(obj) {
    super('User', obj);
  }

  checkPassword(password) {
    if (this.password == password)
      return true;
    else return false;
  }
  checkToken(token) {
    if (this.token == token) return true;
    else return false;
  }
  createToken() {
    this.token = generateToken(32);
    this.tokenExpiration = new Date();
    this.tokenExpiration.setDate(new Date().getDate() + 3);
    this.save(function() {});
    return this.token;
  }
}

module.exports = User;