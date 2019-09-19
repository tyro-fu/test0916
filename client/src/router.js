import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/login.vue'
import Detail from './views/hx/Detail.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },{
      path:"/detail",
      name:"detail",
      component:Detail
    }
  ]
})
