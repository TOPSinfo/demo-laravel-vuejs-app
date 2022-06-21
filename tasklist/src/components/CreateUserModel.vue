 <template>
  <div>
    <b-modal
      id="create-user-modal"
      ref="modal"
      title="Enter User Details"
      v-show="true"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
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
      </form>
    </b-modal>
  </div>
</template>

<script>
import { APICall } from "../utils/common";

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
    };
  },
  props: ["getUsersData"],
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.reportValidity();
      return valid;
    },
    saveUserData(data) {
     const token=localStorage.getItem('auth_token');
      return APICall.post("/tasks/add", data, token).then((data) => {
        return data;
      });
    },
    resetModal() {
      this.fields = this.fields.map((data) => {
        return {
          ...data,
          value: "",
          validationState: null,
        };
      });
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.handleSubmit();
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }
      const userData = {};
      this.fields.forEach((data) => {
        userData[data.id] = data.value;
      });

      this.saveUserData(userData).then((data) => {
        if (Object.keys(data).length) {
          console.log("User Data saved successfully");
        }
        this.getUsersData();
      });
      this.$nextTick(() => {
        this.$bvModal.hide("create-user-modal");
      });
    },
  },
};
</script>