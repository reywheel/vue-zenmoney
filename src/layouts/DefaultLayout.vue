<template>
  <div class="container-fluid">
    <section class="header row">
      <div class="col">
        <div class="header__burger" @click="sidebarIsOpen = !sidebarIsOpen">
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
    <section class="body row">
      <section class="sidebar px-0" :class="sidebarClass">
        <ul class="sidebar__nav">
          <AppMenuItem v-for="link of links"
                    :key="link.link"
                    :link="link.link"
                    :title="link.title"
          />
        </ul>
      </section>
      <section class="content py-3" :class="contentClass">
        <slot></slot>
      </section>
    </section>
  </div>
</template>

<script>
import AppMenuItem from '@/components/sidebar/AppMenuItem'

export default {
  name: 'DefaultLayout',
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
      ],
      sidebarIsOpen: true
    }
  },
  computed: {
    sidebarClass () {
      return this.sidebarIsOpen ? 'col-2' : 'col-0 hide'
    },
    contentClass () {
      return this.sidebarIsOpen ? 'col-10' : 'col-12'
    }
  }
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

  .sidebar {
    border-right: 2px solid #ECE9E4;
    min-height: calc(100vh - 50px);

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
    width: 0;
    opacity: 0;
    pointer-events: none;
  }
</style>
