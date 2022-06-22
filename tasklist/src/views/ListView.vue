<template>
  <div>
    <Product :items="items"/>
  </div>
</template>

<script>
import Product from '../components/Product.vue';
import { APICall } from '../utils/comman.js'
import { mapGetters } from "vuex";

export default{
    components: { Product },
    data(){
      return{
        items:[]
      }
    },
    computed: {
    ...mapGetters({ tab: "loggedIn" }),
  },
  mounted(){
        const token = localStorage.getItem("auth_token");
        if(this.tab){
        APICall.get('/tasks',token).then((res)=>{
            console.log("home-page",res);
            this.items.push(res);
            console.log("item",this.items)
        }).catch((err)=>{
            console.log(err);
        })
      }
  }

}
</script>