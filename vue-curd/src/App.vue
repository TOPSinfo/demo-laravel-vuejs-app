<template>
  <div id="app">
    <router-view>
      <home-page />
    </router-view>
  </div>
</template>

<script>
import Home from "./containers/Home.vue";

export default {
  name: "App",
  components: {
    "home-page": Home,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>