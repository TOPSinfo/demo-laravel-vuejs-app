<template>
  <div>
    <form ref="form" @submit="onSubmit">
      <b-form-group
        v-for="(field, index) in fields"
        :key="field.id"
        :label="field.label"
        :label-for="`${field.id}-input`"
        invalid-feedback="Name is required"
        :state="fields[index].validationState"
      >
        <b-form-input
          :id="`${field.id}-input`"
          v-model="fields[index].value"
          :state="fields[index].validationState"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" class="submit-button"
        >Submit</b-button
      >
    </form>
  </div>
</template>

<script>
import { APIcall } from "../utils/update";

export default {
  data() {
    return {
      fields: [
        {
          id: "name",
          label: "Name",
          value: "",
          validationState: null,
        },
        {
          id: "author",
          label: "Author",
          value: "",
          validationState: null,
        },
        {
          id: "status",
          label: "Status",
          value: "",
          validationState: null,
        }
      ],
      userData: {},
    };
  },
  mounted() {
    this.userData = this.$route.params.userData;

    if (this.userData) {
      this.fields = this.fields.map((data) => {
        return {
          ...data,
          value: this.userData[data.id],
        };
      });
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      const editedData = {};
      this.fields.forEach((data) => {
        editedData[data.id] = data.value;
      });

      this.updateUserData(editedData);
    },
    updateUserData(data) {
      if (this.userData.id) {
        const token=localStorage.getItem('auth_token');
        APIcall.post("/tasks/update/",this.userData.id, data, token).then((data) => {
          console.log("Data Updated successfully", data);
          this.$router.push({ path: "/todo" });
        });
      }
    },
  },
};
</script>
<style scoped>
form {
  width: 500px;
  margin: 0 auto;
}
.submit-button {
  margin-top: 20px;
}
</style>