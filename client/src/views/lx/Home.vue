<template>
  <div>
    <Top></Top>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Top from "../../components/header.vue";
import Footer from "../../components/footer.vue";
export default {
  name: "home",
  components: {
    Top,
    Footer
  }
};
</script>