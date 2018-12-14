<template lang="html">
  <b-nav
    class="navbar-left"
    vertical >
    <b-nav-item>
      <img src="~/assets/icons/Dashboard.svg">
      Dashboard
    </b-nav-item>
    <b-nav-item>
      <img src="~/assets/icons/FAQ.svg">
      FAQ
    </b-nav-item>
    <b-nav-item>
      <img src="~/assets/icons/Sign out.svg">
      Sign out
    </b-nav-item>
  </b-nav>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss">
$navbar-left-bg-color: #264e66;
.navbar-left {
  text-align: center;
  left: 0;
  width: 4.375rem;
  position: fixed;
  top: 3.75rem;
  padding-top: 0.5rem;
  line-height: 1.5rem;
  bottom: 0;
  background-color: $navbar-left-bg-color;
  a {
    padding: 1rem 0;
    font-weight: 700;
    color: white;
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
