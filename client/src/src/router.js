import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Index from './views/Index.vue'
import MyProduct from "./components/common/index/MyProduct.vue"
import MyOrder from './components/common/index/MyOrder.vue'
import ProductUpLoad from './components/common/index/ProductUpLoad.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: "/index",
    component: Index,
    children: [{
      path: "",
      component: MyProduct
    }, {
      path: "myProduct",
      component: MyProduct
    }, {
      path: "myOrder",
      component: MyOrder
    }, {
      path: "productUpLoad",
      component: ProductUpLoad,
      props: (route) => ({
        item: route.query.item
      })
    }]
  }, {
    path: "/",
    component: Index
  }, {
    path: "/Login",
    component: Login
  }, {
    path: "/register",
    component: Register
  }]
})