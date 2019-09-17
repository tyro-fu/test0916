<template>
  <div class="product">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="商品名称" prop="proName">
        <el-input v-model="ruleForm.proName" placeholder="请输入商品名称"></el-input>
      </el-form-item>
      <el-form-item label="商品原价" prop="oldPrice">
        <el-input v-model.number="ruleForm.oldPrice" placeholder="请输入商品原价"></el-input>
      </el-form-item>
      <el-form-item label="商品现价" prop="newPrice">
        <el-input v-model.number="ruleForm.newPrice"></el-input>
      </el-form-item>
      <el-form-item label="商品简介" prop="intro">
        <el-input type="textarea" :rows="2" v-model="ruleForm.intro"></el-input>
      </el-form-item>
      <el-form-item label="商品库存" prop="stock">
        <el-input v-model.number="ruleForm.stock"></el-input>
      </el-form-item>
      <el-form-item label="商品类别" prop="type">
        <el-select v-model="ruleForm.type" placeholder="请选择商品类型">
          <el-option
            v-for="item in typeList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品尺寸" prop="mlength">
        <el-select class="sel" v-model="value1" multiple>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value "
          ></el-option>
        </el-select>
        <el-input class="typeI" v-model="ruleForm.mlength" placeholder="请输入商品尺寸"></el-input>
        <el-button type="primary" @click="addlength">添加尺寸</el-button>
      </el-form-item>
    </el-form>
    <el-upload
      class="upload-demo"
      ref="upload"
      :action="config.serveIP+config.port+'/upload'"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :on-change="handleChange"
      :on-success="upFileData"
      :auto-upload="false"
      list-type="picture"
    >
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件,最多只能上传3枚哦</div>
      <el-button style="margin-left: 10px;" size="small" type="warning" @click="reset">重置表单</el-button>
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    </el-upload>
  </div>
</template>
<script>
import net from "../../../Utils/net";
import config from "../../../Utils/config";
export default {
  name: "productUpload",
  props: ["item"],
  data() {
    return {
      upFlag: 0,
      user: "",
      fileList: [],
      itemList: {},
      ruleForm: {
        id: 0,
        adm: "",
        proName: "",
        newPrice: null,
        oldPrice: null,
        intro: "",
        stock: null,
        mlength: "",
        type: "",
        img: "",
        img2: "",
        img3: ""
      },
      resImg: [],
      mLength: [],
      options: [],
      typeList: [
        { value: "phone", label: "phone" }
        // { value: "T-shirt", label: "T-shirt" },
        // { value: "Pants", label: "Pants" },
        // { value: "Skirt", label: "Skirt" },
        // { value: "UnderWear", label: "UnderWear" }
      ],
      value1: [],
      value: "",
      rules: {
        type: { required: true, message: "请选择商品类型" },
        proName: [
          {
            required: true,
            message: "请输入商品名称",
            trigger: "blur"
          },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ],
        newPrice: [
          {
            required: true,
            message: "请输入商品现价",
            trigger: "change"
          },
          {
            type: "number",
            message: "价格应为数字，请重新输入"
          }
        ],
        oldPrice: [
          {
            required: true,
            message: "请输入商品原价",
            trigger: "change"
          },
          { type: "number", message: "价格应为数字，请重新输入" }
        ],
        intro: [
          {
            type: "string",
            message: "请输入商品的简介",
            trigger: "change"
          }
        ],
        stock: [
          {
            required: true,
            message: "请输入商品的库存数",
            trigger: "change"
          },
          { type: "number", message: "库存数应为数字" }
        ]
      }
    };
  },
 
  methods: {
    submitForm() {},
    addlength() {
      // window.console.log(this.mLength)
      if (this.ruleForm.mlength != "") {
        let mLength = this.ruleForm.mlength,
          // let mLength = Number(this.ruleForm.mlength),
          obj = {
            value: mLength,
            label: mLength
          };
        for (let i = 0; i < this.options.length; i++) {
          if (this.options[i].value == obj.value) {
            this.$message({
              type: "warning",
              message: "请勿输入已存在的内容",
              offset: 81
            });
            return;
          }
        }

        this.ruleForm.mlength = "";
        this.options.push(obj);
        this.value1.push(obj.value);
      }
    },

    submitUpload() {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          let dLength = this.fileList.length;
          if (!dLength) {
            // 未修改图片直接上传, 或未添加图片直接上传;

            window.console.log("submit", this.value1);

            net
              .post("/iDataUp", {
                data: this.ruleForm,
                mlength: this.value1.join("/"),
                img: [
                  this.ruleForm.img,
                  this.ruleForm.img2,
                  this.ruleForm.img3
                ],
                adm: this.user
              })
              .then(res => {
                if (res.data.code == 1) {
                  this.$message({
                    type: "success",
                    message: "成功了哟！",
                    offset: 81
                  });
                }
              });
          } else {
            this.$refs.upload.submit();
            this.upFlag = dLength;
          }
        } else {
          window.console.log("error submit!!");
          return false;
        }
      });
    },
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
    },
    handleRemove(file, fileList) {
      window.console.log(file, fileList);
    },
    handlePreview(file) {
      window.console.log(file);
    },

    upFileData(res) {
      this.resImg.push(res.img);
      window.console.log(this.resImg);
      if (!--this.upFlag) {
        let arr = this.resImg.join("\\") + "\\\\";
        this.resImg = arr.split("\\");
        window.console.log("submit", this.value1);

        net
          .post("/iDataUp", {
            data: this.ruleForm,
            mlength: this.value1.join("/"),
            img: this.resImg,
            adm: this.user
          })
          .then(res => {
            // window.console.log("iDataUp");
            // window.console.log(res.data);
            if (res.data.code == 1) {
              this.$message({
                type: "success",
                message: "成功了哟！",
                offset: 81
              });
              this.reset();
            }
          });
      }
    },
    reset() {
      // window.console.log("reset");
      this.upFlag = 0;
      this.fileList = [];
      this.itemList = {};
      this.ruleForm = {
        id: 0,
        proName: "",
        newPrice: null,
        oldPrice: null,
        intro: "",
        stock: null,
        mlength: "",
        type: "",
        img: "",
        img2: "",
        img3: ""
      };
      this.resImg = [];
      this.mLength = [];
      this.options = [];
      this.value1 = [];
      this.value = "";
      window.console.log(this.ruleForm);
    }
  },
  created() {
    // window.console.log("itemList",this.item)

    this.config = config;
    this.user = JSON.parse(localStorage.getItem("sucflag")).userName;
    // console.log("item",$route.params)
    this.$store.commit("modifyActive", 2);
    if (this.item !== undefined) {
      let obj = this.item;
      this.itemList = JSON.parse(obj);
      if (this.itemList.mlength !== "") {
        // window.console.log("itemList",this.itemList.mlength)
        // this.mLength = this.itemList.mlength.split("/");
        this.mLength = this.itemList.mlength.split("/").map(el=>{
          return el.replace(" ","+")
        })
      }
      // window.console.log("leng",this.mLength)
      this.itemList.oldPrice = Number(this.itemList.oldPrice);
      this.itemList.newPrice = Number(this.itemList.newPrice);
      this.itemList.stock = Number(this.itemList.stock);

      [this.ruleForm] = [this.itemList];
      for (let i = 0; i < this.mLength.length; i++) {
        this.options.push({ value: this.mLength[i], label: this.mLength[i] });
      }
      this.ruleForm.mlength = "";
      this.value1 = this.mLength;
    }
  }
};
</script>
<style scoped>
.el-form-item {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  box-sizing: border-box;
}
.el-select {
  width: 100%;
}
.sel {
  margin-bottom: 6px;
}
.typeI {
  max-width: 89%;
}
.upload-demo {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
</style>