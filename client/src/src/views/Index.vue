<template>
  <div class="index">
    <adheader></adheader>
    <sideNav></sideNav>
    <div class="views">
      <router-view class></router-view>
    </div>
  </div>
</template>
<script>
import Headers from "../components/common/index/Header";
import sideNav from "../components/common/index/sideNav";
export default {
  name: "index",
  components: {
    adheader: Headers,
    sideNav
  },
  beforeCreate() {
    if (JSON.parse(localStorage.getItem("sucflag")) == null) {
      localStorage.setItem(
        "sucflag",
        JSON.stringify({ userName: "", sucflag: 0 })
      );
    }
    let sucflag = JSON.parse(localStorage.getItem("sucflag"));
    if (sucflag.sucflag == 0) {
      this.$router.push("/login");
    }
    // window.console.log(JSON.parse(localStorage.getItem("sucflag")))
  }
};
</script>
<style scoped>
.index {
  width: 100%;
  height: 100%;
}
.views {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding-top: 5.0625rem;
  padding-left: 15.625rem;
}
</style>