<template>
  <div id="app">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" style="color:blue">ToDo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link">Welcome {{welcomename}}<span class="sr-only">(current)</span></a>
      </li>
    </ul>

    <b-button v-if="!token" type="button" variant="" to="/login">Login</b-button>&nbsp;
    <b-button v-if="!token" type="button" variant="" to="/register">Register</b-button>&nbsp;
    <b-button v-if="token" type="button" variant="" @click="Logout"
      >Logout</b-button
    >

    <!--<form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>-->
  </div>
</nav>
<span></span>
    <router-view/>
  </div>
</template>


<script>
import { APICall } from "./utils/common";
  export default {
  data() {
    return {
      get token() {
        return localStorage.getItem("auth_token") || 0;
      },
      set token(value) {
        localStorage.setItem("auth_token", value);
      },
      welcomename:"",
    };
  },
  methods:{
    Logout(){
     APICall.post("/logout", this.token).then((res) => {
        console.log("logout", res);
        this.$router.push("/");
      window.localStorage.removeItem("auth_token");
      window.localStorage.removeItem("name");
      location.reload();
      });
    }
  },
  mounted(){
      this.welcomename=localStorage.getItem("name");
  }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
