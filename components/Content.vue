<template lang="html">
  <div class="bg-white rounded content-body">
    <div class="h6 pb-2">Matched providers</div>
    <slot
      name="content"/>
  </div>
</template>

<script>
export default {
  // props: {
  //   providers: {
  //     type: Array,
  //     default: () => {
  //       return [
  //         // type 0: IC, 1: Home care agency
  //         // status 0:Contacting 1:Talked to client 2:Assesment schduled 3:Contract Signed 4:Cancel the client
  //         {
  //           id: 7543,
  //           type: 0,
  //           contracted: true,
  //           name: 'Lucile Munoz',
  //           email: 'oceane.torp@brennan.us',
  //           phone: '+1(727)809-1539',
  //           status: 0
  //         },
  //         {
  //           id: 9755,
  //           type: 0,
  //           contracted: true,
  //           name: 'Winfred Henderson',
  //           email: 'landen_deckow@hotmail.com',
  //           phone: '+1(532)831-5321',
  //           status: 2
  //         },
  //         {
  //           id: 3421,
  //           type: 0,
  //           contracted: false,
  //           name: 'Birdie Carson',
  //           email: 'birdie.carson@brennan.us',
  //           phone: '+1(673)223-7397',
  //           status: 3
  //         },
  //         {
  //           id: 7675,
  //           type: 1,
  //           contracted: false,
  //           name: 'Family Care SF, Inc.',
  //           email: 'doroty.lesch@dickinson.us',
  //           phone: '+1(866)124-5438',
  //           status: 1
  //         },
  //         {
  //           id: 5553,
  //           type: 0,
  //           contracted: true,
  //           name: 'Lucilie Munoz',
  //           email: 'reilly.julius@gmail.com',
  //           phone: '+1(885)163-9766',
  //           status: 4
  //         }
  //       ]
  //     }
  //   }
  // },
  // computed: {
  //   statuses:
  // },
}
</script>

<style lang="scss" scope>
@import '~/assets/scss/base.scss';
.content-body {
  padding: 1.25rem 1.25rem;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.05);
}
</style>
