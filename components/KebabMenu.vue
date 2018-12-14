<template>
  <b-dropdown
    variant="link"
    size="lg"
    right
    no-caret>
    <template
      slot="button-content">
      <img
        class="px-2"
        src="~/assets/icons/kebab menu.svg"
        alt="Home care agency">
    </template>
    <b-dropdown-item href="#">Send intro</b-dropdown-item>
    <b-dropdown-item
      v-b-modal.modal1
      href="#">Provide feedback</b-dropdown-item>
    <b-dropdown-item href="#">Send reminder</b-dropdown-item>
    <b-dropdown-item href="#">Background check</b-dropdown-item>
  </b-dropdown>
</template>
<script>
export default {
  name: 'KebabMenu'
  // data: () => ({
  //
  // })
}
</script>
<style lang="scss" scoped>
</style>
