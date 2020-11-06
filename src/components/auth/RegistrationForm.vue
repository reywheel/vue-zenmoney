<template>
  <form action="#" class="card card-body">
    <h5 class="card-title form__title text-center">ZenMoney</h5>
    <div class="form-group">
      <label for="name">Имя</label>
      <input type="text" class="form-control" id="name">
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" class="form-control" id="email">
    </div>
    <div class="form-group">
      <label for="password">Пароль</label>
      <input type="password" class="form-control" id="password">
    </div>
    <div class="form-group">
      <label for="confirm_password">Повторите пароль</label>
      <input type="password" class="form-control" id="confirm_password">
    </div>
    <button type="submit" class="btn btn-danger">Зарегистрироваться</button>
  </form>
</template>

<script>
export default {
  name: 'RegistrationForm'
}
</script>

<style scoped lang="scss">
  .form__title {
    color: #EF4136;
    font-weight: 700;
  }
</style>
