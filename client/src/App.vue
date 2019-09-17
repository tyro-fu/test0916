<template>
  <div id="app">
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
    <Login></Login>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Login from './components/login.vue'
export default {
  name: 'app',
  components: {
    Login
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}

</style>
