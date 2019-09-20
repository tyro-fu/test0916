import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      user:null,
      products:[],
      oPro:null,
      cart:null
  },
  mutations: {
    //设置用户信息
      setUesr(state,value){
      state.user=value
      },
    //设置商品展示信息
      setPro(state,value){
        state.products=value
      },
    //设置商品详情信息
      setoPro(state,value){
        state.oPro=value
      },
      setCart(state,value){
        state.cart=value
      }
  },
  actions: {

  }
})
