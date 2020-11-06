<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import DefaultLayout from '@/layouts/DefaultLayout'
// eslint-disable-next-line no-unused-vars
import EmptyLayout from '@/layouts/EmptyLayout'

export default {
  components: {
    DefaultLayout,
    EmptyLayout
  },
  computed: {
    layout () {
      return getFullLayoutName(this.$route.meta.layout || 'default')
    }
  }
}

function getFullLayoutName (layoutName) {
  return layoutName[0].toUpperCase() + layoutName.slice(1) + 'Layout'
}
</script>
