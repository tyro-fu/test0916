<template>
  <div>
    <div class="first_pic"></div>
    <div class="second_pic">
      <div class="br_title">HOT BRAND / 品牌推荐</div>
      <div class="br_pic">
        <img
          @error="zhan"
          src="http://cdn.lzljmall.com/public/images/21/d5/56/645ed40e1d21c23812b5642cdcb9f41aeb72769e.jpg?1452847946#h"
        />
        <img
          @error="zhan"
          src="http://cdn.lzljmall.com/public/images/9c/86/97/92fb7446350abb56067170eab0df86d20a3be0a9.jpg?1452847965#h"
        />
        <img
          @error="zhan"
          src="http://cdn.lzljmall.com/public/images/f5/95/a5/a32240d48459dec6e5d3e798085ee1391164d578.jpg?1452847985#h"
        />
        <img
          @error="zhan"
          src="http://cdn.lzljmall.com/public/images/13/7f/71/f3a89691f644b061444f443963ab5f5fa9401292.jpg?1452848002#h"
        />
      </div>
    </div>
    <div class="third_pic"></div>
  </div>
</template>
<script>
import imgs from "../static/img/1.jpg";
export default {
  methods: {
    zhan(e) {
      e.target.src = imgs;
    }
  }
};
</script>
<style scoped>
.first_pic {
  background: url(http://cdn.lzljmall.com/public/images/ba/86/73/ee7d03623b07dcce6d4538b12c87b4bd64484e05.jpg?1449731943#h)
    center center no-repeat;
  width: 100%;
  height: 576px;
}
.second_pic {
  width: 100%;
  height: 450px;
  background-color: #cccccc;
  border-bottom: 4px solid #cccccc;
}
.br_title {
  width: 510px;
  height: 90px;
  font-size: 42px;
  font-weight: bold;
  color: #fff;
  margin: 0 auto;
  line-height: 90px;
}
.br_pic {
  width: 100%;
  height: 326px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
}
.br_pic img {
  width: 326px;
  height: 326px;
}
.br_pic img:hover {
  opacity: 0.9;
}
.third_pic {
  background: url(http://cdn.lzljmall.com/public/images/ac/c7/40/cb4f2f8bc69f2980af9dd06ffd27fa8c4470a3e4.jpg?1450074063#h)
    center center no-repeat;
  width: 100%;
  height: 3905px;
}
</style>