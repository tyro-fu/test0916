import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/wt/login.vue'
import Sign from './views/wt/sign.vue'
import Classify from './views/wt/classify.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/login',
      name:'login',
      component: Login
    },
    {
      path:'/sign',
      name:'sign',
      component: Sign
    },
    {
      path:'/classify',
      name:'classify',
      component: Classify
    }
  ]
})
