<template>
  <div>
    <div class="first_pic">
      <img
      @error="zhan"
        src="http://cdn.lzljmall.com/public/images/1c/81/c2/efe255417786b50d19b54313c2d59fb2cd089247.jpg?1477039058#h"
      />
    </div>
    <div class="second_pic">
      <div class="br_title">HOT BRAND / 品牌推荐</div>
      <div class="br_pic">
        <img   @error="zhan"
          src="http://cdn.lzljmall.com/public/images/33/f5/87/56a87270f4d7bcf9f791c2d1dacd43a42933983e.jpg?1519455206#h"
        />
        <img   @error="zhan"
          src="http://cdn.lzljmall.com/public/images/03/74/a7/9d2ec3a9e6965c5d48b64c92997787037a466930.jpg?1488772980#h"
        />
        <img   @error="zhan"
          src="http://cdn.lzljmall.com/public/images/ae/d0/9b/9757e1619696ca7e5c0fdde75a92a0b4d31a13d3.jpg?1488772986#h"
        />
        <img  @error="zhan"
          src="http://cdn.lzljmall.com/public/images/11/49/3c/2af1eb89a76f550d7f4757865cc12f7592fd25af.jpg?1488773151#h"
        />
      </div>
    </div>
    <div class="third_pic"></div>
    <div class="fourth_pic"></div>
    <div class="fifth_pic"></div>
  </div>
</template>
<script>
import imgs from "../static/img/1.jpg"
export default {
  name: "page1",
  methods: {
    zhan(e) {
      e.target.src=imgs;
    }
  }
};
</script>
<style scoped>
.first_pic {
  width: 100%;
  height: 427px;
  overflow: hidden;
}
.first_pic img {
  width: 1440px;
  height: 427px;
}
.second_pic {
  width: 100%;
  height: 450px;
  background: #d00a00;
  border-bottom: 4px solid #b50b02;
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
  width: 1365px;
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
.third_pic {
  background: url(http://cdn.lzljmall.com/public/images/16/8c/99/968e6fcb85817488f964a6a3666a0ad824a30564.jpg?1472395257#h)
    center center no-repeat;
  width: 100%;
  text-align: center;
  height: 624px;
}
.fourth_pic {
  background: url(http://cdn.lzljmall.com/public/images/44/aa/31/e89015a90723e3e1a8e8bdf2c87dc397f07a0962.jpg?1510818270#h)
    center top no-repeat;
  text-align: center;
  width: 100%;
  height: 6292px;
}
.fifth_pic {
  width: 100%;
  height: 684px;
  background: url(http://cdn.lzljmall.com/public/images/1a/04/a2/9c514f5c2d7ae4bcf2373968146570914c0dfa07.jpg?1510818128#h)
    center bottom no-repeat;
}
</style>

