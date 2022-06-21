<template>
	<div>
		<b-button
		variant="primary"
		class="button"
		@click="$bvModal.show('create-user-modal')">
		Create User</b-button>
		<dataTable :userData="userData" :getUsersData="getUsersData"/>
		<create-user-modal :getUsersData="getUsersData"/>
	</div>
</template>
<script>

import { APICall } from "../utils/common";
import dataTable from "../components/dataTable.vue";
import CreateUserModel from "../components/CreateUserModel.vue";

export default{
	name:'bodyView',
	components:{
		dataTable,
		"create-user-modal":CreateUserModel
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
      const token=localStorage.getItem('auth_token');
      APICall.get("/tasks",token).then((data) => {
        this.userData = data;
        console.log("taskdata",this.userData)
      });
    },
  },
}
</script>