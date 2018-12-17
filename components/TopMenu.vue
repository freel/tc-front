<template lang="html">
  <b-navbar
    toggleable="md"
    class="navbar-top"
    variant="white"
    fixed="top">

    <b-navbar-brand
      href="#"
      class="navbar-brand">
      <img src="~/assets/icons/TrueCare24_logo.svg">
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse
      id="nav_collapse"
      is-nav >

      <b-navbar-nav>
        <b-nav-item
          href="#"
          class="top-nav-back">
          <img
            src="~/assets/icons/Back 1.svg">
          Back
        </b-nav-item>
        <b-nav-form
          class="px-4">
          <b-input-group>
            <b-form-input
              placeholder="Go to case ID#"/>
            <b-input-group-append>
              <b-btn
                variant="primary">
                <img
                  src="~/assets/icons/Go.svg"
                  alt="">
              </b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-nav-form>
        <b-nav-item
          href="#">
          <img
            src="~/assets/icons/Fulfillment KPIs.svg">
          Fulfillment KPIs
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto mr-2">
        <template v-if="!loggedIn">
          <b-nav-item href="#">
            <nuxt-link
              :to="{ name: 'login' }"
              class="nav-link">
              Login
            </nuxt-link>
          </b-nav-item>
          <b-nav-item href="#">
            <nuxt-link
              :to="{ name: 'register' }"
              class="nav-link">
              Register
            </nuxt-link>
          </b-nav-item>
        </template>
        <template v-if="loggedIn">
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              {{ user.email }}
            </template>
            <b-dropdown-item
              href="#"
              @click="logout">
              Logout
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </template>
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
$font-size: $font-size-base * 0.875;
.navbar-top {
  height: $tp-height;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.05);
  font-size: $font-size;
  .navbar-brand {
    width: $lp-width;
    background-color: $lp-color;
    text-align: center;
  }
  .navbar-collapse {
    padding: 0 0.75rem;
    .nav-item img {
      margin-right: 0.5rem;
    }
    .form-control {
      font-size: $font-size;
      width: 118px;
    }
  }
  .dropdown-toggle::after {
    padding-left: 0.25rem;
    content: url('../assets/icons/Dropdown.svg');
    border: 0;
  }
}
.top-nav-back {
  font-weight: 700;
  text-transform: uppercase;
}
</style>
