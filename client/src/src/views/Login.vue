<template>
  <div class="login">
    <myHeader></myHeader>
    <loginF></loginF>
    <Lfooter></Lfooter>
  </div>
</template>
<script>
import LHeader from "../components/bar_common/Header";
import Lfooter from "../components/bar_common/AdmFooter";
import LoginContent from "../components/common/Login/LoginContent";
export default {
  name: "login",
  components: {
    myHeader: LHeader,
    loginF: LoginContent,
    Lfooter
  },
  created() {
    localStorage.setItem("sucflag", JSON.stringify({ userName: "", sucflag: 0 }));
  }
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
}
</style>