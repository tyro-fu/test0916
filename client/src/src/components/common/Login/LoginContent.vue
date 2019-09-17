<template>
  <div class="login-content">
    <div class="login-form">
      <div class="login-side-reach">
        <div class="fullwidth margin-bottom-40">
          <h2>Reach Us</h2>
          <hr class="break-small" />
          <p>Lorem ipsum dolor sit elit.</p>
        </div>
        <div class="fullwidth margin-bottom-50">
          <div class="float-left">
            <i class="fa fa-home text-white background-primary el-icon-s-home"></i>
          </div>
          <div class="margin-left-100">
            <h4 class="text-primary">Address</h4>
            <p>
              Xyz Street 7
              <br />P.O.Box: 12345
            </p>
          </div>
        </div>
        <div class="fullwidth margin-bottom-50">
          <div class="float-left">
            <i class="fa fa-phone background-primary el-icon-phone"></i>
          </div>
          <div class="margin-left-100">
            <h4 class="text-primary">Calls</h4>
            <p>
              0000 1234 567 89
              <br />0000 1234 567 89
            </p>
          </div>
        </div>
        <div class="fullwidth margin-m-bottom-60">
          <div class="float-left">
            <i class="fa fa-envelope text-white background-primary el-icon-s-comment"></i>
          </div>
          <div class="margin-left-100">
            <h4 class="text-primary">Emails</h4>
            <p>
              xyz@yourwebsite.com
              <br />xyz@yourwebsite.com
            </p>
          </div>
        </div>
      </div>
      <div class="padding-m-s-left-50">
        <div class="fullwidth margin-bottom-40">
          <h2>Welcome to login</h2>
          <hr class="break-small" />
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
        </div>
        <div class="input-box">
          <el-input
            class="input-text"
            prefix-icon="el-icon-user-solid"
            v-model="userName"
            placeholder="请输入账号"
          ></el-input>
        </div>
        <div class="input-box">
          <el-input
            class="input-text"
            prefix-icon="el-icon-lock"
            v-model="password"
            show-password
            placeholder="请输入密码"
          ></el-input>
        </div>
        <div class="submit-box">
          <el-button class="login-btn" @click="loginCheck">登录</el-button>
          <span class="reg">
            No account?to
            <router-link class="register-link" to="/register">register</router-link>
          </span>
        </div>
      </div>
    </div>
    <Lbottom></Lbottom>
  </div>
</template>
<script>
import net from "../../../Utils/net";
import Lbottom from "./Lbottom";
export default {
  name: "loginContent",
  components: { Lbottom },
  data() {
    return { userName: "", password: "" };
  },
  methods: {
    messAlert(msg, type) {
      this.$message({
        message: `${msg}`,
        type: type,
        offset: 100
      });
    },
    loginCheck() {
     
      window.console.log(this.userName);
      if (this.userName == "") {
        this.messAlert("用户名不能是空的哦，请输入", "error");
      } else if (this.userName.length < 4) {
        this.messAlert("用户名长度不能小于4个字符，请重新输入", "error");
      } else if (this.password == "") {
        this.messAlert("密码不能是空的哦，请输入", "error");
      } else {
        net
          .post("/login", { userName: this.userName, password: this.password })
          .then(res => {
            if (res.data.code == 1) {
              //登录成功
              // 设置用户成功登录的标志，作用：""，这个验证本应在服务器中进行 由于。。。。没有采用cookie，所以使用。。
              localStorage.setItem("sucflag", JSON.stringify({userName:this.userName,sucflag:1}));
              this.$router.push("/index");
            } else if (res.data.code == 2) {
              this.messAlert("密码错了哦，请重新输入", "error");
            } else {
              this.messAlert("用户不存在，请重新输入", "error");
            }
          });
      }
    }
  }
};
</script>
<style scoped>
.login-content {
  width: 100%;
  box-sizing: border-box;
  padding: 3.5625rem 4.5625rem 0;
  /* background-color: antiquewhite; */
  /* padding: 6.5rem 1.25rem; */
}
.login-form {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-side-reach {
  overflow: hidden;
  padding-top: 95px;
  margin-bottom: 30px;
  width: 33.3333%;
}
.fullwidth {
  text-align: left;
}
.margin-bottom-40 {
  margin-bottom: 40px;
}
hr.break-small {
  box-sizing: content-box;
  background: #cf9963;
  border: 0;
  display: block;
  height: 3px;
  margin: 1em 0 1em 0;
  width: 60px;
}
.float-left {
  float: left !important;
}
.background-primary {
  display: block;
  background: #1d191a;
  color: #fff;
  font-size: 2em;
  height: 82px;
  line-height: 80px;
  margin-bottom: 0.625rem;
  text-align: center;
  width: 82px;
}
.margin-left-100 {
  margin-left: 100px;
}
.margin-bottom-50 {
  margin-bottom: 50px;
}
.margin-bottom-60 {
  margin-bottom: 60px;
}
.text-primary {
  color: #cf9963 !important;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #1d191a;
  font-weight: normal;
  margin: 0 0 6px 0;
  font-family: "Raleway-Bold";
  text-transform: capitalize;
}
.padding-m-s-left-50 {
  padding-top: 50px;
  margin-left: 50px;
}
p {
  margin: 0 0 12px 0;
}
.input-box {
  width: 590px;
  padding: 20px 0;
}
.submit-box {
  /* padding: 10px 0; */
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
  align-content: flex-start;
}
.login-btn {
  width: 130px;
}
.register-link:hover {
  color: red;
}
.reg {
  display: inline-block;
  text-align: center;
  line-height: 37px;
  padding-left: 70px;
}
</style>