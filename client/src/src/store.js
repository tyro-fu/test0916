import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeIndex:0,
    delOrder:false
  },
  mutations: {
    modifyActive(state,index){
      state.activeIndex=index
    },
    checkChange(state,check){
      state.delOrder=check;
    }
  },
  actions: {

  }
})
