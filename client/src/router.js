import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/lx/Home.vue'
import Page1 from './components/page1.vue'
import Page2 from "./components/page2.vue";
import Page3 from "./components/page3.vue";
import Page4 from "./components/page4.vue";
import Page5 from "./components/page5.vue";
import Page6 from "./components/page6.vue";
import Page7 from "./components/page7.vue";
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
import Classify from "./views/wt/classify";
// import { ElLoadingComponent } from 'element-ui/types/loading';

>>>>>>> a0212c051eb32fdeb63a11cbe171bf98f58c1e4b
Vue.use(Router)

export default new Router({
  mode: 'history',
<<<<<<< HEAD
  routes: [
    {

=======
  routes: [{
>>>>>>> a0212c051eb32fdeb63a11cbe171bf98f58c1e4b
      path: "/",
      component: Home,
      children: [{
<<<<<<< HEAD

=======
>>>>>>> a0212c051eb32fdeb63a11cbe171bf98f58c1e4b
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
        path: "/page6",
        component: Page6
      }, {
        path: "/page7",
        component: Page7
      }, {
        path: "/middle",
        component: Middle
      }, {
        path: "",
        component: Middle
      }],
    }, {
      path: "/detail",
      component: Detail
    },
    {
      path: "/cart",
      component: Cart
    },
    {
      path: "/sign",
      component: Sign
    }, {
      path: "/login",
      component: Login
    }, {
      path: "/classify/:type",
      component: Classify
    }
  ]
<<<<<<< HEAD
})

=======
})
>>>>>>> a0212c051eb32fdeb63a11cbe171bf98f58c1e4b
