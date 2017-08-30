
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
      this.checkLogin(username, token);
    }
    else this.currentStatus = this.status.LOGIN;
  },
  data: function () {
    return {
      currentStatus: 0,
      errorMessage: null,
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

      $.ajax({
        url: window.location.pathname + '/api/check',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          carolinaUser: username,
          carolinaToken: token
        }),
        success: function(data) {
          self.currentStatus = self.status.LOGGED_IN;
        },
        error: function(jxhr) {
          self.currentStatus = self.status.CHECK_FAIL;
        }
      });
    },
    loginLink: function () {
      this.currentStatus = this.status.LOGIN;
    },
    onLoginSuccess: function () {
      this.successMessage = "You are now logged in.";
      this.errorMessage = null;
      this.profileLink();
    },
    onLogout: function() {
      this.loginLink();
    },
    onProfileFailure: function () {
      this.successMessage = null;
      this.errorMessage = "There was a problem logging you on. Please login again.";
      this.loginLink();
    },
    onRegisterSuccess: function () {
      this.successMessage = "Registration successful. You can login now.";
      this.errorMessage = null;
      this.loginLink();
    },
    profileLink: function () {
      this.currentStatus = this.status.LOGGED_IN;
    },
    registerLink: function() {
      this.currentStatus = this.status.REGISTER;
    }
  },
  template: `
    <div>

      <br />

      <div class="alert alert-success" v-if="successMessage">
        {{ successMessage }}
      </div>
      <div class="alert alert-danger" v-if="errorMessage">
        {{ errorMessage }}
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
        <carolina-auth-login v-on:success="onLoginSuccess"></carolina-auth-login>
      </div>
      <div v-if="currentStatus==status.REGISTER">
        
        <p>
          Please register below or <a href="" @click.stop.prevent="loginLink">login</a>.
        </p>

        <carolina-auth-register v-on:success="onRegisterSuccess"></carolina-auth-register>
      </div>
      <div v-if="currentStatus==status.LOGGED_IN">
        <carolina-auth-profile v-on:failure="onProfileFailure" v-on:logout="onLogout"></carolina-auth-profile>
      </div>
    </div>
  `
});