<template>
  <section class="sidebar px-0" :class="sidebarClass">
    <ul class="sidebar__nav">
      <AppMenuItem v-for="link of links"
                   :key="link.link"
                   :url="link.link"
                   :title="link.title"
      />
    </ul>
  </section>
</template>

<script>
import AppMenuItem from '@/components/app/sidebar/AppMenuItem'

export default {
  name: 'AppSidebar',
  props: ['sidebarIsOpen'],
  components: {
    AppMenuItem
  },
  data () {
    return {
      links: [
        {
          title: 'Счета',
          link: 'accounts'
        },
        {
          title: 'Операции',
          link: 'operations'
        },
        {
          title: 'Ещё',
          link: 'more'
        }
      ]
    }
  },
  computed: {
    sidebarClass () {
      return this.sidebarIsOpen ? 'col-2' : 'col-0 hide'
    }
  }
}
</script>

<style scoped lang="scss">
  .sidebar {
    border-right: 2px solid #ECE9E4;
    min-height: calc(100vh - 50px);
    transition: all .3s;

    &__nav {
      list-style: none;
      padding-left: 0;

      &-item {
      }

      &-link {
        display: block;
        width: 100%;
        transition: background-color .3s;
        text-decoration: none;

        &:hover {
          background-color: #ECE9E4;
        }
      }
    }
  }

  .hide {
    display: none;
  }
</style>
