import { createStore } from 'vuex'

export default createStore({
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
    }
  },
  actions: {
  },
  modules: {
  }
})
