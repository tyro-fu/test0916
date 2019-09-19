<template>
<div>
    <div class="top">
        <div class="topLeft">
          <div>您好，欢迎来到泸州老窖官方商城！</div>
          <div class="logintext">
            <div>登录</div>
            <div class="f1">|</div>
            <div>注册</div>
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
          <img
            src="http://www.lzljmall.com/public/images/bf/0d/f3/d171281ab142865952d58ee90c0ed347e8576494.png?1446521609#w"
          />
        </div>
      </div>
       </div>
</template>
<script>
export default {
 
    name:"LoginandSign"
};
</script>
<style>
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

  width: 960px;
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
}
.logo {
  width: 960px;
  height: 130px;
  margin: 0px auto;
  padding-top: 15px; 
}
</style>