<template>
  <div id="app">
    <router-view></router-view>
    <!-- <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<<<<<<< HEAD

    <!-- <Login></Login> -->
  <!-- <Sign></Sign> -->
  
=======
    <!-- <Login></Login> -->
    <router-view></router-view>
>>>>>>> 71205d36d8b13695ccecc4a29eb091a30ad655e1
  </div>
</template>

<script>
<<<<<<< HEAD

// import Login from './views/wt/login'
// import Sign from './views/wt/sign'
export default {
  name: 'app',
  components: {
    // Login,
  // Sign
  },
   created() {
    this.$router.push("/login")
=======
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'app',
  components: {
>>>>>>> 71205d36d8b13695ccecc4a29eb091a30ad655e1
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}

</style>
