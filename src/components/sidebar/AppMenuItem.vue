<template>
  <li class="sidebar__nav-item"><router-link :to="link" class="sidebar__nav-link p-3">{{ title }}</router-link></li>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
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

  &__nav {
     list-style: none;
     padding-left: 0;

    &-link {
      display: block;
      color: #333333;
      width: 100%;
      transition: background-color .3s;
      text-decoration: none;

      &:hover {
        background-color: #ECE9E4;
      }
    }
  }
}
</style>
