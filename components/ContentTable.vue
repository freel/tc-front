<template>
  <div class="table-wrapper-scroll-y">
    <table class="table table-responsive table-hover table-sm table-borderless table-striped">
      <thead>
        <tr>
          <th scope="col">Type</th>
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
          <td>
            <div class="provider-type d-flex">
              <img
                :src="contractImg(provider.contracted)">
              <img
                :src="typeImg(provider.type)"
                class="ml-auto">

            </div>
          </td>
          <td class="provider-name">{{ provider.name }}</td>
          <td>{{ provider.email }}</td>
          <td>{{ provider.phone }}</td>
          <td><span>{{ provider.id }}</span></td>
          <td>
            <status
              slot="Status"
              v-model="provider.status"
              @changed="changeStatus(index, $event)" />
          </td>
          <td class="d-flex justify-content-end">
            <button
              class="btn btn-sm btn-primary btn-action"
              role="button">CHAT</button>
            <call
              class="btn-action"
              @callClicked="makeCall(provider.phone)" />
            <kebab-menu
              slot="KebabMenu" />
          </td>
        </tr>
      </tbody>
    </table>
    <feedback-modal />
  </div>
</template>

<script>
import FeedbackModal from '~/components/FeedbackModal.vue'
import KebabMenu from '~/components/KebabMenu.vue'
import Status from '~/components/Status.vue'
import Call from '~/components/Call.vue'
export default {
  components: {
    FeedbackModal,
    KebabMenu,
    Status,
    Call
  },
  props: {
    providers: {
      type: Array,
      default: () => {
        return []
      }
    },
    contract_type: {
      type: Object,
      default: () => {
        return {
          '0': require('~/assets/icons/IC.svg'),
          '1': require('~/assets/icons/Home care agency.svg')
        }
      }
    },
    contract_status: {
      type: Object,
      default: () => {
        return {
          '0': require('~/assets/icons/Contracted.svg'),
          '1': require('~/assets/icons/Non Contracted.svg')
        }
      }
    }
  },
  data() {
    return {
      statuses: []
    }
  },
  methods: {
    contractImg: function(contracted) {
      console.log(this.contract_status)
      return this.contract_status[contracted]
    },
    typeImg: function(type) {
      return this.contract_type[type]
    },
    changeStatus: function(porvider_id, val) {
      this.providers[porvider_id].status = parseInt(val)
    },
    isCancelled: function(id) {
      return this.providers[id].status == 4
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '~/assets/scss/base.scss';
$row-odd-background: #fff;
$row-even-background: #f4f7f9;
$thead-font-color: #728b9b;
$cancelled-row-bg-color: #ffeff2;
$row-hover-amount: 5%;

.table {
  margin-bottom: 0;
}
.table-sm {
  thead {
    color: $thead-font-color;
    font-size: 0.75rem;
    background-color: $row-even-background;
    th {
      font-weight: 400;
    }
  }
  tbody {
    tr {
      box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);

      &:nth-of-type(odd) {
        background-color: $row-odd-background;
        &:active,
        &:hover {
          background-color: darken($row-even-background, $row-hover-amount);
        }
      }
      &:nth-of-type(even) {
        background-color: $row-even-background;
        box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);
        &:active,
        &:hover {
          background-color: darken($row-even-background, $row-hover-amount);
        }
      }
      td {
        padding-top: 0.625rem; //10px
        padding-bottom: 0.625rem; // 10px
      }
    }
  }
  th,
  td {
    vertical-align: middle;
    padding-left: 1.1875rem;
    padding-right: 0.8rem;
  }
}
// Action buttons
.btn-action {
  margin-right: 0.75rem;
}
// Cancelled status - row red
.cancelled {
  background-color: $cancelled-row-bg-color !important;
  &:active,
  &:hover {
    background-color: darken(
      $cancelled-row-bg-color,
      $row-hover-amount
    ) !important;
  }
}
// min width of "type" row
.provider-type {
  min-width: 3.125rem;
}
// bold names
.provider-name {
  font-weight: 700;
}
</style>
