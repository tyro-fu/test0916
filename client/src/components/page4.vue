<template>
  <div>
    <div class="first_pic"></div>
    <div class="second_pic">
      <div class="br_title">HOT BRAND / 品牌推荐</div>
      <div class="br_pic">
        <img @error="zhan"
          src="http://cdn.lzljmall.com/public/images/56/8d/86/b59b9717bf503580b72d506a3bc020d35dc0f100.jpg?1511165107#h"
        />
        <img @error="zhan"
          src="http://cdn.lzljmall.com/public/images/83/01/c2/ecd4059c6e10f371fb5b5bcfa3afcc8b8a1b1dd0.jpg?1511165117#h"
        />
        <img @error="zhan"
          src="http://cdn.lzljmall.com/public/images/61/cf/6a/031a1b89648d5d32b1ffed54dd16b27dedb8bc6d.jpg?1511165127#h"
        />
        <img @error="zhan"
          src="http://cdn.lzljmall.com/public/images/1b/01/97/6dd845ea85a252e2023e2b0ccd9d04e4a7100df6.jpg?1511245585#h"
        />
      </div>
    </div>
    <div class="third_pic"></div>
    <div class="fourth_pic"></div>
    <!-- <div class="fifth_pic"></div>
    <div class="sixth_pic"></div> -->
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
  background: url(http://cdn.lzljmall.com/public/images/44/0e/9d/28e0a7a5b9108fc812b856edda38ca654496c828.jpg?1519796453#h)
    center center no-repeat;
  width: 100%;
  height: 570px;
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
.third_pic{
    background: url(http://cdn.lzljmall.com/public/images/ad/95/92/d1cdc4d9f7527abdbc06be1e6b29ce19d30cfb97.jpg?1466498138#h) center center no-repeat;
    height: 850px;
    text-align: center;
}
.fourth_pic{
    background: url(http://cdn.lzljmall.com/public/images/58/08/8d/86fcb6e914d395e707e964efa2746102ae3fcb2e.jpg?1466497272#h) center center no-repeat;
    height: 3176px;
}
</style>