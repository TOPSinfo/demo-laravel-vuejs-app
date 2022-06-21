import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn : false
  },
  getters: {
    loggedIn(state){
      return state.loggedIn
    }
  },
  mutations: {
    toggleBtn(state){
      state.loggedIn = !state.loggedIn
      localStorage.setItem("loggedIn",state.loggedIn)
      console.log('statevale',state.loggedIn)
    }
  },
  actions: {
  },
  modules: {
  }
})
