<template>
  <div class="detail-box">
      <DetailBox></DetailBox>
  </div>
</template>
<script>
import DetailBox from "../../components/DetailBox"
export default {
  name: "detail",
  components: {
      DetailBox
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.detail-box {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>