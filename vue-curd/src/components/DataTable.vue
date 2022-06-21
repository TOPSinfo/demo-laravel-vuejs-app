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

export default {
  name: "DataTable",
  props: ["userData", "getUsersData"],
  components: {
    "confirmation-modal": ConfirmationModal,
  },
  data() {
    return {
      items: [],
      fields: ["name", "surname", "email", "phone_number", "active", "action"],
      deleteUserData: {},
    };
  },
  mounted() {},
  methods: {
    openConfirmationModal(data) {
      this.deleteUserData = data.item;
      this.$bvModal.show("delete-user-modal");
    },
    confirmDeleteUser() {},
    editUser(data) {
      this.$router.push({ name: "EditUser", params: { userData: data.item } });
    },
    updateUserData(data) {
      if (this.thdeleteUserData.id) {
        APICall.put("/users", this.deleteUserData.id, data).then((data) => {
          console.log("Data Updated successfully", data);
          this.getUsersData();
        });
      }
    },
    deleteUserDataAPICall() {
      if (this.deleteUserData.id) {
        APICall.delete("/users", this.deleteUserData.id).then((data) => {
          console.log("Data Deleted successfully", data);
          this.getUsersData();
        });
      }
    },
  },
};
</script>