<template>
  <div>
    <b-modal
      id="delete-user-modal"
      ref="modal"
      title="Delete User"
      v-show="true"
      @ok="handleOk"
    >
      <p class="my-4">Are you sure you want to delete this Author?</p>
    </b-modal>
  </div>
</template>
`
<script>
export default {
  data() {
    return {};
  },
  props: ["getUsersData", "deleteUserData"],
  methods: {
    handleOk() {
      this.deleteUserData();
    },
  },
};
</script>