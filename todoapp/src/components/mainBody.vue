<template>
  <div class="container mt-3">
    <span style="float: left"
      ><h5><b>Todo List</b></h5></span
    >
    <!-- <form> -->
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Add Todo"
        id="mail"
        name="name"
        v-model="todo"
      />
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary" @click="addItem">
          Add
        </button>
      </div>
    </div>
    <!-- </form> -->

    <table class="table table-hover" v-if="userData !=''">
      <tbody>
        <tr v-for="(data, index) in userData" :key="index">
          <th scope="row">
            <div class="form-check" v-if="data.status">
                <input checked disabled
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault" 

                @click="openStatusConfirmationModal($event, data.id)"

                />
              <label class="form-check-label" for="flexCheckDefault"> </label>
            </div>
            
            <div class="form-check" v-else>
                <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault" 

                @click="openStatusConfirmationModal($event, data.id)"

                />
              <label class="form-check-label" for="flexCheckDefault"> </label>
            </div>

          </th>
          <td @click="onClick(data)">
            <div v-if="data.id !== activeRow && !data.status">
              <table style="text-align:left" width="100%"><tr><td width="50%">
              <span v-if="data.status"
              ><del>{{ data.name }}</del></span
              >
              <span v-else>{{ data.name }}</span>              </td>
              <td width="50%"><button @click="openConfirmationModal($event, data.id)" type="button" class="btn btn-danger">Remove</button>&nbsp;</td>
              </tr></table>
            </div>
            <div v-else-if="data.id === activeRow && !data.status">
              <table width="100%"><tr><td width="50%"><input style="border-color:#00ff08" type="text" class="form-control" v-model="activeName" @input="showUserData" /></td>
              <td width="25%"><button style="float:left" @click="updateItem(data.id)" type="button" class="btn btn-success">Update</button></td>&nbsp;
              <td width="25%"><button style="float:left" @click="cancelItem($event)" type="button" class="btn btn-danger">Cancel</button></td></tr></table>
            </div>
            <div v-else>
                <table style="text-align:left" width="100%"><tr><td width="50%" style="color:green">
                <span v-if="data.status"
                ><del>{{ data.name }}</del></span
                >
                <span v-else>{{ data.name }}</span></td>
                <td width="50%"><button @click="openConfirmationModal($event, data.id)" type="button" class="btn btn-danger">Remove</button></td>
                </tr></table>
              </div>
          </td>
        </tr>
      </tbody>
    </table>
    <span v-if="userData ==''">No todo data Found!</span>
        <Confirmation-modal :deleteUserData="deleteUserDataAPICall" />
        <Confirmation-status-modal :statusUserData="statusUserDataAPICall" />

  </div>
</template>
<script>
import { APICall } from "../utils/common";
import { APIcall } from "../utils/update";
import { APIcalls } from "../utils/add";
import ConfirmationModal from "../components/ConfirmationModal.vue";
import ConfirmationStatusModal from "../components/ConfirmationStatusModal.vue";

export default {
  components: { "Confirmation-modal": ConfirmationModal, "Confirmation-status-modal": ConfirmationStatusModal },

  data() {
    return {
      todo: "",
      userData: [],
      activeRow: "",
      activeName: "",
      deleteUserData:"",
      statusUserData:"",
      checked: false,

    };
  },
  mounted() {
    this.getUsersData();
  },
  methods: {
  check(data) {
      data.status = true;
      console.log("v", data.status);
      console.log("hello", this.userData);
    },
    getUsersData() {
      const token = localStorage.getItem("auth_token");
      const ids = localStorage.getItem("id");
      APIcall.get("/tasks/", token, ids).then((data) => {
        this.userData = data;
      });
    },
    addItem() {
      const token = localStorage.getItem("auth_token");
      const ids = localStorage.getItem("id");
      APIcalls.post("/tasks/add",{ name: this.todo,created_by:ids },token).then((data) => {
        console.log("data added", data);
        this.getUsersData();
        this.todo = "";
      });
    },
    onClick(data) {
      if (this.activeRow && this.activeRow !== data.id) {
        this.activeRow = "";
        this.activeName = "";
      } else {
        this.activeRow = data.id;
        this.activeName = data.name;
      }
    },
    showUserData() {
      console.log("userdata", this.userData);
    },
    updateItem(id) {
      const token = localStorage.getItem("auth_token");
      APIcall.post("/tasks/update/",{ name: this.activeName },token,id).then(
        (response) => {
          console.log("update successfully", response);
          this.activeRow = "";
          this.activeName = "";
          this.getUsersData();
        }
      );
    },
    cancelItem(e) {
      e.stopPropagation();
      console.log("cancel");
      this.activeRow = "";
      this.activeName = "";
      console.log(
        "  this.activeRow",
        this.activeRow,
        this.activeName,
        this.userData
      );
    },
    removeItem(e, id) {
      const token = localStorage.getItem("auth_token");
      e.stopPropagation();
      APICall.delete("/tasks/delete/",token,id).then((data) => {
        console.log("Data Deleted successfully", data);
        this.getUsersData();
      });
    },
     openConfirmationModal(e, id) {
      e.stopPropagation();

      this.deleteUserData = id;
      this.$bvModal.show("delete-user-modal");
    },
    deleteUserDataAPICall() {
      if (this.deleteUserData) {
       const token = localStorage.getItem("auth_token");
        APICall.delete("/tasks/delete/", token,this.deleteUserData).then((data) => {
          console.log("Data Deleted successfully", data);
          this.getUsersData();
        });
      }
    },

     openStatusConfirmationModal(e, id) {
      e.stopPropagation();

      this.statusUserData = id;
      this.$bvModal.show("status-user-modal");
    },
    statusUserDataAPICall() {
      if (this.statusUserData) {
       const token = localStorage.getItem("auth_token");
        APIcall.post("/tasks/completed/",{ status: 1},token,this.statusUserData).then((data) => {
          console.log("Status Updated successfully", data);
          this.getUsersData();
        });
      }
    },
    
  },
};
</script>
