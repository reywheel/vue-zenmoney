<template>
  <section class="header row">
    <div class="col">
      <div class="header__burger" @click="$emit('clickOnBurger')">
        <i v-if="sidebarIsOpen" class="header__burger-icon fa fa-times"></i>
        <i v-else class="header__burger-icon fa fa-bars"></i>
      </div>
    </div>
    <div class="col d-flex justify-content-center">
      <a href="#" class="header__logo">ZenMoney</a>
    </div>
    <div class="col d-flex justify-content-end">
      <a href="#" class="header__profile">profile</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppHeader',
  props: ['sidebarIsOpen']
}
</script>

<style scoped lang="scss">
  .header {
    height: 50px;
    background-color: #EF4136;
    display: flex;
    align-items: center;

    &__logo {
      color: white;
    }

    &__burger {
      color: white;
      cursor: pointer;

      &-icon {
        font-size: 20px;
      }
    }

    &__profile {
      color: white;
    }
  }
</style>
