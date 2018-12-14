<template>
  <div class="content-layout">
    <content-body v-if="loggedIn"/>
  </div>
</template>

<script>
import ContentBody from '@/components/Content.vue'

export default {
  components: {
    ContentBody
  }
}
</script>

<style lang="scss">
.content-layout {
  margin-left: 70px;
  margin-top: 3.75rem;
  padding: 1.25rem;
}
</style>
