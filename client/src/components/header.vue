<template>
  <div>
    <div class="top">
      <div class="right">
        <div class="login">
          <i class="icon iconfont icon-denglu"></i>
          <router-link to="/login" class="text">登录</router-link>
          <div>|</div>
          <router-link to="/sign" class="text">注册</router-link>
        </div>
        <div class="cart">
          <i class="icon iconfont icon-gouwuche"></i>
<<<<<<< HEAD
          <router-link to="/cart" class="text">购物车</router-link>
=======
          <router-link to="Cart" class="text">购物车</router-link>
>>>>>>> a0212c051eb32fdeb63a11cbe171bf98f58c1e4b
        </div>
       
      </div>
    </div>
    <div class="headerBox">
      <div class="middle">
        <div class="pic">
          <img
            alt="泸州老窖"
            src="http://cdn.lzljmall.com/public/images/02/90/bd/c53e6e3a47f7ff0aff88c219aa33be071cc7afca.jpg?1495770154#w"
          />
        </div>
<<<<<<< HEAD
        <div style="display:flex">
          <input type="text" v-model="myInput" class="search" />
          <el-button class="btn" @click="submit" type="primary">搜索</el-button>
=======
        <div style="display:flex;position:relative">
          <input type="text" @blur="handleBlur" v-model="myInput" class="search" />
          <el-button class="btn" @click="submit" type="primary">搜索</el-button>
          <el-card class="box-card list" v-show="show">
            <div @click="handleHref(item)"
              v-for="(item,index) in data"
              :key="index"
              class="text item"
            >{{item.name}}</div>
          </el-card>
>>>>>>> a0212c051eb32fdeb63a11cbe171bf98f58c1e4b
        </div>

        <div class="title">
          <ul>
            <li>
              <router-link to="/middle" class="title_t">首页</router-link>
            </li>
            <li v-for="(item,index) in title" :key="index">
<<<<<<< HEAD
              <router-link :to="{path:'/classify',query:{type:item}}" class="title_t">{{item}}</router-link>
=======
              <router-link :to="'/classify/'+item" class="title_t">{{item}}</router-link>
>>>>>>> a0212c051eb32fdeb63a11cbe171bf98f58c1e4b
            </li>
          </ul>
        </div>
      </div>
    </div>
<<<<<<< HEAD
    <div class="nav" :class="navBarFixed == true ? 'navBarWrap' :''">
=======
    <div class="nav" :class="{'is_fixed' : isFixed}">
>>>>>>> a0212c051eb32fdeb63a11cbe171bf98f58c1e4b
      <router-link to="/page1" class="navpic">
        <img
          src="http://cdn.lzljmall.com/public/images/90/b3/c4/d395e3ccba05d5ab6f67a6b90c3164d735e86f79.png?1539572088#h"
        />
        <span>国窖1573</span>
      </router-link>
      <router-link to="/page2" class="navpic">
        <img
          src="http://cdn.lzljmall.com/public/images/f4/37/1f/75d33f99e0bebaaa0c63c60269e763dcf0b5707d.png?1458934892#h"
        />
        <span>窖龄</span>
      </router-link>
      <router-link to="/page3" class="navpic">
        <img
          src="http://cdn.lzljmall.com/public/images/f5/b7/e3/6693e808118e5f3ae83bb16e41948ab91cb63841.png?1458934812#h"
        />
        <span>特曲</span>
      </router-link>
      <router-link to="/page4" class="navpic">
        <img
          src="http://cdn.lzljmall.com/public/images/0e/e0/f2/d127d84183af98b8344401f33f3fb6b55f6444aa.png?1458934938#h"
        />
        <span>头曲</span>
      </router-link>
      <router-link to="/page5" class="navpic">
        <img
          src="http://cdn.lzljmall.com/public/images/6e/4d/a0/26fecc958b66d55ad5726bde820d53ed72f551e8.png?1458935023#h"
        />
        <span>高端定制</span>
      </router-link>
      <router-link to="/page6" class="navpic">
        <img
          src="http://cdn.lzljmall.com/public/images/75/0c/4d/abd1db8a0ef2a68cde31b3d17f3519a493ec1f74.png?1524555122#h"
        />
        <span>百调</span>
      </router-link>
<<<<<<< HEAD
      <router-link to='page7' class="navpic">
=======
      <router-link to="/page7" class="navpic">
>>>>>>> a0212c051eb32fdeb63a11cbe171bf98f58c1e4b
        <img
          src="http://cdn.lzljmall.com/public/images/e3/4f/db/97ee6f43f13f526703147b1e1329966e0a894aa8.png?1527849399#h"
        />
        <span>热销推荐</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import net from "../utils/net";
export default {
  data() {
    return {
      myInput: "",
<<<<<<< HEAD
      navBarFixed: false,
      title: ["国窖1573", "窖龄酒", "特曲", "老窖藏品", "桃花醉", "所有商品"]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.watchScroll);
  },
  methods: {
    submit() {
      net.get("/source", { name: this.myInput }).then(res => {
        window.console.log(res);
      });
    },
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
      //  当滚动超过 90 时，实现吸顶效果
      if (scrollTop > 280) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
=======
      isFixed: false,
      offsetTop: 0,
      title: ["国窖1573", "窖龄酒", "特曲", "老窖藏品", "桃花醉", "所有商品"],
      data: [],
      show: false,
      isSer: false
    };
  },
  methods: {
    handleBlur() {
      if (this.isSer) {
        setTimeout(() => {
          this.show = false;
          this.isSer = false;
        }, 500);
      }
    },
    submit() {
      net.get("/source", { name: this.myInput }).then(res => {
        this.data = res.data;
        if (this.data.length !== 0) {
          this.show = true;
          this.isSer = true;
        }
      });
    },
    handleHref(e) {
      this.$store.commit("setoPro",e);
      this.$router.push({path:"/detail"})
      // window.console.log(e)
>>>>>>> a0212c051eb32fdeb63a11cbe171bf98f58c1e4b
    }
  }
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 40px;
  background: black;
}
.right {
  width: 240px;
  float: right;
  display: flex;
  /* color: #fff;
  font-size: 14px;
  font-weight: bold; */
  margin-right: 100px;
  line-height: 40px;
}
.login {
  width: 108px;
  /* background: lavender; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 30px;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
.cart {
  width: 70px;
  display: flex;
  /* background: lavender; */
  justify-content: space-around;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
.text {
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
.right .text:hover {
  opacity: 0.65;
}
.headerBox {
  height: 200px;
  padding: 20px 0;
  background: #fff;
}
.middle {
  width: 800px;
  height: 160px;
  /* background: pink; */
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.pic > img {
  width: 200px;
  height: 98px;
}
.search {
  font-size: 14px;
  height: 32px;
  width: 358px;
  border: 2px solid #d00a00;
  border-radius: 3px;
}
.search:focus {
  outline: none !important;
}
.btn {
  background: #d00a00;
  border: #d00a00;
}
.el-button--primary:hover {
  background: #d00a00;
  border: #d00a00;
}
.icon-sousuo1 {
  position: absolute;
  width: 15px;
  height: 15px;
}
.title {
  width: 800px;
  height: 60px;
  /* background: lightblue; */
  position: absolute;
  margin-top: 90px;
}
.title ul {
  width: 800px;
  height: 120px;
  display: flex;
  justify-content: space-around;
}
.title ul li {
  list-style: none;
}
.title ul li .title_t {
  text-decoration: none;
  color: #222;
  font-weight: 400;
  font-size: 20px;
  font-family: "Microsoft YaHei", Tahoma, Helvetica, Arial, STXihei, SimSun,
    sans-serif;
}
.title ul li::after {
  content: "/";
  color: #b5b5b5;
  padding-left: 10px;
  font-size: 20px;
  font-weight: bold;
}
.nav {
  width: 100%;
  height: 113px;
  background: #fff;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.navpic {
  text-decoration: none;
}
.nav img {
  width: 80px;
  height: 80px;
  margin: 0 auto;
}
.nav .navpic:hover img {
  transform: scale(1.1);
  cursor: pointer;
  transition: all 0.8s;
}
.nav .navpic {
  width: 203px;
  text-align: center;
  color: #000;
  font-size: 22px;
  border-right: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
}
.nav .navpic span {
  margin-top: 5px;
}
<<<<<<< HEAD

.navBarWrap {
  position: fixed;
  top: 0;
  z-index: 999;
  background: rgba(255, 255, 255, 0.5);
=======
.list {
  position: absolute;
  top: 38px;
  z-index: 999;
}
.item {
  display: flex;
  justify-content: flex-start;
  color: #000 !important;
}
.item:hover {
  background-color: #b5b5b5;
>>>>>>> a0212c051eb32fdeb63a11cbe171bf98f58c1e4b
}
</style>