<template>
  <div class="table-body">
    <b-button
      variant="primary"
      class="button"
      @click="$bvModal.show('create-user-modal')"
    >
      Create User</b-button
    >
    <data-table :userData="userData" :getUsersData="getUsersData" />
    <create-user-modal :getUsersData="getUsersData" />
  </div>
</template>

<script>
import DataTable from "./DataTable.vue";
import CreateUserModal from "./CreateUserModal.vue";
import { APICall } from "../utils/common";

export default {
  name: "Body",
  components: {
    "data-table": DataTable,
    "create-user-modal": CreateUserModal,
  },
  data() {
    return {
      userData: [],
    };
  },
  mounted() {
    this.getUsersData();
  },
  methods: {
    getUsersData() {
      APICall.get("/users").then((data) => {
        this.userData = data;
      });
    },
  },
};
</script>

<style scoped>
.table-body {
  width: 98%;
  border: 1px solid black;
  margin-top: 50px;
}
.button {
  float: right;
  margin-right: 50px;
  margin-top: 20px;
}
</style>