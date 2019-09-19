import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/wt/login.vue'
import Sign from './views/wt/sign.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      name: 'login',
      component: Login
    },

    {
      path: '/sign',
      name: 'sign',
      component: Sign
    }
  ]
})