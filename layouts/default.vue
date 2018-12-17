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
</style>
