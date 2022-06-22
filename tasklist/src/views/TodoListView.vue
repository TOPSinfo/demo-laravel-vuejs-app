<template>
<div class="home" v-if="tab">
<form v-on:submit.prevent="task">

        <input
          id="input-3"
          class="inputItem"
          v-model="form.name"
          type="text"
          placeholder="Enter name"
          required
        />
        <input
          id="input-3"
          class="inputItem"
          v-model="form.author"
          type="text"
          placeholder="Enter Author"
          required
        />
       <input type="submit" class="fadeIn fourth" value="Add">
       </form>
    <div>
    
    <br>
      <p v-if="this.items.length === 0">No item</p>

      <table border=1 v-for="(item, index) in items" :key="item">
          <tr>
            <th>Name</th><th>Author</th><th>Action</th>
          </tr>      
          <tr v-for="i in item" :key="i" @click="removeItem(index,i)">
            <td>{{i.name}}</td><td>{{i.author}}</td>
            <td>
            <button type="submit" class="fadeIn fourth update" value="Update" @click="updateItem" style="background-color:green">Update</button>
            &nbsp;
            <button type="submit" class="fadeIn fourth remove" value="Remove" @click="removeItem" style="background-color:red">Remove</button>
            </td>
          </tr>
      </table>
    </div>
  </div>
</template>


<script>

// @ is an alias to /src
import { mapGetters } from "vuex";
import { APICall } from '../utils/task.js'

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      prevalue:"",
      taskdata:'',
      item: "",
      ite: [],
      mainitems:[],
      form: {
        name: '',
        author: '',
        status:'Active'
      },
    };
  },
   
  props:['items'],
  mounted(){

    console.log("params",this.items)
  },
  computed: {
    ...mapGetters({ tab: "loggedIn" }),
  },
  methods: {
    addItem() {
      this.ite.push(this.item);
    },
    removeItem(idx,i) {
      this.prevalue=i.name
      this.ite.splice(idx, 1);
    },
     task() {
     const token = localStorage.getItem("auth_token");
      APICall.post('/tasks/add', this.form, token)
        .then((Response) => {
          console.log('response', Response)
          alert('Task Added successfully')
          this.HomeView();
          this.$router.push('/')

        })
        .catch((error) => {
          console.log(error)
           alert('Try Again')
        })
    },
     HomeView(){
        const token = localStorage.getItem("auth_token");
        APICall.get('/tasks',token).then((res)=>{
            this.mainitems.push(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
  }
};
</script>


<style scoped>
.home {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 30%;
  left: 50%;
  padding-top:100px;
}
.inputItem {
  border: none;
  border-bottom: 1px solid black !important;
}
ul li {
  list-style-type: none;
}
table{
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  width:100%;
}
input[type=text] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
}
input[type=button], input[type=submit], input[type=reset]  {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
button{
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  }
</style>
