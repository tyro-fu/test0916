<template>
  <div>
    <div class="first_pic">
      <img @error="zhan"
        src="http://cdn.lzljmall.com/public/images/07/ea/9a/66865d1e69b91b3410f20ef505cffefbb967d7e4.jpg?1480486224#h"
      />
    </div>
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
    <div class="fifth_pic"></div>
    <div class="sixth_pic"></div>
    <div class="seventh_pic"></div>
    <div class="eighth_pic"></div>
    <div class="nineth_pic"></div>
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
.second_pic {
  width: 100%;
  height: 450px;
  background-color: #c27c34;
  border-bottom: 4px solid #6d5740;
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
  background: url(http://cdn.lzljmall.com/public/images/49/ab/7f/6e163bb2d67238e72c03263a1ceaa4073ae966cf.jpg?1480484273#h)
    center center no-repeat;
  width: 100%;
  height: 798px;
  text-align: center;
}
.fourth_pic {
  background: url(http://cdn.lzljmall.com/public/images/63/97/b1/53ac5708203803dad433f60b754601ce62281382.jpg?1472395505#w)
    center center no-repeat;
  text-align: center;
  width: 1527px;
  height: 546px;
  overflow: hidden;
}
.fifth_pic {
  width: 1527px;
  height: 629px;
  background: url(http://cdn.lzljmall.com/public/images/d4/bb/cf/a831979efddb67b7c114f0958c9f614c7da9d971.jpg?1466135495#w)
    center center no-repeat;
}
.sixth_pic {
  width: 1527px;
  height: 625px;
  background: url(http://cdn.lzljmall.com/public/images/03/f8/89/824477775aec09c4ba8053380fe4bd11ef4db10e.jpg?1472454054#w)
    center center no-repeat;
}
.seventh_pic {
  width: 1527px;
  height: 636px;
  background: url(http://cdn.lzljmall.com/public/images/ca/54/bf/e59d8a8cc61680ba7d1863a3ce94b6b182ae461f.jpg?1480486210#w)
    center center no-repeat;
}
.eighth_pic {
  width: 1527px;
  height: 624px;
  background: url(http://cdn.lzljmall.com/public/images/7e/00/91/9bc42b423abb24812829a04d708e86c3a919eee6.jpg?1466135520#w)
    center center no-repeat;
}
.nineth_pic {
  width: 1527px;
  height: 633px;
  background: url(http://cdn.lzljmall.com/public/images/13/a5/73/881da6a6c4cef4f464c34c3b09c63e5e7ff95dba.jpg?1466135528#w)
    center center no-repeat;
}
</style>