//导入购物车模块
let CartService=require('../Service/CartService');
let ProductService=require('../Service/ProductService')
//添加到购物车
module.exports.insert=function(req,res){
    let cartService=new CartService();
    let productService= new ProductService()
    let userId=req.body.userId;
    let menuId=req.body.menuId;
    let count=req.body.count;
    productService.getById(menuId,ob=>{
        let name=ob[0].name;
        let price=ob[0].price;
        let img=ob[0].img;
       
    cartService.insert(name,count,userId,price,menuId,img,ob=>{
        res.json(ob)
    })
    })
}
module.exports.selectBefore=function(req,res){
    console.log(req.query)
    let menuId=req.query.menuId;
    let userId=req.query.userId;
    let cartService=new CartService();
    cartService.selectBeforeInsert(userId,menuId,ob=>{
        res.json(ob)
    })
}
//获取购物车数据
module.exports.getCart=function(req,res){
    let userId=req.query.userId;
    let cartService=new CartService();
    cartService.getCart(userId,ob=>{
        res.json(ob)
    })
}
//更新购物车数量
module.exports.updateCount=function(req,res){
    let userId=req.body.userId;
    let menuId=req.body.menuId;
    let count=req.body.count;
    let cartService=new CartService();
    cartService.updateCounts(count,userId,menuId,ob=>{
        res.json(ob)
    })
}
//买单
module.exports.pay=function(req,res){
    let cartList=req.body.cartList;
    console.log(cartList)
    let cartService=new CartService();
    cartService.pay(cartList,ob=>{
        res.json(ob)
    })
}
//获取历史订单
module.exports.getPayed=function(req,res){
    let userId=req.body.userId;
    let cartService=new CartService();
    cartService.getPayed(userId,ob=>{
        res.json(ob)
    })
}