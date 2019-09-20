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
            carts:[]
        }
    },
    methods: {
        
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
    color: #D00A17;
    margin: 10px auto;
    font-weight: 500;
    span{
        margin-left:3px;
    }
}
.cart-box{
    width: 960px;
    min-height: 200px;
    margin: 0 auto;
    background-color: #EFEFEF;
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
}
</style>>