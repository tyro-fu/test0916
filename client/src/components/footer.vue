<template>
  <div class="footer">
    <div class="slogan">
      <div class="page">
        <div>
          <img src="http://lzljmall.com/themes/lzlj/widgets/gh_footer_slogan/images/bottom01.png" />
          <h4>官方直送</h4>
        </div>
        <div>
          <img src="http://lzljmall.com/themes/lzlj/widgets/gh_footer_slogan/images/bottom02.png" />
          <h4>快捷保真</h4>
        </div>
        <div>
          <img src="http://lzljmall.com/themes/lzlj/widgets/gh_footer_slogan/images/bottom03.png" />
          <h4>自产自销</h4>
        </div>
        <div>
          <img src="http://lzljmall.com/themes/lzlj/widgets/gh_footer_slogan/images/bottom04.png" />
          <h4>正品保障</h4>
        </div>
      </div>
    </div>
    <div class="service">
      <div class="page">
        <div>
          <dl>
            <dt>帮助中心</dt>
            <ul>
              <li>发票须知</li>
              <li>支付/配送方式</li>
              <li>购物条款</li>
            </ul>
          </dl>
        </div>
        <div>
          <dl>
            <dt>新手上路</dt>
            <ul>
              <li>商品退货保障</li>
              <li>积分奖励计划</li>
              <li>订单的几种状态</li>
              <li>顾客必读</li>
            </ul>
          </dl>
        </div>
        <div>
          <dl>
            <dt>购物指南</dt>
            <ul>
              <li>简单的购物流程</li>
              <li>网站免责声明</li>
            </ul>
          </dl>
        </div>
        <div>
          <dl>
            <dt>支付/配送方式</dt>
            <ul>
              <li>关于送货和验货</li>
              <li>网上支付小贴士</li>
              <li>订单何时出库？</li>
              <li>配送方式</li>
              <li>支付方式</li>
            </ul>
          </dl>
        </div>
        <div>
          <dl>
            <dt>公司简介</dt>
            <ul>
              <li>企业介绍</li>
              <li>企业理念</li>
              <li>联系我们</li>
              <li>营业执照</li>
              <li>食品经营许可证</li>
            </ul>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  height: 522;
  background: #262626;
}
.slogan {
  height: 266px;
  border-bottom: 1px solid #7d7d7d;
}
.page {
  width: 1200px;
  display: flex;
  justify-content: space-around;
  padding: 60px 0;
  margin: 0 auto;
}
.slogan img {
  width: 100px;
  height: 100px;
}
.slogan h4 {
  width: 300px;
  height: 25px;
  margin-top: 10px;
  font-size: 18px;
  color: #ffffff;
}
.service {
  height: 256px;
}
.page dl dt{
    font-size: 20px;
    color: #ffffff;
}
.page ul{
    padding-left: 5px;
}
.page dl ul li{
    list-style: none;
    text-align: left;
    font-size: 12px;
    color: #ffffff;
}
</style>