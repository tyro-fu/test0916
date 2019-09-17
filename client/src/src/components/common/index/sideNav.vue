<template>
  <div class="sideNav">
    <div class="sidebar-header">
      <div class="avatar">
        <img class="rounded-circle" src="../images/avatar-1.jpg" alt />
      </div>
      <div class="title">
        <h4 class="h4">Mark Stephen</h4>
        <p>Web Designer</p>
      </div>
    </div>
    <span class="heading">Main</span>
    <ul class="side-list">
      <li
        :class="[active===index?'active':'']"
        v-for="(item,index) in myList"
        :key="item.id"
        @click="changeActive(index)"
      >
        <router-link :to="'/index/'+item.src">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "sideNav",
  data() {
    return {
      myList: [
        { id: 1, name: "我的商品", src: "myProduct" },
        { id: 2, name: "我的订单", src: "myOrder" },
        { id: 3, name: "商品上传", src: "productUpLoad" }
      ]
    };
  },
  computed: {
      active(){
          return this.$store.state.activeIndex
      }
  },
  methods: {
    changeActive(index) {
     this.$store.commit("modifyActive",index)
    }
  },created() {
  },
};
</script>
<style scoped>
.sideNav {
  position: fixed;
  top: 0;
  height: 100%;
  box-sizing: border-box;
  padding-top: 81px;
  background: #fff;
  min-width: 250px;
  max-width: 250px;
  color: #686a76;
  z-index: 999;
  text-align: left;
}
.sidebar-header {
  display: flex;
  align-items: center;
  padding: 30px 15px;
}
.avatar {
  width: 55px;
  height: 55px;
}
.rounded-circle {
  height: 100%;
  width: 100%;
  border-radius: 50% !important;
}
.title {
  padding-left: 8px;
}
.h4 {
  margin: 0;
  padding: 0;
  font-size: 1.1rem;
  color: #333;
}
.title p {
  font-size: 0.9em;
  font-weight: 200;
  margin: 0;
  padding: 0;
  color: #aaa;
}
span.heading {
  text-transform: uppercase;
  font-weight: 400;
  margin-left: 20px;
  color: #ccc;
  font-size: 0.8em;
}
.side-list {
  padding: 15px 0;
  list-style: none;
}
.active > a {
  background: #796aee;
  color: #fff;
  border-left: 4px solid #3b25e6;
}
a {
  padding: 10px 15px;
  border-left: 3px solid transparent;
  text-decoration: none;
  display: block;
  font-weight: 300;
}
a:hover {
  background: #796aee;
  color: #fff;
  border-left: 4px solid #3b25e6;
}
</style>