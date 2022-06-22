<template>
  <div>
    <b-modal
      id="status-user-modal"
      ref="modal"
      title="Close/Complete Todo"
      v-show="true"
      @ok="handleOk"
    >
      <p class="my-4">Are you sure you want to close/complete this Todo?</p>
    </b-modal>
  </div>
</template>
`
<script>
export default {
  data() {
    return {};
  },
  props: ["getUsersData", "statusUserData"],
  methods: {
    handleOk() {
      this.statusUserData();
    },
  },
};
</script>