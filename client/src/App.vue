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
<!-- 
    <Login></Login>
  <Sign></Sign> -->
  
  </div>
</template>

<script>

// import Login from './views/wt/login'
// import Sign from './views/wt/sign'
export default {
  name: 'app',
  components: {
  //   Login,
  // Sign
  // }, mounted() {
  //   this.$router.push("/classify");
  }
}


</script>

<style>
html,body{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  /* margin-top: 60px; */
}

</style>
