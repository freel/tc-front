<template>
  <div class="container top">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <form @submit.prevent="loginUser">
              <div class="form-group row">
                <label
                  for="email"
                  class="col-sm-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    v-model="userForm.email"
                    type="email"
                    class="form-control"
                    value="freel.k@gmail.com"
                    required
                    autofocus>
                  <span
                    class="invalid-feedback"
                    role="alert">
                    <strong/>
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="password"
                  class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    v-model="userForm.password"
                    type="password"
                    class="form-control"
                    value="Ckj;ysq"
                    required>
                  <span
                    class="invalid-feedback"
                    role="alert">
                    <strong/>
                  </span>
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button
                    type="submit"
                    class="btn btn-sm btn-primary">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async loginUser() {
      await this.$auth.login({
        data: this.userForm
      })
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style>
.top {
  margin-top: 80px;
}
</style>
