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

import Detail from "./views/hx/Detail.vue";

import Cart from './components/Cart.vue'
import Sign from './views/wt/sign.vue'
import Login from './views/wt/login.vue'



import Classify from "./views/wt/classify"
// import { ElLoadingComponent } from 'element-ui/types/loading';


=======
import Detail from "./views/hx/Detail.vue";
import Cart from './components/Cart.vue';
import Sign from './views/wt/sign.vue';
import Login from './views/wt/login.vue';
// import Classify from "./views/wt/classify";
// import { ElLoadingComponent } from 'element-ui/types/loading';

>>>>>>> 4d8532a69269be4513818a3a985015e99197a826
Vue.use(Router)

export default new Router({
  mode: 'history',
<<<<<<< HEAD
  routes: [
    {

=======
  routes: [{
>>>>>>> 4d8532a69269be4513818a3a985015e99197a826
      path: "/",
      component: Home,
      children: [{
<<<<<<< HEAD
          path: "",
          component: Middle
        },
        {
          path: "/middle",
          component: Middle
        },
        {
          path: "/page1",
          component: Page1
        },
        {
          path: "/page2",
          component: Page2
        },
        {
          path: "/page3",
          component: Page3
        },
        {
          path: "/page4",
          component: Page4
        },
        {
          path: "/page5",
          component: Page5
        },
        {

      path:'/',
      name:'home',
      component: Home
=======
        path: "/page1",
        component: Page1
      }, {
        path: "/page2",
        component: Page2
      }, {
        path: "/page3",
        component: Page3
      }, {
        path: "/page4",
        component: Page4
      }, {
        path: "/page5",
        component: Page5
      }, {
        path: "/",
        component: Middle
      }, {
        path: "/middle",
        component: Middle
      }],
    }

    , {
      path: "detail",
      component: Detail
>>>>>>> 4d8532a69269be4513818a3a985015e99197a826
    },
    {
      path: "cart",
      component: Cart
    },
    {
      path: "sign",
      component: Sign
<<<<<<< HEAD

    },
    {
      path:'/login',
      name:'login',
      component: Login
    },
    {
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
    },{
      path:'/classify',component:Classify

    }
   
      ]
}]}
)
=======
    }, {
      path: "login",
      component: Login
    }
  ]
})
>>>>>>> 4d8532a69269be4513818a3a985015e99197a826
