import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Home from './views/Home.vue'
import Login from './views/wt/login.vue'
import Sign from './views/wt/sign.vue'
=======
import Login from './components/login.vue'
import Detail from './views/hx/Detail.vue'

>>>>>>> 71205d36d8b13695ccecc4a29eb091a30ad655e1
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
<<<<<<< HEAD
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
=======
    },{
      path:"/detail",
      name:"detail",
      component:Detail
>>>>>>> 71205d36d8b13695ccecc4a29eb091a30ad655e1
    }
  ]
})
