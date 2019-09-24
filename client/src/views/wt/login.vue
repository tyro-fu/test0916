<template>
  <div>
    <div class="topBox">
      <LoginAndSign></LoginAndSign>

      <div class="passportMain">
        <div class="smallpage">
          <div>
            <img
              alt
              src="http://cdn.lzljmall.com/public/images/78/f4/b5/0ef8045929fb78309ebd628c5a7ef5ed1ff271db.jpg?1539238268#w"
            />
          </div>
          <div class="smallpage-R">
            <div class="signtitle">用户登录</div>
            <div class="signinput">
              <div class="loginAndsign">
                <el-form ref="form" :model="form" label-position="left" label-width="60px">
                  <el-input v-model="form.name" placeholder="用户名/邮箱地址/手机号" class="inputBox"></el-input>

                  <el-input v-model="form.pwd" placeholder="填写密码" class="inputBox" show-password></el-input>

                  <el-form-item class="inputBox">
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                    <el-button @click="onRegister">注册</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LoginAndSign from "../../components/loginandsign";
import net from "../../utils/net";
export default {
  components: {
    LoginAndSign
  },
  data() {
    return {
      form: {
        name: "",
        pwd: ""
      }
    };
  },
  methods: {
    onSubmit() {
      net
        .post("/login", {
          name: this.form.name,
          password: this.form.pwd
        })
        .then(res => {
          if (res.data.ob.code===1) {
             this.$router.push("/");
             this.$store.commit('setUesr',res.data.user)
          }
        });
    },
    onRegister() {
      this.$router.push("/sign");
    }
  }
};
</script>
<style>
body {
  background-color: #f8f8f8;
}
.topBox {
  width: 100%;
  height: 30px;
  background-color: #f8f8f8;
}
.top {
  margin: 0 auto;

  width: 960px;
  height: 30px;
}
.topLeft {
  width: 280px;
  height: 30px;
  /* background-color: blueviolet; */
  float: left;
  display: flex;
  font-size: 12px;
  align-items: center;
}

.logintext {
  margin-left: 20px;
  display: flex;
  font-size: 12px;
}
.f1 {
  margin-left: 5px;
  margin-right: 5px;
}
.topright {
  height: 30px;
  /* width: 340px; */
  /* background-color: brown; */
  float: right;
  display: flex;
  font-size: 12px;
  align-items: center;
}
.logoBox {
  height: 130px;
  width: 100%;
  background-color: #fff;
  border-bottom: #ddd;
  box-shadow: 2px 2px 5px #eaeaea;
}
.logo {
  width: 960px;
  height: 130px;
  margin: 0 auto;
}
.passportMain {
  width: 100%;
  height: 568px;
  margin-top: 50px;
  background-color: #f8f8f8;
}
.smallpage {
  width: 960px;
  height: 568px;
  margin: 0 auto;
  /* background-color: aqua; */
  display: flex;
  justify-content: space-around;
}
.smallpage-R {
  width: 340px;
  height: 508px;
  /* background-color: brown; */
}
.signtitle {
  /* margin: 10px 0 0; */
  color: #666;
  font-size: 16px;
  font-weight: bold;
  height: 35px;
}
.signinput {
  width: 340px;
  height: 455px;
  background-color: #ffffff;
  border: 1px solid #e1e1e1;
  padding-top: 10px;
}
.loginAndsign {
  width: 278px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  /* align-items: flex-end; */
}
.inputBox {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>