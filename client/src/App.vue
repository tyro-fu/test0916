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

    <!-- <Login></Login> -->
  <!-- <Sign></Sign> -->
  <classify></classify>
  </div>
</template>

<script>
// import classify from './views/wt/classify'
// import Login from './views/wt/login'
// import Sign from './views/wt/sign'
export default {
  name: 'app',
  components: {
    // Login,
  // Sign
  // classify
  },
   created() {
    this.$router.push("/classify")
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}

</style>
