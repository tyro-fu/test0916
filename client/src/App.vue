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
  }
  // mounted() {
  //   this.$router.push("/home");
  // }
}


</script>

<style>
body{
  margin: 0;
  padding: 0;
}

</style>
