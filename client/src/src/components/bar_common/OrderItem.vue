<template>
  <div class="item">
    <div class="item-body">
      <el-row>
        <el-col :span="2">
          <div class="grid-content">
            <img class="item-img" :src="config.serveIP+config.port+item.proInfo[0].img" alt />
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">{{item.proInfo[0].proName}}</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content">{{item.proInfo[0].intro}}</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">
            <span class="oldP">{{'￥'+item.proInfo[0].oldPrice}}</span>
            <br />
            <span class="newP">￥{{item.proInfo[0].newPrice}}</span>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">数量:{{item.orcount}}</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">尺寸:{{item.mLength}}</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-button type="danger btn" @click="deleteItem" plain>完成订单</el-button>
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
    return { config: null, user: null };
  },
  computed: {},
  methods: {
    deleteItem() {
      let check = this.checkChange();
      if (check) {
        net
          .post("/deleteOrder", { id: this.item.id, user: this.user })
          .then(res => {
            if (res.data.code == 1) {
              this.$message({
                type: "success",
                message: "删除成功",
                offset: 81
              });
              net.get("/getOrder", { user: this.user }).then(data => {
                  this.$emit("changeData", data.data);
              });
            }
          });
      } else {
        this.$confirm("此操作将永久删除该订单, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            net
              .post("/deleteOrder", { id: this.item.id, user: this.user })
              .then(res => {
                if (res.data.code == 1) {
                  this.$message({
                    type: "success",
                    message: "删除成功",
                    offset: 81
                  });
                  net.get("/getOrder", { user: this.user }).then(data => {
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
      }
    },
    checkChange() {
      return this.$store.state.delOrder;
    }
  },
  created() {
    this.config = config;
    this.user = JSON.parse(localStorage.getItem("sucflag")).userName;
    // window.console.log(this.item);
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