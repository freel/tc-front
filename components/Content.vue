<template lang="html">
  <div class="bg-white rounded content-body">
    <div class="h6 pb-2">Matched providers</div>
    <slot
      name="content"/>
  </div>
</template>

<script>
</script>

<style lang="scss" scope>
@import '~/assets/scss/base.scss';
.content-body {
  padding: 1.25rem 1.25rem;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.05);
}
</style>
