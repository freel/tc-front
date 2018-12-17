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

    <b-dropdown-item
      v-for="(item, index) in states"
      :key="index"
      :class="{
        'border-bottom': index < last,
        'rounded-top': index == 0,
        'rounded-bottom': index == last }"
      class="status-menu-item px-2 py-3"
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
  //     show: false
  //   }
  // },
  computed: {
    modalId: function() {
      return 'StatusModal' + this.value.toString()
    },
    last: function() {
      return Object.keys(this.states).length - 1
    }
  },
  mounted() {
    this.uid = 'STA_' + this._uid
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
  // width: 12.5rem;
  transition: 0.1s;
  .dropdown-menu {
    &.show {
      min-width: 12.5rem;
      // transform: none !important;
      transform: translate3d(
        calc(-0.5rem - 1px),
        calc(-1rem - 1px),
        0px
      ) !important;
      transition: 0.1s;
    }
  }
}
.rounded-top {
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
}
.rounded-bottom {
  border-bottom-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}
.dropdown-menu {
  font-size: 0.875rem !important;
  border-radius: 0.375rem;
  &.show {
    padding: 0;
    box-shadow: 0 5px 20px 0 rgba(53, 70, 80, 0.2);
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
  color: $status-color !important;
  a {
    font-size: 0.875rem;
    border-bottom: 2px dotted $underline-color;
    text-decoration: none;
    // &:hover {
    //   text-decoration: none;
    //   border-bottom: 0;
    //   color: $status-color;
    // }
  }
  &:hover,
  &:active {
    text-decoration: none !important;
    border-bottom: 0;
  }
}
// .border-transparent {
//   background-color: transparent;
// }
// .btn-link:hover {
//   text-decoration: none;
// }
</style>
