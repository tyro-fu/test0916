<template>
  <div>
    <classifyTop></classifyTop>
    <div class="page">
      <div class="LeftNav">
        <el-row class="tac">
          <el-col :span="12" class="width">
            <div class="LeftNavTittle">商品分类</div>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="white"
              text-color="#666"
              active-text-color="#d00a00"
            >
              <el-submenu v-for="(item,inDex) in type" :key="inDex" index>
                <template slot="title">
                  <span @click="getPro(item)">{{item}}</span>
                </template>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="RightGoods">
        <div class="Goods">
         <div> 
             <img
            class="action-goods-img"
           
            style="max-width:210px;max-height:210px;margin: 0 auto;   margin-left: 10px;"
            src="http://cdn.lzljmall.com/public/images/b6/42/1e/886e43dc5457a1dd67aa9a1a258f1f6351e8acd2.jpg?1493347743#h"
          />
          </div>
          <div class="GoodsText">
              52度   国窖1573    500ml  泸州老窖官方商城
          </div>
          <div class="money">￥969.00</div>
          <div class="GoodsBtns">
              <div class="toPay"><a href="#">加入购物车</a></div>
              <div class="collect"><a href="#">收藏</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import net from "../../utils/net"
import classifyTop from "../../components/classifyTop";
export default {
  data() {
    return {
      type:['国窖1573','特曲',' 窖龄','头曲','二曲','泸小二','高端定制','养生酒','其他','配方','官方留藏','红酒','啤酒','大区','玛格丽特葡萄汁','百调','桃花醉','百调512活动','热销推荐']

    }
  },
  components: {
    classifyTop
  },
  methods: {
    handleOpen(key, keyPath) {
      window.console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      window.console.log(key, keyPath);
    }
    
  },
  created() {
    let type=this.$route.params.type;
    window.console.log("1223",this.$route.params,type)

    // net
    // .get("http://localhost:8888/getProduct",{ type: type })
    // .then(res =>{
    //   window.console.log("66",res)
    // })
  },
};
</script>
<style >
a{
    text-decoration: none;
        /* color: #fff; */
        font-size: 12px;
}
.page {
  width: 1200px;
  height: 600px;
  margin: 0 auto;
  /* background-color: aqua; */
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.LeftNav {
  width: 200px;
  /* height: 400px; */
  /* background-color: blueviolet; */
}
.RightGoods {
  width: 980px;
  height: 500px;
  /* background-color: brown; */
}
.width {
  width: 100% !important;
}
.LeftNavTittle {
  margin: 0;
  padding-bottom: 0;
  font-size: 14px;
  line-height: 30px !important;
  font-weight: normal;
  font-family: "Microsoft YaHei", "微软雅黑" !important;
  border-bottom: solid 2px #333333;
  color: #212121;
}
.Goods {
  float: left;
  width: 230px !important;
  height: 330px;
  background: #ffffff;
  margin-bottom: 15px;
  /* padding: 10px; */
  margin-right: 15px;
  border-bottom: none;
   /* box-shadow: 1px 1px 4px #e3e3e3; */

}
.Goods:hover{
   box-shadow: 4px 4px 4px #e3e3e3;
   cursor: pointer;
}
.GoodsText{
    line-height: 18px !important;
    font-weight: 400;
    font-size: 12px;
    width: 208px;
    height: 34px;
    margin: 5px auto;
}
.money{
    height: 23px;
        color: #d00a00;
            text-decoration: none;
    font-weight: bold;
    width: 210px;
    margin: 0 auto;
}
.GoodsBtns{
    width: 210px;
    height: 25px;
    /* background-color: aqua; */
    margin: 10px auto;
    display: flex;
    }
    .toPay a{
width: 90px;
    height: 25px;
    line-height: 25px !important;
    display: inline-block;
    color: #fff !important;
    background-color: #d00a00;
    border-radius: 3px;
    text-align: center;
    }
    .collect a{
        /* width: 45px !important;
height: 25px !important; */
    /* line-height: 25px !important; */
    /* text-align: center;
    background-color: #fefefe;
  
    border-radius: 3px;
        color: #666; */
        height: 25px;
    line-height: 25px !important;
    margin-left: 15px;
    display: inline-block;
    background-color: #fefefe;
    border-radius: 3px;
    text-align: center;
        color: #666;
          border: 1px solid #ddd;
    width: 45px !important;
    }
</style>