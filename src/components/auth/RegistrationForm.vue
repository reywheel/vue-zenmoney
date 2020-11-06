<template>
  <form action="#" class="card card-body" @submit.prevent="formSubmit">
    <h5 class="card-title form__title text-center">ZenMoney</h5>
    <div class="form-group">
      <label for="name">Имя</label>
      <input type="text" class="form-control" :class="{ 'is-invalid': $v.name.$error }" id="name" v-model.trim="name" autocomplete="off">
      <small class="form-text text-danger" v-if="$v.name.$error && !$v.name.required">Обязательное поле</small>
      <small class="form-text text-danger" v-if="$v.name.$error && !$v.name.minLength">Минимальная длина {{ $v.name.$params.minLength.min }}</small>
    </div>
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
    <div class="form-group">
      <label for="confirm_password">Повторите пароль</label>
      <input type="password" class="form-control" :class="{ 'is-invalid': $v.confirmPassword.$error }" id="confirm_password" v-model.trim="confirmPassword">
      <small class="form-text text-danger" v-if="$v.confirmPassword.$error && !$v.confirmPassword.required">Обязательное поле</small>
      <small class="form-text text-danger" v-if="$v.confirmPassword.$error && !$v.confirmPassword.minLength">Минимальная длина {{ $v.confirmPassword.$params.minLength.min }}</small>
      <small class="form-text text-danger" v-if="$v.confirmPassword.$error && !$v.confirmPassword.sameAs">Пароли должны совпадать</small>
    </div>
    <button type="submit" class="btn btn-danger mt-3">Зарегистрироваться</button>
  </form>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'RegistrationForm',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(3)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPassword: {
      required,
      minLength: minLength(6),
      sameAs: sameAs('password')
    }
  },
  methods: {
    formSubmit () {
      this.$v.$touch()

      if (!this.$v.error) {
        return this.$router.push({ name: 'operations' })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .form__title {
    color: #EF4136;
    font-weight: 700;
  }
</style>
