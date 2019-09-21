//导入购物车模块
let CartService=require('../Service/CartService');
//添加到购物车
module.exports.insert=function(req,res){
    let cartService=new CartService();
    let {img,userId,count,name,price,kind,proId}=req.query
    cartService.insert(img,userId,count,name,price,kind,proId,data=>{
        res.json(data)
    })
}
// module.exports.selectBefore=function(req,res){
//     let menuId=req.query.menuId;
//     let userId=req.query.userId;
//     let cartService=new CartService();
//     cartService.selectBeforeInsert(userId,menuId,ob=>{
//         res.json(ob)
//     })
// }
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
    let proId=req.body.proId;
    let count=req.body.count;
    let cartService=new CartService();
    cartService.updateCounts(proId,userId,count,ob=>{
        res.json(ob)
    })
}
//买单
// module.exports.pay=function(req,res){
//     let cartList=req.body.cartList;
//     console.log(cartList)
//     let cartService=new CartService();
//     cartService.pay(cartList,ob=>{
//         res.json(ob)
//     })
// }
// //获取历史订单
// module.exports.getPayed=function(req,res){
//     let userId=req.body.userId;
//     let cartService=new CartService();
//     cartService.getPayed(userId,ob=>{
//         res.json(ob)
//     })
// }