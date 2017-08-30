
Vue.component('carolina-auth-login', {
  data: function () {
    return {
      error: null,
      password: '',
      username: ''
    }
  },
  methods: {
    forgotPassword: function () {
      this.$emit('forgot');
    },
    login: function () {
      var self = this;
      $.ajax({
        url: window.location.pathname + '/api/login',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          username: this.username,
          password: this.password
        }),
        success: function(data) {

          self.error = null;
          CarolinaLocalDb.set('carolinaAuthenticationApp', 'carolinaUsername', self.username);

          CarolinaLocalDb.set('carolinaAuthenticationApp', 'carolinaToken', data.carolinaToken);

          self.$emit('success');
        },
        error: function(jxhr) {
          self.error = jxhr.responseJSON.error;
        }
      });
    }
  },
  template: `
    <form @submit.prevent="login">
      
      <h3>Login Form</h3>

      <div class="alert alert-danger" v-if="error">
        <b>Error:</b> {{ error }}
      </div>
      <div class="form-group">

        <label>Username</label>
        
        <input class="form-control" type="text" v-model="username" />
      </div>
      <div class="form-group">

        <label>Password</label>

        <input class="form-control" type="password" v-model="password" />
      </div>

      <button class="btn btn-primary">Log In</button>

      <p>
        If you forgot your password,
        <a href='' @click.stop.prevent="forgotPassword">click here</a>.
      </p>
    </form>
  `
});