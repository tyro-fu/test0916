<template>
  <div class="detail-box">
    <ClassifyTop></ClassifyTop>
    <DetailBox></DetailBox>
  </div>
</template>
<script>
import DetailBox from "../../components/DetailBox";
import ClassifyTop from "../../components/classifyTop"
export default {
  name: "detail",
  components: {
    DetailBox,
    ClassifyTop
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.detail-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>