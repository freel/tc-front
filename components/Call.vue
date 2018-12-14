<template lang="html">
  <button
    class="btn btn-sm btn-secondary border-0"
    role="button"
    @click="callClicked">
    {{ state_val[state] }}
  </button>
</template>

<script>
export default {
  props: {
    state: {
      type: Number,
      default: 0
    }
  },
  data: () => {
    return {
      state_val: {
        0: 'CALL',
        1: 'CALLING...',
        2: 'CONNECTED'
      }
    }
  },
  methods: {
    async callClicked() {
      const call = await this.$axios.post('call', {
        adminPhone: this.user.phone,
        providerPhone: this.user.phone
      })
      console.log(call)
    }
  }
}
</script>

<style lang="css">
</style>
