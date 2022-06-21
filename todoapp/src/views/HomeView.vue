<template>
  <div class="home">
    <mainBody />
  </div>
</template>

<script>
// @ is an alias to /src
import mainBody from "@/components/mainBody.vue";

export default {
  name: "HomeView",
  components: {
    mainBody,
  },
};
</script>
