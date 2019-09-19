// 引入express模块
const express = require("express");
// 获取express对象
let app = express();
// 用于post请求，数据解析
const bodyParser = require("body-parser");
const config = require("./Utils/config");

//引入cookie
// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

app.use(bodyParser.urlencoded({
    extended: false
}));
app.all('*', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By", ' 3.2.1')
        next();
})

// 获取访问ip
// function getClientIp(req) {
//     return req.headers['x-forwarded-for'] ||
//         req.connection.remoteAddress ||
//         req.socket.remoteAddress ||
//         req.connection.socket.remoteAddress;
// };
// 引入session
// var session = require('express-session');


//引入用户登录注册模块
const UserController=require('./Controller/UserController')
app.post('/login',UserController.login)
app.post('/register',UserController.registeUser)

//引入商品模块
const ProductController=require('./Controller/ProductController')
app.get('/getProduct',ProductController.getProductByType)
app.get('/source',ProductController.source)
app.get('/insert',ProductController.insert)

//引入商品详情模块
const ProductDetailController=require('./Controller/ProductDetailController')
app.get('/getDetail',ProductDetailController.getDetail)


//引入购物车模块
const CartController=require('./Controller/CartController')
app.get('/addCart',CartController.insert)
app.get('/getCart',CartController.getCart)
app.get('/updateCart',CartController.updateCount)

// 静态文件
app.use(express.static("./public"));
// 默认地址

app.listen(config.port, function () {
    console.log("启动")
})