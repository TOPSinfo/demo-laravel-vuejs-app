<template>
  <div id="app">
    <nav>
      <router-link v-if="loggedIn" to="/login">Login</router-link> |
      <router-link v-if="loggedIn" to="/register">Register</router-link>
       
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { APICall } from "./utils/common";
  export default{
    computed:{
      loggedIn(){
        return localStorage.getItem('loggedIn');
      },
      methods:{
        logout(){
          const token=localStorage.getItem('auth_token');
          APICall.post("/logout",token).then((data) => {
          this.$router.push("/login")
          console.log("logout successfully",data)

          });
        }
      }
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
