import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
=======
// import Home from './views/Home.vue'
>>>>>>> e82e85750c2def2b90939cb5dee4f5cc8c903f01
import Login from './views/wt/login.vue'
import Sign from './views/wt/sign.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
 
    {
<<<<<<< HEAD
      path:'/',
      name:'login',
      component: Login
    },
=======
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
    },
    // {
    //   path:'/login',
    //   name:'login',
    //   component: Login
    // },
>>>>>>> e82e85750c2def2b90939cb5dee4f5cc8c903f01
    {
      path:'/sign',
      name:'sign',
      component: Sign
    }
  ]
})
