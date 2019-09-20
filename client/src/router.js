import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/lx/Home.vue'
import Page1 from './components/page1.vue'
import Page2 from "./components/page2.vue";
import Page3 from "./components/page3.vue";
import Page4 from "./components/page4.vue";
import Page5 from "./components/page5.vue";
import Middle from "./components/middle.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
<<<<<<< HEAD
      path:'/',
      name:'cart',
      component: Cart
    },
    {
      path:'/sign',
      name:'sign',
      component: Sign
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
>>>>>>> a2c37cb413d30bd6fe0366458f5cb3bbabbb2836
    }
    
  ]
})
