<template>
  <router-link tag="li"
               :to="url"
               active-class="sidebar__nav-item--active"
  >
    <a href="#" class="sidebar__nav-link p-3">{{ title }}</a>
  </router-link>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  border-right: 2px solid #ECE9E4;
  min-height: calc(100vh - 50px);
}

.sidebar__nav {
  list-style: none;
  padding-left: 0;
}

.sidebar__nav-item--active {
  .sidebar__nav-link {
    background-color: #FAF7F2;
  }
}

.sidebar__nav-link {
  display: block;
  color: #333333;
  width: 100%;
  transition: background-color .3s;
  text-decoration: none;

  &:hover {
    background-color: #ECE9E4;
  }
}
</style>
