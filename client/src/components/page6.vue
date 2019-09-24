<template>
  <div>
    <div class="first_pic">
      <img
        src="http://cdn.lzljmall.com/public/images/99/0c/27/1e93846bd08563074f4ac7c81b891199ce90d0e4.jpg?1554349933#w"
      />
    </div>
    <div class="second_pic">
      <div class="br_title">HOT BRAND / 品牌推荐</div>
      <div class="br_pic">
        <img
          @error="zhan"
          src="http://cdn.lzljmall.com/public/images/52/57/c9/a3bcbfebe152494fb8ef476cc1f94615b283fa6a.jpg?1554349972#w"
        />
        <img
          @error="zhan"
          src="http://cdn.lzljmall.com/public/images/e8/b7/98/3fde6feaedfc986bd4e4930347f94b657bd7bbf2.jpg?1554349979#w"
        />
        <img
          @error="zhan"
          src="http://cdn.lzljmall.com/public/images/16/01/9f/f37e01cc844c49f84f0b82c5a35636683c7bbefb.jpg?1554350052#w"
        />
        <img
          @error="zhan"
          src="http://cdn.lzljmall.com/public/images/5b/4f/02/c5b8f743fc0cc0297e783307ddd423393c1f2185.jpg?1554350092#w"
        />
      </div>
    </div>
    <div class="third_pic"></div>
    <div class="fourth_pic"></div>
    <div class="fifth_pic"></div>
    <div class="sixth_pic"></div>
    <div class="seventh_pic"></div>
    <div class="eighth_pic"></div>
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
  height: 558px;
  background-color: #41249b;
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
  height: 434px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
}
.br_pic img {
  width: 326px;
  height: 434px;
}
.br_pic img:hover {
  opacity: 0.9;
}
.third_pic {
  width: 100%;
  height: 582px;
  overflow: hidden;
  background: url(http://cdn.lzljmall.com/public/images/52/de/4e/9fa97d89c3ce1bae8903785c42e501ded2585200.jpg?1554350958#w)
    center center no-repeat;
}
.fourth_pic {
  height: 817px;
  overflow: hidden;
  background: url(http://cdn.lzljmall.com/public/images/63/5f/04/ead166b404b52ce0ed6a72a5504a79b61ca57a74.jpg?1554352034#w)
    center center no-repeat;
}
.fifth_pic {
  width: 100%;
  height: 788px;
  background: url(http://cdn.lzljmall.com/public/images/af/46/14/17ef4ba22ac4739eb6754d9ac716345320e4c69c.jpg?1554352077#w)
    center center no-repeat;
}
.sixth_pic {
  height: 933px;
  overflow: hidden;
  background: url(http://cdn.lzljmall.com/public/images/ba/56/49/c4902eaaf19e573cf2aadf93b0fea010ad1897c9.jpg?1554352166#w)
    center center no-repeat;
}
.seventh_pic {
  height: 955px;
  background: url(http://cdn.lzljmall.com/public/images/c7/b1/3b/424f72da595b26b150844574b5fd4f45118be394.jpg?1554352351#w)
    center center no-repeat;
}
.eighth_pic {
  background: url(http://cdn.lzljmall.com/public/images/ae/ea/8b/740deaf467d6280fa0a26b335bf491f178ca428f.jpg?1554352006#w)
    center bottom no-repeat;
  height: 813px;
}
</style>