<template>
  <div class="order" v-loading="loading">
    <div v-if="show">
      <orderItem :item="item" v-for="(item,index) in orderList" :key="index" @changeData="getData"></orderItem>
    </div>
    <div v-else>
      <h4>你暂时还没有订单哦</h4>
    </div>
    <el-checkbox class="check" v-model="checked" @change="deltrue">取消提示</el-checkbox>
  </div>
</template>
<script>
import net from "../../../Utils/net";
import OrderItem from "../../bar_common/OrderItem";
export default {
  name: "myOrder",
  components: {
    orderItem: OrderItem
  },
  data() {
    return {
      orderList: [],
      loading: false,
      checked: false,
      show: false
    };
  },
  methods: {
    getData(data) {
      window.console.log(data)
      if (data.msg.code == 1) {
        this.show=true;
        this.orderList = data.data;
      }else{
        this.show=false;
      }
    },
    deltrue() {
      this.$store.commit("checkChange", this.checked);
      // window.console.log(this.checked);
    }
  },
  beforeCreate() {
    this.$store.commit("modifyActive", 1);
    let user = JSON.parse(localStorage.getItem("sucflag")).userName;
    net.get("/getOrder", { user: user }).then(res => {
      window.console.log("res", res.data);
      if (res.data.msg.code == 1) {
        this.show = true;
        this.orderList = res.data.data;
        // this.loading = false;
      } else {
        this.show = false;
      }
    });
  }
};
</script>
<style scoped>
.order {
  position: relative;
  width: 100%;
  min-height: 4.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.check {
  position: absolute;
  left: 8.125rem;
  bottom: -2.1875rem;
}
</style>