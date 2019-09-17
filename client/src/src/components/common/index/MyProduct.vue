<template>
  <div class="myProduct" v-loading="loading">
    <div v-if="flag">
      <poructList
        @adloading="adloading"
        @changeData="getData"
        :item="item"
        v-for="(item,index) in dataList"
        :key="index"
      ></poructList>
    </div>
    <div v-else>
      <h4>你暂时还没有商品哦，快去上传吧！</h4>
    </div>
  </div>
</template>
<script>
import net from "../../../Utils/net";
import poructList from "../../bar_common/ProductList";
export default {
  name: "myProduct",
  components: {
    poructList
  },
  data() {
    return {
      user: "",
      loading: false,
      dataList: [],
      flag:false
    };
  },
  component: {
    poructList
  },
  methods: {
    getData(value) {
      // window.console.log("dada", value);
      this.dataList = value;
    },
    adloading() {
      this.loading = true;
    }
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("sucflag")).userName;

    net.get("/getAllGoData", { user: this.user }).then(res => {
      // window.console.log(res);
      if(res.data.length===0)
      {
        this.flag=false;
      }else{
        this.flag=true;
        this.dataList = res.data;
      }
      
    });
  }
};
</script>
<style scoped>
.myProduct {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>