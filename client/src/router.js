import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/lx/Home.vue'
import Page1 from './components/page1.vue'
import Page2 from "./components/page2.vue";
import Page3 from "./components/page3.vue";
import Page4 from "./components/page4.vue";
import Page5 from "./components/page5.vue";
import Middle from "./components/middle.vue";
<<<<<<< HEAD
import Cart from './components/Cart.vue'
import Sign from './views/wt/sign.vue'
import Login from './views/wt/login.vue'
/* eslint-disable */
=======
import Login from "./views/wt/login";
import Sign from "./views/wt/sign";
import Classify from "./views/wt/classify"
// import { ElLoadingComponent } from 'element-ui/types/loading';

>>>>>>> bfb7b13632832d44527654a5d8dc4e3169cbbe30
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      name:'home',
      component: Home
    },
    {
      path:'/cart',
      name:'cart',
      component: Cart
    },
    {
      path:'/sign',
      name:'sign',
      component: Sign
<<<<<<< HEAD
    },
    {
      path:'/login',
      name:'login',
      component: Login
=======
=======
      path: "/", component: Home,
      children: [
        { path: "", component: Middle },
        { path: "/middle", component: Middle },
        { path: "/page1", component: Page1 },
        { path: "/page2", component: Page2 },
        { path: "/page3", component: Page3 },
        { path: "/page4", component: Page4 },
        { path: "/page5", component: Page5 }
      ]
<<<<<<< HEAD
    },
    {
      path:'/login',component:Login
    },{
      path:'/sign',component:Sign
    },{
      path:'/classify',component:Classify
=======
>>>>>>> a2c37cb413d30bd6fe0366458f5cb3bbabbb2836
>>>>>>> 9c06e8d416d7d146ebc4a331347a60ad1cca7a80
>>>>>>> bfb7b13632832d44527654a5d8dc4e3169cbbe30
    }
    
  ]
})
