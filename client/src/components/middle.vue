<template>
  <div>
    <div class="first_pic">
      <router-link to>
        <img  @error="zhan"
          src="http://cdn.lzljmall.com/public/images/0d/3b/7a/baf393c3bce0c2fade7c0602d82ae93a3873da02.jpg?1562811210#w"
        />
      </router-link>
    </div>
    <div class="second_pic">
      <div class="num">
        <a href="#">
          <img  @error="zhan"
            src="http://cdn.lzljmall.com/public/images/e2/75/83/41889650341cc9cc40dea6e8fc3b78d89f326cbd.jpg?1530255354#w"
          />
        </a>
        <div class="appear">
          <div class="info">
            <h4>口粮酒</h4>
            <p>爆款推荐</p>
          </div>
        </div>
      </div>
      <div class="num">
        <a href="#">
          <img  @error="zhan"
            src="http://cdn.lzljmall.com/public/images/7a/12/d0/45825dd32213f021b6afe598d03c5542143da735.jpg?1530256787#w"
          />
        </a>
        <div class="appear">
          <div class="info">
            <h4>国窖1573</h4>
            <p>高端定制酒</p>
          </div>
        </div>
      </div>
      <div class="num">
        <a href="#">
          <img  @error="zhan"
            src="http://cdn.lzljmall.com/public/images/8a/76/e7/a5b366120e7b3a56b3922f9c9418411135f84641.jpg?1530255500#w"
          />
        </a>
        <div class="appear">
          <div class="info">
            <h4>国窖1573</h4>
            <p>国窖单瓶</p>
          </div>
        </div>
      </div>
      <div class="num">
        <a href="#">
          <img  @error="zhan"
            src="http://cdn.lzljmall.com/public/images/67/ad/b8/aad5b39aa71bbffac8127ca4cb8c2bd21ec0a846.jpg?1530255373#w"
          />
        </a>
        <div class="appear">
          <div class="info">
            <h4>国窖1573·瓶贮年份酒</h4>
            <p>时间为品味加冕</p>
          </div>
        </div>
      </div>
    </div>
    <div class="third_pic">
      <router-link to>
        <img  @error="zhan"
          src="http://cdn.lzljmall.com/public/images/0f/2a/2d/3bbccb069bc7e6a4619e69e681a932df63964708.jpg?1553052589#w"
        />
      </router-link>
    </div>
    <div class="fourth_pic">
      <router-link to>
        <img  @error="zhan"
          src="http://cdn.lzljmall.com/public/images/55/55/60/7d1e9d114945df9d189cf678db3e904ad579ef18.jpg?1562809486#w"
        />
      </router-link>
    </div>
    <div class="fifth_pic">
      <router-link to>
        <img  @error="zhan"
          src="http://cdn.lzljmall.com/public/images/4b/6e/16/4db6022ed3faec7e51baae8bb6587b3b0df39460.jpg?1563154717#w"
        />
      </router-link>
    </div>
    <div class="sixth_pic">
      <router-link to>
        <img  @error="zhan"
          src="http://cdn.lzljmall.com/public/images/78/32/01/262376f18f5653c2929042c2e6b8d33c76c9ef47.jpg?1553052631#w"
        />
      </router-link>
    </div>
  </div>
</template>
<script>
import imgs from "../static/img/1.jpg"
export default {
  data() {
    return {};
  }, methods: {
    zhan(e) {
      e.target.src=imgs;
    }
  }
};
</script>
<style scoped>
.first_pic {
  width: 100%;
  height: 427px;
  overflow: hidden;
}
.first_pic img {
  width: 1440px;
  height: 427px;
}
.second_pic {
  width: 100%;
  height: 235px;
  /* background: lightsalmon; */
  display: flex;
  position: relative;
  overflow: hidden;
}
.second_pic img {
  width: 356px;
  height: 235px;
}
.appear {
  width: 356px;
  height: 235px;
  background: rgba(0, 0, 0, 0.3);
  display: none;
  position: absolute;
  top: 0;
}
.second_pic .num:hover .appear {
  display: block;
}
.info {
  width: 356px;
  height: 235px;
  color: #fff;
  display: none;
  position: absolute;
  top: 0;
}
.info:hover h4 {
  margin: 0 auto;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.5px;
  opacity: 1;
  padding-top: 10%;
  padding-bottom: 0;
  transition: transform 0.35s;
  transform: translate3d(0, 15px, 0);
}
.info:hover p {
  margin: 0 auto;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.5px;
  opacity: 1;
  padding-top: 10%;
  padding-bottom: 0;
  transition: transform 0.35s;
  transform: translate3d(0, -15px, 0);
}
.second_pic .num:hover .info {
  display: block;
}
.third_pic {
  width: 100%;
  height: 1143px;
  position: relative;
  overflow: hidden;
}
.third_pic img {
  width: 1920px;
  height: 1143px;
  position: absolute;
  right: -19%;
}
.fourth_pic {
  width: 100%;
  height: 918px;
  position: relative;
  overflow: hidden;
}
.fourth_pic img {
  width: 1920px;
  height: 918px;
  position: absolute;
  right: -19%;
}
.fifth_pic {
  width: 100%;
  height: 1121px;
  position: relative;
  overflow: hidden;
}
.fifth_pic img {
  width: 1920px;
  height: 1121px;
  position: absolute;
  right: -19%;
}
.sixth_pic {
  width: 100%;
  height: 1210px;
  position: relative;
  overflow: hidden;
}
.sixth_pic img {
  width: 1920px;
  height: 1210px;
  position: absolute;
  right: -19%;
}
</style>