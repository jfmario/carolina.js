
Vue.component('carolina-auth-profile', {
  created: function () {
    var self = this;
    $.ajax({
        url: window.location.pathname + '/api/profile',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          carolinaUser: CarolinaLocalDb.get('carolinaAuthenticationApp', 'carolinaUsername'),
          carolinaToken: CarolinaLocalDb.get('carolinaAuthenticationApp', 'carolinaToken')
        }),
        success: function(data) {
          self.username = data.username;
          self.emailAddress = data.emailAddress;
          self.emailVerified = data.emailVerified;
          self.isReady = true;
        },
        error: function(jxhr) {
          self.$emit("failure");
        }
      });
  },
  data: function () {
    return {
      errorMessage: null,
      inputEmail: '',
      isReady: false,
      username: '',
      emailAddress: '',
      emailVerified: '',
      emailToken: '',
      password: '',
      newPassword1: '',
      newPassword2: '',
      passwordError: null,
      passwordSuccess: null,
      sentEmail: '',
      verificationSent: false
    }
  },
  methods: {
    changePassword: function () {
      
      if (this.newPassword1 != this.newPassword2) {
        this.passwordError = "Passwords do not match.";
        return;
      }
      var self = this;

      $.ajax({
        url: window.location.pathname + '/api/change-password',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          carolinaUser: CarolinaLocalDb.get('carolinaAuthenticationApp', 'carolinaUsername'),
          carolinaToken: CarolinaLocalDb.get('carolinaAuthenticationApp', 'carolinaToken'),
          oldPassword: sha512(this.password + carolinaData.TOKEN),
          newPassword: sha512(this.newPassword1 + carolinaData.TOKEN)
        }),
        success: function(data) {
          self.password = '';
          self.newPassword1 = '';
          self.newPassword2 = '';
          self.passwordError = '';
          self.passwordSuccess = "Password successfully changed.";
        },
        error: function(jxhr) {
          self.passwordSuccess = '';
          self.passwordError = jxhr.responseJSON.error;
        }
      });
    },
    logout: function () {

      CarolinaLocalDb.delete('carolinaAuthenticationApp', 'carolinaUsername');
      CarolinaLocalDb.delete('carolinaAuthenticationApp', 'carolinaToken');

      this.errorMessage = null;
      this.successMessage = "You have logged out."
      this.$emit('logout');
    },
    sendVerificationCodeLink: function () {
      var self = this;
      $.ajax({
        url: window.location.pathname + '/api/send-email-verification',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          carolinaUser: CarolinaLocalDb.get('carolinaAuthenticationApp', 'carolinaUsername'),
          carolinaToken: CarolinaLocalDb.get('carolinaAuthenticationApp', 'carolinaToken'),
        }),
        success: function(data) {
          self.verificationSent = true;
        },
        error: function(jxhr) {
          console.log("There was some error.");
        }
      });
    },
    submitEmailAddress: function () {
      var self = this;
      self.sentEmail = self.inputEmail;
      $.ajax({
        url: window.location.pathname + '/api/change-email',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          carolinaUser: CarolinaLocalDb.get('carolinaAuthenticationApp', 'carolinaUsername'),
          carolinaToken: CarolinaLocalDb.get('carolinaAuthenticationApp', 'carolinaToken'),
          newEmailAddress: self.sentEmail
        }),
        success: function(data) {
          self.emailAddress = self.sentEmail;
          self.emailVerified = false;
          self.verificationSent = false;
        },
        error: function(jxhr) {
          self.errorMessage = jxhr.responseJSON.error;
        }
      });
    },
    submitEmailToken: function () {
      var self = this;
      $.ajax({
        url: window.location.pathname + '/api/confirm-email',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          carolinaUser: CarolinaLocalDb.get('carolinaAuthenticationApp', 'carolinaUsername'),
          carolinaToken: CarolinaLocalDb.get('carolinaAuthenticationApp', 'carolinaToken'),
          emailVerificationToken: self.emailToken
        }),
        success: function(data) {
          self.emailVerified = true;
        },
        error: function(jxhr) {
          self.errorMessage = jxhr.responseJSON.error;
        }
      });
    }
  },
  template: `
    <div>
      <div v-if="isReady">

        <h2>Account: {{ username }}</h2>

        <div class="alert alert-danger" v-if="errorMessage">
          {{ errorMessage }}
        </div>
        <div v-if="emailAddress">
          <p>
            <b>E-Mail Address</b>: {{ emailAddress }}
            <span class="badge badge-success" v-if="emailVerified">Verified</span>
            <span class="badge badge-warning" v-else>Not Verified</span>
          </p>
          <div v-if="!emailVerified">

            <h3>E-mail Verification</h3>

            <p>
              <a href="" @click.stop.prevent="sendVerificationCodeLink">Click here</a>
              to have a verification code sent to your e-mail inbox.
              Once you have it, submit it below:
            </p>

            <div class="alert alert-info" v-if="verificationSent">
              Verification e-mail sent.
            </div>

            <form class="form" @submit.prevent="submitEmailToken">

              <div class="form-group">
                <label>E-Mail Verification Token</label>

                <input class="form-control" type="text" v-model="emailToken" />
              </div>

              <button class="btn btn-info" type="submit">Submit</button>
            </form>
          </div>
          <div>

            <h3>New E-mail Address</h3>

            <p>
              If you wish to provide an updated e-mail address,
              you may do so below.
            </p>

            <form class="form" @submit.prevent="submitEmailAddress">

              <div class="form-group">
                <label>E-Mail Address</label>

                <input class="form-control" type="text" v-model="inputEmail" />
              </div>

              <button class="btn btn-info" type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div v-else>

          <h3>E-mail Address</h3>

          <p>
            You do not currently have an e-mail address on file.
            You should provide one below:
          </p>

          <form class="form" @submit.prevent="submitEmailAddress">

            <div class="form-group">
              <label>E-Mail Address</label>

              <input class="form-control" type="text" v-model="inputEmail" />
            </div>

            <button class="btn btn-info" type="submit">Submit</button>
          </form>
        </div>

        <h3>Password Change</h3>

        <p>
          If you want to change your password,
          you can do that below.
        </p>

        <div class="alert alert-danger" v-if="passwordError">
          {{ passwordError }}
        </div>
        <div class="alert alert-success" v-if="passwordSuccess">
          {{ passwordSuccess }}
        </div>

        <form class="form" @submit.prevent="changePassword">

          <div class="form-group">

            <label>Current Password</label>

            <input class="form-control" type="password" v-model="password" />
          </div>
          <div class="form-group">

            <label>New Password</label>

            <input class="form-control" type="password" v-model="newPassword1" />
          </div>
          <div class="form-group">

            <label>Confirm New Password</label>

            <input class="form-control" type="password" v-model="newPassword2" />
          </div>

          <button class="btn btn-warning" type="submit">Change</button>
        </form>

        <h3>Logout</h3>

        <p>Click the button to logout.</p>

        <button class="btn btn-lg btn-danger" @click="logout">Log Out</button>
      </div>
      <div v-else>
        Checking your account...
      </div>
    </div>
  `
});