
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
        name: "Username",
        required: true,
        unique: true
      }),
      password: new fields.HashedField({
        adminEdit: true,
        edit: false,
        hidden: false,
        max: 32,
        min: 4,
        name: "Password",
        required: true
      }),
      emailAddress: new fields.StringField({
        name: "E-Mail Address",
        required: false,
        unique: true
      }),
      emailToken: new fields.StringField({
        hidden: true
      }),
      emailTokenExpiration: new fields.DateField({
        edit: false
      }),
      emailVerified: new fields.BooleanField({
        default: false,
        edit: false,
        name: "Email Verified"
      }),
      groups: new fields.ListField({
        default: ['all'],
        edit: false
      }),
      bio: new fields.StringField({
        textArea: true
      }),
      token: new fields.StringField({
        hidden: true,
      }),
      tokenExpiration: new fields.DateField({
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