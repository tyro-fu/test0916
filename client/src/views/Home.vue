<template>
  <div class="home">
 <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Login from '@/components/login.vue'
export default {
  name: 'home',
  components: {
    // HelloWorld,
    // Login
  },
  created() {
    this.$router.push("/login")
  }
}
</script>
