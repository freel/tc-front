<template lang="html">
  <b-navbar
    toggleable="md"
    variant="white">

    <b-navbar-brand
      href="#"
      class="navbar-brand">
      <img src="~/assets/icons/TrueCare24_logo.svg">
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse
      id="nav_collapse"
      class="pr-4"
      is-nav >

      <b-navbar-nav>
        <b-nav-item
          href="#"
          class="top-nav-back">
          <img
            src="~/assets/icons/Back 1.svg"
            class="mr-2">
          Back
        </b-nav-item>
        <b-nav-form
          class="px-3">
          <b-input-group>
            <b-form-input
              class="border-right-0"
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
        <b-nav-item href="#">
          <img
            src="~/assets/icons/Fulfillment KPIs.svg"
            class="mr-2">
          Fulfillment KPIs
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
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

<style lang="scss">
$input-bg-color: #f5f9fc;
$input-color: #728b9b;
$input-border-color: #dbe5eb;
$navbar-brand-bg-color: #264e66;
$font-color: #345;
.navbar {
  padding: 0 0;
  position: fixed;
  height: 3.75rem;
  top: 0;
  width: 100%;
  line-height: 0.875rem;
  vertical-align: baseline;
  font-size: 0.875rem;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04);
  .nav-link {
    color: $font-color !important;
    span {
      margin-left: 0.7rem;
      margin-right: 0.7rem;
    }
    img {
      vertical-align: inherit;
    }
  }
  .top-nav-back {
    font-size: 0.8125rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  .dropdown-toggle::after {
    content: url('../assets/icons/Dropdown.svg');
    border: 0;
  }
}
.navbar-brand {
  background-color: $navbar-brand-bg-color;
  width: 4.375rem;
  height: 3.75rem;
  text-align: center;
  padding-top: 0.9375rem;
  margin-right: 0.75rem;
}
.input-group {
  .form-control {
    width: 115px;
    background-color: $input-bg-color;
    height: 2.2rem;
    border-radius: 0.3125rem;
    font-size: 0.875rem;
    color: $input-color;
    border-color: $input-border-color;
  }
  .input-group-append {
    width: 2.5rem;
    .btn {
      padding: 0;
    }
    img {
      height: 2.2rem;
    }
  }
}
.btn {
  border-radius: 0.3125rem;
}
</style>
