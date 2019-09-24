<template>
  <div>
    <div class="first_pic">
      <img
        @error="zhan"
        src="http://cdn.lzljmall.com/public/images/a7/46/28/434f991867ee0eda757ef2f79d55b48085a14ddf.jpg?1527848412#h"
      />
    </div>
    <div class="second_pic">
      <div class="br_title">HOT BRAND / 品牌推荐</div>
      <div class="br_pic">
        <img
          @error="zhan"
          src="http://cdn.lzljmall.com/public/images/04/3f/52/6cb6f0d6ebe3e0e71730cf86300e11b20b9158a1.jpg?1527848448#h"
        />
        <img
          @error="zhan"
          src="http://cdn.lzljmall.com/public/images/af/2e/e8/1b63d57d125cad59737f11ea572f92efa58cd2c6.jpg?1527848465#h"
        />
        <img
          @error="zhan"
          src="http://cdn.lzljmall.com/public/images/35/e7/31/94b8417dc393c3bee3ae0991c77b2185ed4e821e.jpg?1527848495#h"
        />
        <img
          @error="zhan"
          src="http://cdn.lzljmall.com/public/images/0e/65/1e/8a7ec8259494ff3196004af9453c064d0e11ab9a.jpg?1527848523#h"
        />
      </div>
    </div>
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
  width: 100%;
  height: 500px;
  overflow: hidden;
}
.first_pic img {
  width: 100%;
  height: 500px;
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
</style>