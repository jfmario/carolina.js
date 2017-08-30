
Vue.component('carolina-auth-forgot-password', {
  data: function () {
    return {
      errorMessage: null,
      username: ''
    }
  },
  methods: {
    passwordReset: function () {
      var self = this;
      $.ajax({
        url: window.location.pathname + '/api/reset-password',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          username: this.username
        }),
        success: function(data) {
          self.$emit('reset');
        },
        error: function(jxhr) {
          self.errorMessage = jxhr.responseJSON.error;
        }
      });
    }
  },
  template: `
    <div>

      <h2>Password Reset</h2>

      <form class="form" @submit.prevent="passwordReset">
        
        <div class="alert alert-danger" v-if="errorMessage">
          {{ errorMessage }}
        </div>

        <div class="form-group">

          <label>Username</label>

          <input class="form-control" type="text" v-model="username" />
        </div>
        <div class="alert alert-warning">
          This will only work if your e-mail address on file is valid.
        </div>

        <button class="btn btn-danger">Reset Password</button>
      </form>
    </div>
  `
});