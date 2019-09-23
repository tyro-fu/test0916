<template>
  <div>
    <div class="top">
      <div class="topLeft">
        <div>您好，欢迎来到泸州老窖官方商城！</div>
        <div class="logintext">
          <div @click="toLogin" class="change">登录</div>
          <div class="f1">|</div>
          <div @click="toSign" class="change">注册</div>
        </div>
      </div>
      <div class="topright">
        <div>我的订单</div>
        <div class="f1">|</div>
        <div>会员中心</div>
        <div class="f1">|</div>
        <div>帮助中心</div>
        <div class="f1">|</div>
        <div>我的购物车</div>
      </div>
    </div>
    <div class="logoBox">
      <div class="logo">
        <div class="logiImg">
          <img
            src="http://www.lzljmall.com/public/images/bf/0d/f3/d171281ab142865952d58ee90c0ed347e8576494.png?1446521609#w"
          />
        </div>
        <div class="iput">
          <div>
            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
              <el-button slot="append" icon="el-icon-search">搜索</el-button>
            </el-input>
          </div>
          <div class="inpText">
            <div>国窖1573</div>
            <div class="f1">|</div>
            <div>特曲</div>
            <div class="f1">|</div>
            <div>窖龄30</div>
            <div class="f1">|</div>
            <div>头曲</div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="navBar">
        <ul :default-active="activeIndex" class="ul-demo" mode="horizontal" @select="handleSelect">
          <!-- <el-submenu index="2" class="AllGoods">
   <template slot="title" class="AllGoodsBox" >全部商品分类</template>
   <el-submenu index="2-1">
      <template slot="title">国窖1573</template>
      <li index="2-1-1">经典系列</li>
      <li index="2-1-2">其他</li>
  
    </el-submenu>
    <el-submenu index="2-2">
      <template slot="title">窖龄</template>
      <li index="2-2-1">窖龄30</li>
      <li index="2-2-2">窖龄60</li>
      <li index="2-2-3">窖龄90</li>
    </el-submenu>
    <el-submenu index="2-3">
      <template slot="title">特曲</template>
      <li index="2-3-1">经典系列</li>
      <li index="2-3-2">其他</li>

    </el-submenu>
    <el-submenu index="2-4">
      <template slot="title">头曲</template>
      <li index="2-4-1">畅想中国60年</li>
      <li index="2-4-2">其他</li>
 
    </el-submenu>
     <el-submenu index="2-5">
      <template slot="title">高端定制</template>
      <li index="2-5-1">高端定制</li>
      <li index="2-5-2">常规定制</li>

    </el-submenu>
    
          </el-submenu>-->

          <li class="AllGoods">
            <a href="#" target="_blank">全部商品分类</a>
          </li>
          <li class="otherGoods" v-for="(item,index) in type" :key="index">
            <a href="#" target="_blank" @click="getPro(item)">{{item}}</a>
          </li>
          <!-- <li class="otherGoods">
            <a href="#" target="_blank">国窖1573</a>
          </li>
          <li class="otherGoods">
            <a href="#" target="_blank">窖龄酒</a>
          </li>
          <li class="otherGoods">
            <a href="#" target="_blank">特曲</a>
          </li>
          <li class="otherGoods">
            <a href="#" target="_blank">头窖藏瓶</a>
          </li>
          <li class="otherGoods">
            <a href="#" target="_blank">桃花醉</a>
          </li>
          <li class="otherGoods">
            <a href="#" target="_blank">所有商品</a>
          </li>

          <li class="otherGoods">
            <a href="#" target="_blank">百调</a>
          </li>
          <li class="otherGoods">
            <a href="#" target="_blank">热销推荐</a>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
     type:['首页','国窖1573','窖龄酒','特曲','头窖藏瓶','桃花醉','所有商品','百调','热销推荐']
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
    toSign() {
      this.$router.push("/sign");
    },
  created(type) {
    net
    .get("http://localhost:8888/getProduct",{ type: type })
    .then(res =>{
      console.log("66",res)
    })
  }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
body {
  background-color: #f8f8f8;
}
.topBox {
  width: 100%;
  height: 30px;
  background-color: #f8f8f8;
}
.top {
  margin: 0 auto;

  width: 1200px;
  height: 30px;
}
.topLeft {
  width: 280px;
  height: 30px;
  /* background-color: blueviolet; */
  float: left;
  display: flex;
  font-size: 12px;
  align-items: center;
}

.logintext {
  margin-left: 20px;
  display: flex;
  font-size: 12px;
}
.f1 {
  margin-left: 5px;
  margin-right: 5px;
}
.topright {
  height: 30px;
  /* width: 340px; */
  /* background-color: brown; */
  float: right;
  display: flex;
  font-size: 12px;
  align-items: center;
}
.logoBox {
  height: 130px;
  width: 100%;
  background-color: #fff;
  border-bottom: #ddd;
  box-shadow: 2px 2px 5px #eaeaea;
  display: flex;
}
.logo {
  width: 1200px;

  margin: 0px auto;
  padding-top: 15px;
  display: flex;
}
.logiImg {
  width: 200px;
  height: 99px;
}
.iput {
  width: 540px;
  height: 38px;
  /* background: palegreen; */
  margin-left: 150px;
  margin-top: 13px;
}
.inpText {
  display: flex;
  font-size: 12px;
  color: #666;
}
/* .input-with-select{
        border: 2px solid #d00a00;
} */
/* .inpBut{
        background-color: #d00a00;
} */
.nav {
  width: 100%;
  line-height: 38px;
  background-color: #fff;
  border-bottom: 2px solid #d00a00;
  /* padding-left: -40px; */
}
.navBar {
  width: 1200px;
  margin: 0 auto;
  height: 38px;
      margin-bottom: 0.5px;
  /* background-color: #f8f8f8; */
}
.ul-demo {
  list-style: none;
  width: 1200px;
  height: 38px;
      padding-left: 0;
    margin: 0 auto;
}
.ul-demo > li {
  float: left;
  box-sizing: border-box;
  padding:0 20px;
  
}
.AllGoods {
 
  font-size: 14px;
  width: 200px;
  padding-left: 0;
  background-color: #d00a00;
  text-align: center;
  height: 38px;
  overflow: hidden;
}
.AllGoods>a{
 color: #fff ;
}
/* .AllGoods >>> .AllGoodsBox {
  width: 200px;
  height: 38px !important;
} */
.change {
  cursor: pointer;
}
.otherGoods{
      background-color: #fff;
   
}
.otherGoods>A{
         color: #333;
    font-size: 14px
}
</style>