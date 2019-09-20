<template>
  <div>
<<<<<<< HEAD
   <LoginAndSign></LoginAndSign>
  
=======
    <LoginAndSign></LoginAndSign>
>>>>>>> 2cc69c243bbca66556b7b33beb0cb7b62c2dba69
    <div class="passportMain">
      <div class="section">
        <div class="sectionLeft">
          <div class="signtitle">用户注册</div>
          <div class="signpage">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              class="demo-ruleForm"
              label-position="left"
              label-width="80px"
            >
              <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请填写用户名/邮箱地址/手机号"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password" placeholder="请输入密码" show-password></el-input>
              </el-form-item>
              <!-- <el-form-item label="联系方式" prop="num">
                <el-input v-model="ruleForm.num"></el-input>
              </el-form-item>
              <el-form-item label="地址" prop="address">
                <el-input v-model="ruleForm.address"></el-input>
              </el-form-item>-->
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="sectionRight">
          <div class="sectionRightBox">
            <div class="tologinText">已有会员账号请直接登陆</div>
            <div>
              <button class="tologinBtn" @click="ToLogin">跳转到登录页</button>
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
  methods: {
    submitForm() {
      net
        .post("/register", {
          name: this.ruleForm.name,
          password: this.ruleForm.password
        })
        .then(res => {
          window.console.log("123",res);
        });
    },
    ToLogin() {
      this.$router.push("/");
    }
  },
  data() {
    return {
      ruleForm: {
        name: "",
        password: ""
      },

      rules: {
        name: [
          { required: true, message: "请输入正确的用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        num: [{ required: true, message: "请输入电话号码", trigger: "blur" }],
        address: [{ required: true, message: "请输入地址", trigger: "blur" }]
      }
    };
  },
  name: "Sign"
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
  margin: 0px auto;
  padding-top: 15px;
}
.passportMain {
  width: 100%;
  height: 568px;
  margin-top: 50px;
  background-color: #f8f8f8;
}
.section {
  margin: 0 auto;
  width: 960px;
  height: 726px;
  /* background-color: aqua; */
  display: flex;
  justify-content: space-between;
}
.sectionLeft {
  width: 630px;
  height: 686px;
  /* background-color: red; */
}
.sectionRight {
  width: 305px;
  height: 289px;
  /* background-color: royalblue; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
.signtitle {
  margin: 10px 0 0;
  color: #666;
  font-size: 16px;
  font-weight: bold;
  padding-left: 0;
  height: 35px;
}
.signpage {
  width: 630px;
  height: 290px;
  background-color: f8f8f8;
  border: 1px solid #e1e1e1;
}
.demo-ruleForm {
  width: 500px;
  height: 600px;
  margin: 50px auto;
}
.sectionRightBox {
  margin-top: 35px;
}
.tologinText {
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 40px;
}
.tologinBtn {
  width: 100px;
  height: 35px;
  background: #3898ea;
  color: #ddd;
}
</style>