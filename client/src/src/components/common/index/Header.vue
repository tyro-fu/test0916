<template>
  <div class="headers">
    <div class="navbar">
      <div class="nav-container">
        <div class="nav-img">
          <img src="../images/logo.png" alt />
        </div>
        <ul class="nav-msg">
          <li>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <el-badge :value="this.cou" class="item">
                  <el-popover
                    placement="bottom"
                    title="订单消息提示"
                    width="200"
                    trigger="click"
                    :content="Number(this.cou)?('你有新的'+this.cou+'条订单'):'暂时还没有新的消息呢'"
                  >
                    <el-button slot="reference" icon="el-icon-bell" class="tip" size="small"></el-button>
                  </el-popover>
                </el-badge>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="clearfix">
                  评论
                  <el-badge class="mark" />
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <a class="nav-link" href="javascript:void(0)" @click="logout" to>
              Logout
              <i class="el-icon-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// import net from "../../../Utils/net";
export default {
  name: "headers",
  data() {
    return {
      cou: 0,
    };
  },
  methods: {
    logout() {
      window.console.log("a");
      localStorage.setItem(
        "sucflag",
        JSON.stringify({ userName: "", sucflag: 0 })
      );
      this.$router.push("/login");
    }
  },
  created() {
  
    // net.get("/orderCok", { user: JSON.parse(localStorage.getItem("sucflag")).userName }).then(res => {
    //   // window.console.log("fir", localStorage.getItem("myCount"));
    //   if (localStorage.getItem("myCount") != undefined) {
    //     if (localStorage.getItem("myCount") == res.data) {
    //       localStorage.setItem("myCount", 0);
    //       // window.console.log(localStorage.getItem("myCount"), res.data);
    //     } else {
    //       localStorage.setItem(
    //         "myCount",
    //         Math.abs(Number(localStorage.getItem("myCount")) - res.data)
    //       );
    //       // window.console.log(localStorage.getItem("myCount"));
    //     }
    //   } else {
    //     //设置键isVisit的值是1，有效的时间是60秒
    //     localStorage.setItem("myCount", res.data);
    //   }
    //   // window.console.log("b", localStorage.getItem("myCount"));
    //   this.cou = localStorage.getItem("myCount");
    // });
  }
};
</script>
<style scoped>
.headers {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
}
.navbar {
  background: #2f333e;
  padding-top: 10px;
  color: #fff;
  position: relative;
  border-radius: 0;
  -webkit-box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  z-index: 10;
  padding-left: 0;
  padding-right: 0;
}
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.3125rem 1.875rem;
  box-sizing: border-box;
}
.nav-img {
  width: 207px;
  height: 27px;
}
.nav-msg {
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav-msg li {
  float: left;
}
.tip {
  background-color: #2f333e;
  color: #fff;
  border: none;
  font-size: 1.25rem;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.nav-link {
  display: inline-block;
  padding: 1rem 1rem;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-decoration: none;
}
.clearfix {
  display: none !important;
}
</style>