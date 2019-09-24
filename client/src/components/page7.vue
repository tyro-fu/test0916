<template>
  <div>
    <div class="first_pic">
      <img @error="zhan"
        src="http://cdn.lzljmall.com/public/images/99/ef/c9/f66e7be7d4807f93a45fefefeb1ab460f548361a.jpg?1496304147#w"
      />
    </div>
    <div class="br_title">HOT BRAND / 品牌推荐</div>
    <div class="second_pic">
      <img @error="zhan"
        src="http://cdn.lzljmall.com/public/images/06/3a/1c/6a3c0bb671a667f4dbb10fd62ac8e511e9cfe13a.jpg?1525420281#w"
      />
    </div>
    <div class="fourth_pic">
      <img @error="zhan"
        src="http://cdn.lzljmall.com/public/images/6e/61/c1/035a4d8de82de31a03624c7f982a9c4c11a2c31d.jpg?1525420305#w"
      />
    </div>
    <div class="fifth_pic">
      <img @error="zhan"
        src="http://cdn.lzljmall.com/public/images/39/38/c9/e55d05d3f4b86d0939c7ce57f2df28b9b455da74.jpg?1464056826#w"
      />
    </div>
    <div class="sixth_pic">
      <img @error="zhan"
        src="http://cdn.lzljmall.com/public/images/f3/46/59/7e25e32d4e203986a6d290455b9091dd3ac8eaaf.jpg?1477377566#h"
      />
    </div>
  </div>
</template>
<script>
import imgs from "../static/img/1.jpg"
export default {
  methods: {
      zhan(e) {
      e.target.src=imgs;
    }
  },
}
</script>
<style scoped>
.first_pic {
  width: 100%;
  height: 500px;
  overflow: hidden;
}
.first_pic img {
  width: 100%;
  height: 500px;
}
.br_title {
  width: 100%;
  height: 124px;
  background-color: #cccccc;
  border-bottom: 4px solid #cccccc;
  font-size: 42px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  line-height: 124px;
}
.second_pic {
  height: 1002px;
  overflow: hidden;
}
.second_pic img {
  width: 1426px;
  height: 1002px;
}
.fourth_pic {
  height: 1034px;
  overflow: hidden;
}
.fourth_pic img {
  width: 1426px;
  height: 1034px;
}
.fifth_pic {
  height: 1128px;
  overflow: hidden;
}
.fifth_pic img {
  width: 1426px;
  height: 1128px;
}
.sixth_pic {
  height: 3631px;
  overflow: hidden;
}
.sixth_pic img {
  width: 1426px;
  height: 3517px;
}
</style>