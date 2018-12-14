<template lang="html">
  <b-dropdown
    variant="link"
    class="status-dropdown"
    no-caret>
    <template
      slot="button-content">
      <div class="btn-icon float-left mx-auto">
        <img
          :src="imgUrl(states[value].img)"
          class="mx-auto">
      </div>
      <a>{{ states[value].caption }}</a>
    </template>
    <!-- v-if="index!=value" -->
    <b-dropdown-item
      v-for="(item, index) in states"
      :key="index"
      class="status-menu-item px-2 py-3 border-bottom"
      @click="$emit('changed', index)">
      <div class="btn-icon float-left mx-auto">
        <img
          :src="imgUrl(item.img)"
          class="mx-auto">
      </div>
      {{ item.caption }}
    </b-dropdown-item>

  </b-dropdown>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    states: {
      type: Object,
      default: () => {
        return {
          0: {
            img: 'Contacting 0',
            caption: 'Contacting'
          },
          1: {
            img: 'Talked to the client',
            caption: 'Talked to the client'
          },
          2: {
            img: 'Assessment scheduled',
            caption: 'Assessment scheduled'
          },
          3: {
            img: 'Contract Signed',
            caption: 'Contract Signed'
          },
          4: {
            img: 'Cancel the client',
            caption: 'Cancel the client'
          }
        }
      }
    }
  },
  // data() {
  //   return {
  //
  //   }
  // },
  computed: {
    modalId: function() {
      return 'StatusModal' + this.value.toString()
    }
  },
  methods: {
    imgUrl(name) {
      return require(`../assets/icons/${name}.svg`)
    }
  }
}
</script>

<style lang="scss">
$status-color: #345;
$underline-color: #dce2e6;
$default-color: #354650;
$primary-color-active: #00b9ff;
.status-dropdown {
  width: 12.5rem;
  .dropdown-menu.show {
    min-width: 12.5rem;
    transform: translate3d(
      calc(-0.5rem - 1px),
      calc(-0.875rem - 1px),
      0
    ) !important;
  }
}
.dropdown-menu {
  font-size: 0.875rem;
  border-radius: 0.375rem;
  &.show {
    padding: 0;
  }
}
.dropdown-item {
  color: $default-color;
  padding: 0.625rem 1.5rem;
  &:active {
    background-color: $primary-color-active;
  }
}
.btn-icon {
  min-width: 2rem;
  margin: auto;
  // display: inline;
  text-align: center;
}
.btn-link {
  padding: 0 0;
  color: $status-color;
  a {
    font-size: 0.875rem;
    border-bottom: 2px dashed $underline-color;
    text-decoration: none;
    // &:hover {
    //   text-decoration: none;
    //   border-bottom: 0;
    //   color: $status-color;
    // }
  }
  &:hover {
    text-decoration: none;
    border-bottom: 0;
    color: $status-color;
  }
  &:active {
    text-decoration: none;
    border-bottom: 0;
    color: $status-color;
  }
}
// .border-transparent {
//   background-color: transparent;
// }
// .btn-link:hover {
//   text-decoration: none;
// }
</style>
