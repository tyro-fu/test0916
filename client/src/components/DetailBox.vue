<template>
  <div class="wrap">
    <el-row>
      <el-col :span="10">
        <div class="block">
          <el-carousel>
            <el-carousel-item v-for="item in oPro.img" :key="item">
              <img :src="item" alt class="imgs" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="wrap-text">
          <div class="product-titles">
            <h2>{{oPro.name}}</h2>
          </div>
          <div class="product-concerns">
            <div>

           <el-row>
                <el-col :span="4" class="center label">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格:</el-col>
                <el-col :span="20" class="label red-color">￥{{oPro.prices[index]}}</el-col>
              </el-row>
            </div>
            <div>
              <el-row>
                <el-col :span="4" class="center label">商品货号:</el-col>
                <el-col :span="20" class="label">{{oPro.kind[index]}}</el-col>
              </el-row>
            </div>
            <div>
              <el-row>
                <el-col :span="4" class="center label">可获积分:</el-col>
                <el-col :span="20" class="label red">0</el-col>
              </el-row>
            </div>
            <div>
              <el-row>
                <el-col :span="4" class="center label">消费保障:</el-col>
                <el-col
                  :span="20"
                  class="label"
                >官方商城&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正品保障&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7 x 12 小时客服</el-col>
              </el-row>
            </div>
          </div>
          <div class="product-buy">
            <div>
              <el-row>
                <el-col :span="4" class="center label">净含量：</el-col>
                <el-col :span="20" class="label">
                  <el-button
                    v-for="(item,index) in oPro.kind"
                    :key="index"
                    @click="handleChange(index,item)"
                  >{{item}}</el-button>
                </el-col>
              </el-row>
            </div>
            <div>
              <el-row>
                <el-col :span="4" class="center label">数量：</el-col>
                <el-col :span="20" class="label">
                  <el-input-number
                    v-model="num1"
                    @change="handleChangeNum"
                    :min="1"
                    :max="10"
                    label="描述文字"
                  ></el-input-number>
                </el-col>
              </el-row>
            </div>
            <div>
              <el-row>
                <el-col :span="8" class="center label">
                  <el-button type="danger" plain @click="handleBuy">立即购买</el-button>
                </el-col>
                <el-col :span="8" class="center label">
                  <el-button type="default" icon="el-icon-sold-out" @click="handleCar" plain>加入购物车</el-button>
                </el-col>
              </el-row>
            </div>
            <div class="share-title">
              <el-row>
                <el-col :span="4" class="center label">
                  <b>分享到：</b>
                </el-col>
                <el-col
                  :span="20"
                  class="label"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 微信 &nbsp;&nbsp;新浪 &nbsp;&nbsp;QQ空间</el-col>
              </el-row>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import net from "../utils/net";
export default {
  name: "detailBox",
  data() {
    return {
      num1: 0,
      oPro: this.$store.state.oPro,
      index: 0,
      load: false,
      oCar: {}
    };
  },
  methods: {
    handleCar() {
      this.$store.commit("setCart",this.oCar);
      // this.$route.push("")
    },
    handleBuy() {},
    handleChangeNum(e) {
      this.oCar.num = e;
    },
    handleChange(index, item) {
      this.index = index;
      this.oCar.kind = item;
      this.oCar.proCode=this.oPro.proCode[index];
      this.oCar.price=this.oPro.prices[index];
      window.console.log(this.oCar)
    }
  },
  beforeMount() {
    // this.oPro = {
    //   name: "泸州老窖 特曲酒纪念版 52度500ml 浓香型白酒高度 泸州老窖官方商城",
    //   type: 4,
    //   price: 478.0,
    //   img:
    //     "http://cdn.lzljmall.com/public/images/ea/f7/fc/7c090a6cb6373161782f4fce4e22a9e617136358.jpg?1467625690#h=http://cdn.lzljmall.com/public/images/33/0c/f6/4ad919e54fe2d1ffa9b9377256c7576fd733909a.jpg?1493688891#h",
    //   detail: [
    //     { proCode: "1313=123=1233", kind: "500=600=700", prices: "123=134=345" }
    //   ]
    // };
    window.console.log(this.oPro)

    if (this.oPro != null) {
      this.oPro.img = this.oPro.img.split("==");
      this.oPro.proCode = this.oPro.detail[0].proCode.split("==");
      this.oPro.kind = this.oPro.detail[0].kind.split("==");
      this.oPro.prices = this.oPro.detail[0].prices.split("==");

      this.oCar.name = this.oPro.name;
      this.oCar.type = this.oPro.type;
      this.oCar.img = this.oPro.img[0];
      this.oCar.priCode = this.oPro.proCode[0];
      this.oCar.kind = this.oPro.kind[0];
      this.oCar.price = this.oPro.prices[0];
      this.load = true;
      window.console.log(this.oPro);
    }
  }
};
</script>
<style scoped>
.wrap {
  width: 80%;
  height: 627px;
}
.grid-conten {
  height: 100%;
  width: 100%;
}
.el-row {
  height: 100%;
  margin-bottom: 20px;
  background-color: #fff;
}
.el-col {
  height: 100%;
  border-radius: 4px;
}
.imgC {
  width: 100%;
  height: 100%;
}
.block {
  width: 100%;
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  height: 195% !important;
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  height: 195% !important;
  background-color: #d3dce6;
}
.el-carousel {
  height: 100%;
  width: 100;
}
.wrap-text {
  height: 100%;
}
.product-titles {
  /* height: 71px; */
  box-sizing: border-box;
  margin: 30px 30px 0;
  padding-bottom: 10px;
  line-height: 1.8;
  text-align: left;
}
.product-titles h2 {
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: #666;
  line-height: 26px !important;
  max-height: 52px;
  overflow: if;
}
.product-concerns {
  height: 217px;
  padding: 20px 30px;
  box-sizing: border-box;
  margin-bottom: 0;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
}
.product-buy {
  margin-top: 0;
  padding: 20px 30px;
  box-sizing: border-box;
  background: none;
  border: none;
}
.center {
  text-align: center;
}
.label {
  padding: 0;
  line-height: 30px !important;
  font-weight: normal;
  font-size: 14px;
  color: #666;
  text-align: left;
}
.red-color {
  font-size: 24px;
  color: red;
}
.red {
  color: red;
}
.share-title {
  font-size: 12px;
  font-family: "Microsoft YaHei", Tahoma, Helvetica, Arial, STXihei, SimSun,
    sans-serif;
  color: #333;
}
.imgs {
  width: 100%;
  height: 100%;
}
</style>