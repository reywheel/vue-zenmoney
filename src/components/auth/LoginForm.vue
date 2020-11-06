<template>
  <div>
    <form action="#" class="card card-body" @submit.prevent="formSubmit">
      <h5 class="card-title form__title text-center">Войти в <span class="form__title--red">ZenMoney</span></h5>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" :class="{ 'is-invalid': $v.email.$error }" id="email" v-model.trim="email">
        <small class="form-text text-danger" v-if="$v.email.$error && !$v.email.required">Обязательное поле</small>
        <small class="form-text text-danger" v-if="$v.email.$error && !$v.email.email">Введите корректный email</small>
      </div>
      <div class="form-group">
        <label for="password">Пароль</label>
        <input type="password" class="form-control" :class="{ 'is-invalid': $v.password.$error }" id="password" v-model.trim="password">
        <small class="form-text text-danger" v-if="$v.password.$error && !$v.password.required">Обязательное поле</small>
        <small class="form-text text-danger" v-if="$v.password.$error && !$v.password.minLength">Минимальная длина {{ $v.password.$params.minLength.min }}</small>
      </div>
      <button type="submit" class="btn btn-danger mt-3">Войти</button>
    </form>
    <div class="text-center mt-3">
      <router-link tag="a" :to="{ name: 'registration' }" class="link">Ещё не зарегистрированы?</router-link>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    formSubmit () {
      this.$v.$touch()

      if (!this.$v.$error) {
        return this.$router.push({ name: 'operations' })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .form__title {

    &--red {
    color: #EF4136;
    font-weight: 700;
    }
  }
</style>
