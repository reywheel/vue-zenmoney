<template>
  <div class="container-fluid">
    <AppHeader :sidebar-is-open="sidebarIsOpen"
               @clickOnBurger="sidebarIsOpen = !sidebarIsOpen"
    />
    <section class="body row">
      <AppSidebar :sidebar-is-open="sidebarIsOpen" />
      <section class="content py-3" :class="contentClass">
        <slot></slot>
      </section>
    </section>
  </div>
</template>

<script>
import AppSidebar from '@/components/app/sidebar/AppSidebar'
import AppHeader from '@/components/app/header/AppHeader'

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppSidebar
  },
  data () {
    return {
      sidebarIsOpen: true
    }
  },
  computed: {
    contentClass () {
      return this.sidebarIsOpen ? 'col-10' : 'col-12'
    }
  }
}
</script>

<style scoped lang="scss">
</style>
