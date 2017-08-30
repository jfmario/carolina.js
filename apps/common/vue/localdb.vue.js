
var CarolinaLocalDb = {
  get: function(app, key) {
    return window.localStorage.getItem(app + '-' + key);
  },
  set: function(app, key, value) {
    window.localStorage.setItem(app + '-' + key, value);
  },
  delete: function(app, key) {
    window.localStorage.removeItem(app + '-' + key);
  }
};