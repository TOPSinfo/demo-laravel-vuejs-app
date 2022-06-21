<template>
  <div class="home-container">
    <div class="sidebar-container">
      <side-bar />
    </div>
    <div class="main-container">
      <header-section />
      <body-section />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";
import Body from "../components/Body.vue";

export default {
  name: "Home",
  components: {
    "side-bar": Sidebar,
    "header-section": Header,
    "body-section": Body,
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  height: 100vh;
}
.sidebar-container {
  width: 20%;
}
.main-container {
  width: 80%;
}
</style>
