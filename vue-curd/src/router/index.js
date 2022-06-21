import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../containers/Home.vue'
import EditUser from '../containers/EditUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/edit',
    name: 'EditUser',
    component: EditUser
  },
  {
    path: '/',
    name: 'Home',
    component: Home,

  }

]

const router = new VueRouter({
  routes
})

export default router
