import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/wt/login.vue'
import Sign from './views/wt/sign.vue'
import Cart from './components/Cart.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
<<<<<<< HEAD
    {
      path:'/',
      name:'cart',
      component: Cart
    },
    {
      path:'/sign',
      name:'sign',
=======

    {
      path: '/',
      name: 'login',
      component: Login
    },

    {
      path: '/sign',
      name: 'sign',
>>>>>>> c3f8053c9df9f932092ea182472c77f3d1191ea3
      component: Sign
    }
  ]
})