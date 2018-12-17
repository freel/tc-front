<template>
  <b-dropdown
    variant="link"
    size="md"
    right
    class="kebab-menu"
    no-caret>
    <template
      slot="button-content">
      <div class="px-2 kebab-button"/>
      <!-- <img
        class="px-2"
        src="~/assets/icons/kebabMenu.svg"
        alt="Home care agency"> -->
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
$kebab-dropdown-hover-color: #00b9ff;
.kebab-button {
  content: url('../assets/icons/kebabMenu.svg');
  &:hover,
  &:active {
    content: url('../assets/icons/kebabMenuHover.svg');
  }
}
.dropdown-item {
  &:first-child {
    border-top-left-radius: 0.325rem;
    border-top-right-radius: 0.325rem;
  }
  &:last-child {
    border-bottom-left-radius: 0.325rem;
    border-bottom-right-radius: 0.325rem;
  }
  &:hover,
  &:focus {
    background-color: inherit;
    color: $kebab-dropdown-hover-color;
  }
}
</style>
