<template>
  <div class="header container">
    <div class="para">React Practical</div>
    <div class="list">
      <div class="comman">
       <p class="dashboardIcon"> <span class="icon"
          ><i class="fa fa-industry" aria-hidden="true"></i></span
        >Dashboard</p>
      </div>

      <div class="comman user">
       <p class="dashboardIcon"> <span class="icon"
          ><i class="fa fa-industry" aria-hidden="true"></i></span
        >Users</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {},
};
</script>

<style scoped>
.header {
  border: 1px solid black;
  width: 90%;
  height: 100%;
  background-color: rgb(6, 6, 114);
}
.para {
  font-size: 30px;
  color: white;
}
.list {
  margin-top: 20px;
  display: grid;
  justify-items: start;
  padding-left: 10px;
}
.comman {
  color: white;
  height: 50px;
  width: 100%;
  margin-left: -23px;
}
.dashboardIcon{
  display: flex;
    justify-content: flex-start;
    align-items: baseline;

}

.icon {
  padding: 10px;
}
</style>
