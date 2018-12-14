<template>
  <div>
    <top-menu />
    <side-menu v-if="loggedIn"/>
    <nuxt/>
  </div>
</template>

<script>
import TopMenu from '@/components/TopMenu.vue'
import SideMenu from '@/components/SideMenu.vue'

export default {
  components: {
    TopMenu,
    SideMenu
  }
}
</script>

<style lang="scss">
$body-bg-color: #ebeff4;
$default-color: #354650;
body {
  background-color: $body-bg-color;
  font-family: 'Lato';
  font-size: 0.75rem;
  color: $default-color;
  line-height: 1rem;
}
</style>
