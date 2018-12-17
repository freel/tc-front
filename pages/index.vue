<template>
  <div class="content-layout">
    <content-body
      v-if="loggedIn">
      <template slot="content">
        <content-table
          :providers="providers"/>
      </template>
    </content-body>
  </div>
</template>

<script>
import ContentBody from '@/components/Content.vue'
import ContentTable from '~/components/ContentTable.vue'

export default {
  components: {
    ContentBody,
    ContentTable
  },
  data() {
    return {
      providers: []
    }
  },
  async asyncData({ $axios }) {
    const providers = await $axios.$get('providers')
    return { providers: providers.data }
  }
}
</script>

<style lang="scss" scope>
@import '~/assets/scss/base.scss';
.content-layout {
  margin-top: $tp-height;
  padding: 1.25rem;
  // when width > 720
}
@media (min-width: 576px) {
  .content-layout {
    margin-left: $lp-width;
  }
}
</style>
