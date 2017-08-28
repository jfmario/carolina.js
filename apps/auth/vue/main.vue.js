
var app = new Vue({
  computed: {
    pageStatus: {
      cache: false,
      get: function() { return this.currentStatus }
    }
  },
  created: function() {
    
    this.currentStatus = this.status.INITIAL_CHECK;
    console.log(this.currentStatus);

    var username = CarolinaLocalDb.get('carolinaAuthenticationApp', 'carolinaUsername');
    var token = CarolinaLocalDb.get('carolinaAuthenticationApp', 'carolinaToken');

    if (username && token) {
      this.checkStatus(username, token);
    }
    else this.currentStatus = this.status.LOGIN;
  },
  data: function () {
    return {
      currentStatus: 0,
      status: {
        INITIAL_CHECK: 0,
        CHECK_FAIL: 1,
        REGISTER: 2,
        LOGIN: 3,
        LOGGED_IN: 4
      },
      successMessage: null
    }
  },
  el: '#carolinaVueApp',
  methods: {
    checkLogin: function(username, token) {
      
      var self = this;

      $.post(window.location.pathname + '/api/check', {
        carolinaUser: username,
        carolinaToken: token
      }, function(data) {
        if (data.message == 'OK') {
          self.status = self.status.LOGGED_IN;
        }
        else {
          self.status = self.status.CHECK_FAIL;
        }
      }, 'json')
    },
    loginLink: function () {
      this.currentStatus = this.status.LOGIN;
    },
    onRegisterSuccess: function () {
      this.successMessage = "Registration successful. You can login now.",
      this.loginLink();
    },
    registerLink: function() {
      this.currentStatus = this.status.REGISTER
    }
  },
  template: `
    <div>

      <br />

      <div class="alert alert-success" v-if="successMessage">
        {{ successMessage }}
      </div>
      <div v-if="currentStatus==0">
        <p>Welcome, checking login status...</p>
      </div>
      <div v-if="currentStatus==status.LOGIN || currentStatus==status.CHECK_FAIL">
        <div
          class="alert alert-warning"
          v-if="currentStatus==status.CHECK_FAIL"
        >
          <b>Uh-oh!</b> Your authentication token is invalid or expired.
          Please login below.
        </div>
        <div
          v-if="currentStatus==status.LOGIN"
        >
          <p>
            Please login below or <a href="" @click.stop.prevent="registerLink">register</a>.
          </p>
        </div>
        <carolina-auth-login></carolina-auth-login>
      </div>
      <div v-if="currentStatus==status.REGISTER">
        
        <p>
          Please register below or <a href="" @click.stop.prevent="loginLink">login</a>.
        </p>

        <carolina-auth-register v-on:success="onRegisterSuccess"></carolina-auth-register>
      </div>
    </div>
  `
});