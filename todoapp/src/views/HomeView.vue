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
  beforeRouteEnter(to, from, next) {
    const token = localStorage.getItem("auth_token");

    if (token) {
      next();
    } else {
      next({ path: "/" });
    }
  },
};
</script>
