<template>
  <div class="container-fluid registration">
    <div class="row registration__row d-flex align-items-center">
      <div class="col-4 offset-4">
        <RegistrationForm/>
      </div>
    </div>
  </div>
</template>

<script>
import RegistrationForm from '@/components/auth/RegistrationForm'

export default {
  name: 'Registration',
  components: {
    RegistrationForm
  }
}
</script>

<style scoped lang="scss">
  .registration__row {
    height: 100vh;
  }
</style>
