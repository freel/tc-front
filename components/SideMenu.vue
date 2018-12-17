<template lang="html">
  <b-navbar
    toggleable
    class="navbar-left">
    <b-navbar-toggle target="left_nav_collapse" />

    <b-collapse
      id="left_nav_collapse"
      is-nav >

      <b-navbar-nav
        class="flex-column">
        <b-nav-item>
          <img src="~/assets/icons/Dashboard.svg">
          Dashboard
        </b-nav-item>
        <b-nav-item>
          <img src="~/assets/icons/FAQ.svg">
          FAQ
        </b-nav-item>
        <b-nav-item
          @click="logout">
          <img src="~/assets/icons/Sign out.svg">
          Sign out
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
    }
  }
}
</script>

<style lang="scss" scope>
@import '~/assets/scss/base.scss';
$font-size: $font-size-base * 0.75;
.navbar-left {
  position: absolute !important;
  // width: 1rem;
  // margin-left: 0.5rem;
  z-index: 1050;
  background-color: $lp-color !important;
  align-items: baseline !important;
  font-size: $font-size;
  text-align: center;
  .navbar-toggler {
    position: absolute;
  }
  .navbar-collapse {
    padding-top: 0.5rem;
    .navbar-nav {
      margin-top: 1.5rem;
      width: $lp-width;
      .nav-link {
        padding: 1rem 0;
        font-weight: 700;
        color: white;
        transition: 0.3s;
        &:hover {
          background-color: darken($lp-color, 10%) !important;
          // transform: scale(1.1);
          color: white;
          box-shadow: $box-shadow;
          transition: 0.2s;
        }
        img {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }
}
@media (min-width: 576px) {
  .navbar-left {
    position: fixed !important;
    line-height: 2.2;
    top: $tp-height;
    left: 0;
    bottom: 0;
    .navbar-toggler {
      margin-left: $lp-width;
    }
  }
}
</style>
