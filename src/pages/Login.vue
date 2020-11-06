<template>
  <div class="container-fluid registration">
    <div class="row login__row d-flex align-items-center">
      <div class="col-4 offset-4">
        <LoginForm/>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/auth/LoginForm'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style scoped lang="scss">
  .login__row {
    height: 100vh;
  }
</style>
