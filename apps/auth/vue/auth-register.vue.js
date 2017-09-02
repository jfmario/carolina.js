
Vue.component('carolina-auth-register', {
  data: function () {
    return {
      username: '',
      password1: '',
      password2: '',
      emailAddress: '',
      error: null
    }
  },
  methods: {
    register: function () {
      
      if (this.password1 != this.password2) {
        this.error = "Passwords do not match.";
        return;
      }
      
      var self = this;
      $.ajax({
        url: window.location.pathname + '/api/register',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          username: this.username,
          password: sha512(this.password1 + carolinaData.TOKEN),
          emailAddress: this.emailAddress
        }),
        success: function(data) {
          self.error = null;
          self.$emit("success");
        },
        error: function(jxhr) {
          self.error = jxhr.responseJSON.error;
        }
      });
    }
  },
  template: `
    <form @submit.prevent="register">
      
      <h3>Registration Form</h3>
      
      <div class="alert alert-danger" v-if="error">
        <b>Error:</b> {{ error }}
      </div>
      <div class="form-group">

        <label>Username</label>
        
        <input class="form-control" type="text" v-model="username" />
      </div>
      <div class="form-group">

        <label>Password</label>

        <input class="form-control" type="password" v-model="password1" />
      </div>
      <div class="form-group">

        <label>Confirm Password</label>

        <input class="form-control" type="password" v-model="password2" />
      </div>
      <div class="form-group">

        <label>Email Address</label>
        
        <input class="form-control" type="text" v-model="emailAddress" />
      </div>

      <button class="btn btn-primary">Register</button>
    </form>
  `
});