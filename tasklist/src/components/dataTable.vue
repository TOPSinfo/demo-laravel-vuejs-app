<template>
  <div>
    <b-table striped hover :items="userData" :fields="fields">
      <template #cell(action)="row">
        <b-button @click="editUser(row)"> Edit </b-button>
        <b-button
          @click="openConfirmationModal(row)"
          variant="danger"
          style="margin-left: 10px"
        >
          Delete
        </b-button>
      </template>
    </b-table>
    <confirmation-modal :deleteUserData="deleteUserDataAPICall" />
  </div>
</template>

<script>
import { APICall } from "../utils/common";
import ConfirmationModal from "../components/ConfirmationModal.vue";
export default{
  name:"dataTable",
  components:{
  "confirmation-modal": ConfirmationModal,
  },
  props:["userData","getUsersData"],
   data() {
    return {
      items: [],
      fields: ["name", "author","status", "action"],
      deleteUserData: {},
    };
  },
  methods:{
     openConfirmationModal(data) {
      this.deleteUserData = data.item;
      this.$bvModal.show("delete-user-modal");
    },
     deleteUserDataAPICall() {
      if (this.deleteUserData.id) {
        const token=localStorage.getItem('auth_token');
        APICall.delete("/tasks/delete", this.deleteUserData.id, token).then((data) => {
          console.log("Data Deleted successfully", data);
          this.getUsersData();
        });
      }
    },
    }
}
</script>