<template>
  <div class="item">
    <div class="item-body">
      <el-row>
        <el-col :span="2">
          <div class="grid-content">
            <img class="item-img" :src="config.serveIP+config.port+item.img" alt />
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">{{item.proName}}</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content">{{item.intro}}</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">
            <span class="oldP">{{'￥'+item.oldPrice}}</span>
            <br />
            <span class="newP">￥{{item.newPrice}}</span>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content"><p>库存:</p>{{item.stock}}</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content"><p>尺寸:</p>{{item.mlength}}</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <router-link :to="'/index/productUpLoad?item='+JSON.stringify(item)">
              <el-button type="primary btn" plain @click="changeActive">modify</el-button>
            </router-link>
            <br />
            <el-button type="danger btn" @click="deleteItem" plain>delete</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import config from "../../Utils/config";
import net from "../../Utils/net";
export default {
  name: "productList",
  props: ["item"],
  data() {
    return { config: null,user:"" };
  },
  methods: {
    deleteItem() {
      this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          net.get("/deleteItem", { id: this.item.id }).then(res => {
            if (res.statusText == "OK") {
              net.get("/getAllGoData",{user:this.user}).then(data => {
                this.$emit("changeData", data.data);
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
            offset: 81
          });
        });
    },
    changeActive() {
      this.$store.commit("modifyActive", 2);
    }
  },
  created() {
    this.config = config;
    this.user=JSON.parse(localStorage.getItem("sucflag")).userName
  }
};
</script>
<style scoped>
.item-body {
  width: 62.375rem;
  padding: 0.625rem 1.25rem;
  background: #fcfcfc;
  border-bottom: 1px solid #e7e7e7;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  box-sizing: border-box;
  padding-right: 0.625rem;
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.item-img {
  max-height: 80px;
  max-width: 80px;
}

a {
  display: block;
  max-height: 40px;
  overflow: hidden;
  color: #3c3c3c;
  font-size: 12px;
  text-decoration: none;
  text-overflow: ellipsis;
}
a:hover {
  color: #f60;
  text-decoration: underline;
}
.oldP {
  color: #9c9c9c;
  font-weight: 700;
  text-decoration: line-through;
}
.newP {
  color: #f40;
  font-weight: 700;
}
.btn {
  margin-bottom: 0.625rem;
  width: 6.75rem;
}
</style>