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
      <b-form-textarea
        id="textarea"
        :rows="4"
        v-model="feedback"
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
  data() {
    return {
      feedback: ''
    }
  }
}
</script>
<style lang="scss" scope>
.form-control {
  font-size: 0.875rem;
}
.modal-header {
  padding-bottom: 0.5rem;
}
.modal-body {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.vue-stars label {
  width: 1.8rem !important;
}
// .modal-title {
//   font-weight: 700;
//   font-size: 1rem;
// }
// .modal-header {
//   border-bottom: 0;
// }
// .modal-footer {
//   border-top: 0;
// }
// button {
//   border: 0 !important;
//   .btn-lg {
//     height: 2.5rem;
//   }
// }
</style>
