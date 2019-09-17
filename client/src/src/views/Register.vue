<template>
  <div class="login">
    <myHeader></myHeader>
    <RegisterF></RegisterF>
    <Lfooter></Lfooter>
  </div>
</template>
<script>
import LHeader from "../components/bar_common/Header";
import Lfooter from "../components/bar_common/AdmFooter";
import RegisterF from "../components/common/Register/RegisterF";
export default {
  name: "register",
  components: {
    myHeader: LHeader,
    RegisterF,
    Lfooter
  },
  created() {
    localStorage.setItem(
      "sucflag",
      JSON.stringify({ userName: "", sucflag: 0 })
    );
  }
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
}
</style>