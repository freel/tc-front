<template lang="html">
  <div class="bg-white rounded content-body">
    <div class="h6">Matched providers</div>
    <table class="table table-striped table-borderless">
      <thead>
        <tr>
          <th
            class="pl-3"
            scope="col">Type</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">ID</th>
          <th scope="col">Status</th>
          <th scope="col"/>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(provider, index) in providers"
          :key="index"
          :class="{ cancelled: provider.status==4 }">
          <td class="pl-3">
            <img
              v-if="provider.contracted"
              class="mr-3"
              src="~/assets/icons/Contracted.svg"
              alt="Contracted">
            <img
              v-else-if="!provider.contracted"
              class="mr-3"
              src="~/assets/icons/Non Contracted.svg"
              alt="Non Contracted">
            <img
              v-if="provider.type==0"
              src="~/assets/icons/IC.svg"
              alt="IC">
            <img
              v-else-if="provider.type==1"
              src="~/assets/icons/Home care agency.svg"
              alt="Home care agency">
          </td>
          <td class="provider-name">{{ provider.name }}</td>
          <td>{{ provider.email }}</td>
          <td>{{ provider.phone }}</td>
          <td><span>{{ provider.id }}</span></td>
          <td>
            <!-- :value="provider.status" -->
            <status
              v-model="provider.status"
              @changed="changeStatus(index, $event)"
            />
          </td>
          <td>
            <button
              class="btn btn-sm btn-primary border-0 mr-2"
              role="button">CHAT</button>
            <call
              class="mr-2"
              @callClicked="makeCall(provider.phone)" />
            <kebab-menu />
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Modal window -->
    <feedback-modal />
  </div>
</template>

<script>
import Status from '~/components/Status.vue'
import Call from '~/components/Call.vue'
import FeedbackModal from '~/components/FeedbackModal.vue'
import KebabMenu from '~/components/KebabMenu.vue'
export default {
  components: {
    Status,
    Call,
    FeedbackModal,
    KebabMenu
  },
  props: {
    providers: {
      type: Array,
      default: () => {
        return [
          // type 0: IC, 1: Home care agency
          // status 0:Contacting 1:Talked to client 2:Assesment schduled 3:Contract Signed 4:Cancel the client
          {
            id: 7543,
            type: 0,
            contracted: true,
            name: 'Lucile Munoz',
            email: 'oceane.torp@brennan.us',
            phone: '+1(727)809-1539',
            status: 0
          },
          {
            id: 9755,
            type: 0,
            contracted: true,
            name: 'Winfred Henderson',
            email: 'landen_deckow@hotmail.com',
            phone: '+1(532)831-5321',
            status: 2
          },
          {
            id: 3421,
            type: 0,
            contracted: false,
            name: 'Birdie Carson',
            email: 'birdie.carson@brennan.us',
            phone: '+1(673)223-7397',
            status: 3
          },
          {
            id: 7675,
            type: 1,
            contracted: false,
            name: 'Family Care SF, Inc.',
            email: 'doroty.lesch@dickinson.us',
            phone: '+1(866)124-5438',
            status: 1
          },
          {
            id: 5553,
            type: 0,
            contracted: true,
            name: 'Lucilie Munoz',
            email: 'reilly.julius@gmail.com',
            phone: '+1(885)163-9766',
            status: 4
          }
        ]
      }
    }
  },
  data() {
    return {
      statuses: []
    }
  },
  // computed: {
  //   statuses:
  // },
  methods: {
    changeStatus: function(porvider_id, val) {
      console.log(porvider_id, parseInt(val))
      this.providers[porvider_id].status = parseInt(val)
    },
    isCancelled: function(id) {
      console.log(this.providers)
      // return this.providers[id]
      return this.providers[id].status == 4
    }
  }
  // async asyncData({ app }) {
  //   //do something after creating vue instance
  //   const { providers } = await app.$axios.$get('providers')
  //   return { providers }
  // }
}
</script>

<style lang="scss">
$row-odd-background: #fff;
$row-even-background: #f4f7f9;
$thead-font-color: #728b9b;
$primary-color: #54d0ff;
$primary-color-active: #00b9ff;
$secondary-color: #29c480;
$secondary-color-active: #00b063;
$cancelled-row-bg-color: #ffeff2;
.cancelled {
  background-color: $cancelled-row-bg-color !important;
}
.rounded {
  border-radius: 0.375rem !important;
}
.content-body {
  padding: 1.2rem 1.25rem;
  // font-size: 0.9rem;
}
.provider-name {
  font-family: 'Lato';
  font-weight: 700;
  margin-bottom: 1.1rem;
}
.table-striped {
  thead {
    th {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      color: $thead-font-color;
      font-family: 'Lato';
      font-size: 0.75rem;
      font-weight: 400;
    }
    tr {
      background-color: $row-even-background;
    }
  }
  tbody {
    font-size: 0.875rem;
    tr:nth-of-type(odd) {
      background-color: $row-odd-background;
    }
    tr:nth-of-type(even) {
      background-color: $row-even-background;
    }
  }
}
.btn-sm {
  width: 3.75rem;
  font-size: 0.8125rem;
  font-weight: 700;
  text-align: center;
}
.btn-primary {
  background-color: $primary-color;
  &:hover {
    background-color: $primary-color-active;
  }
  &:active {
    background-color: $primary-color-active !important;
  }
}
.btn-secondary {
  background-color: $secondary-color;
  &:hover {
    background-color: $secondary-color-active;
  }
  &:active {
    background-color: $secondary-color-active !important;
  }
}
.table th,
.table td {
  padding: 0.625rem;
  vertical-align: baseline;
}
</style>
