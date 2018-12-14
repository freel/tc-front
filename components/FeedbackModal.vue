<template>
  <b-modal
    id="modal1"
    size="sm"
    title="Set the rating and provide the feedback note:">
    <form>
      <div class="">
        <vue-stars
          :value="4"
          name="slotDemo" >
          <img
            slot-scope="props"
            slot="inactiveLabel"
            src="~/assets/icons/Star grey.svg">
          <img
            slot-scope="props"
            slot="activeLabel"
            src="~/assets/icons/Star yellow.svg">
        </vue-stars>

      </div>
      <!-- <input
      type="text"
      name=""
      value="Type here"> -->
      <b-form-textarea
        id="textarea1"
        :rows="3"
        placeholder="Type here"
      />

    </form>
    <div
      slot="modal-footer"
      class="w-100">
      <b-btn
        size="lg"
        class="w-100"
        variant="primary"
        @click="show=false">
        SAVE
      </b-btn>
    </div>
  </b-modal>
</template>
<script>
import VueStars from 'vue-stars'
export default {
  components: {
    VueStars
  },
  data: () => ({})
}
</script>
<style lang="scss">
.modal-title {
  font-weight: 700;
  font-size: 1rem;
}
.modal-header {
  border-bottom: 0;
}
.modal-footer {
  border-top: 0;
}
button {
  border: 0 !important;
  .btn-lg {
    height: 2.5rem;
  }
}
</style>
