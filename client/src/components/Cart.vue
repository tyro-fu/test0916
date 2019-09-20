<template>
    <div >
        <LoginAndSign></LoginAndSign>
        <div class="cart-title">
           <i class="el-icon-s-goods"></i> <span>购物车</span>
           <div class='cart-box'>
               <div class="cart-none" v-if="carts.length===0"> 
                   <i class="el-icon-s-goods"></i>
                   <p>您的购物车还没有商品,您可以去商城逛逛</p>
               </div>
                <el-row>
  <el-col :span="6"><div class="col-title">商品</div></el-col>
  <el-col :span="3"><div class="col-title">销售价</div></el-col>
  <el-col :span="3"><div class="col-title">数量</div></el-col>
  <el-col :span="3"><div class="col-title">优惠</div></el-col>
  <el-col :span="3"><div class="col-title">积分</div></el-col>
  <el-col :span="3"><div class="col-title">小计</div></el-col>
  <el-col :span="3"><div class="col-title">操作</div></el-col>
</el-row>
               <div v-for="(cart,index) in carts" :key="index" class="cart">
                   <img :src=cart.img >
                   <div class="pro-name">{{cart.name}}</div>
                   <el-tag type="info" class="tag">净含量{{cart.kind}}</el-tag>
                   <div class="money">￥{{cart.price}}</div>
                   <div class="count">
                   <div class="up">+</div>
                   <div class="num">{{cart.count}}</div>
                   <div class="up">-</div>
                   </div>
                   <div class="offer">￥0.00</div>
                   <div class="integ">-</div>
                   <div class="tp">￥{{cart.price*cart.count}}</div>
                   <div class="delete">删除</div>
               </div>
               <div class="all">
                   <span>优惠金额:￥0.00</span>
                   <span>商品总金额:￥{{allPrice}}.00</span>
                   </div>
           </div>
        </div>
    </div>
</template>
<script>
import LoginAndSign from './loginandsign'
export default {
    name:"Cart",
    components: {
        LoginAndSign
    },
    data() {
        return {
            carts:[{img:'http://cdn.lzljmall.com/public/images/cb/35/39/398832ce195a2a6f1cba3ab0bfee979d827a1619.jpg?1546669316#h',name:'泸州老窖 国窖1573 澳网冠军版 40度750ml 浓香型白酒 泸州老窖官方商城',kind:'750ml',count:2,price:10888},{img:'http://cdn.lzljmall.com/public/images/cb/35/39/398832ce195a2a6f1cba3ab0bfee979d827a1619.jpg?1546669316#h',name:'泸州老窖 国窖1573 澳网冠军版 40度750ml 浓香型白酒 泸州老窖官方商城',kind:'750ml',count:1,price:10888}]
        }
    },
    computed: {
        allPrice:function(){
            let allPrice=0;
            this.carts.forEach(cart=>{
             allPrice+=cart.count*cart.price
            })
            return allPrice
        }
    },
    methods: {
        handleChange(value) {
        console.log(value);
      }
    },
    created() {
        
    },
}
</script>
<style scoped lang='less'>
.cart-title{
    width: 960px;
    height: 40px;
    font-size: 22px;
    line-height: 40px;
    margin: 10px auto;
    font-weight: 500;
    span{
        color: #D00A17;
        margin-left:3px;
    }
    i{
        color: #D00A17;
    }
}
.cart-box{
    width: 960px;
    min-height: 300px;
    margin: 0 auto;
    background-color: #EFEFEF;
    .col-title {
        height: 24px;
        text-align: center;
        font-size: 14px;
        color: #7f8c8d;
        margin-bottom: 10px;
    }
    .cart-none{
        display: flex;
        align-items: center;
        width: 500px;
        height: 100px;
        margin: 0 auto;
        position: absolute;
        color: #B9B9B9;
        top: 50%;
        left: 50%;
        margin-top: -100px;
        margin-left: -250px;
        i{
            font-size: 50px;
        }
        p{
            font-weight: 400;
            font-size: 16px;
        }
    }
    .cart{
        padding-top: 5px;
        height: 100px;
        display: flex;
        background-color: #fff;
        color: #95a5a6;
        position: relative;
        border-bottom:1px #ccc solid;
        align-items: center;
        .tag{
            width: 90px;
            height: 22px;
            position: absolute;
            top: 80px;
            left: 80px;
            color: #95a5a6;
            line-height: 20px;
        }
        img{
            width: 80px;
            height: 80px;
        }
        .pro-name{
            font-size: 12px;
            width: 180px;
            line-height: 16px;
        }
        .money{
            font-size: 16px;
            color:#D00A17;
        }
        .count{
            margin-left:70px; 
            height: 30px;
            display: flex;
            width: 60px;
            .up { 
                width: 20px;
                border: #EFEFEF 1px solid;
                color: #B9B9B9;
                text-align: center;
                line-height: 30px;
                cursor: pointer;
            }
            .up:hover{
                background-color: #B9B9B9;
                color: #fff;
            }
            .num{
                border-top: #EFEFEF 1px solid;
                border-bottom: #EFEFEF 1px solid;
                color: black;
                font-size: 12px;
                width: 20px;
                text-align: center;
                line-height: 30px;
            }
        }
        .offer{
            margin-left: 60px;
            font-size: 14px;

        }
        .integ{
            margin-left: 100px;
            font-size: 14px;
        }
        .tp{
             margin-left: 90px;
            font-size: 14px;
            color: #D00A17;
        }
        .delete{
             margin-left: 80px;
            font-size: 14px;
        
        }
    }
    .all{
        height: 100px;
        background-color: #fff;
        text-align: right;
        padding-right: 50px;
       span:nth-of-type(1){
           display: block;
            color: red;
            font-size: 14px;

       }
       span:nth-of-type(2){
            color: red; 
           display: block;

       }
    }
}
</style>>