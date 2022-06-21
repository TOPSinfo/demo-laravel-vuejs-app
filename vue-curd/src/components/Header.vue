<template>
  <div>
    <div class="header">
      <ul>
        <span style="color:grey"> <i class="fa fa-bars" aria-hidden="true"></i> </span>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">user</a></li>
      </ul>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<style scoped>
.header {
  margin-top: 10px;
}
ul li {
  list-style-type: none;
  display: inline;
}
ul li a {
  text-decoration: none;
  color: grey;
  font-size: 20px;
  padding: 10px 20px;
}
</style>
 