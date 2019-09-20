let ProductService=require('../Service/ProductService')
//获得所有商品信息
module.exports.getProductByType=function(req,res){
    let type=req.query.type
    let productService=new ProductService()
    productService.getProduct(type,products=>{
        res.json(products)
    })
}
//添加商品
module.exports.insert=function(req,res){
    console.log(req.query);
    let {name,price,img,type,proCode,kind,prices}=req.query
    let productService=new ProductService()
    productService.insert(name,price,img,type,proCode,kind,prices,products=>{
        res.json(products)
    })
}
module.exports.source=function(req,res){
    let name=req.query.name;
    let productService=new ProductService()
    productService.source(name,ob=>{
        res.json(ob)
    })
}
// //删除商品
// module.exports.delete=function(req,res){
//     console.log(req.body)
//     let id = req.body.id;
//     let productService=new ProductService()
//     productService.delete(id,ob=>{
//         res.json(ob);
//     })
// }
// //修改商品信息
// module.exports.update=function(req,res){
//     let id=req.body.id;
//     let name = req.body.name;
//     let img = req.body.img;
//     let info = req.body.info;
//     let price = req.body.price;
//     let productService=new ProductService()
//     productService.update(name,img,price,info,id,ob=>{
//         res.json(ob);
//     })
// }
//搜索商品
// //通过id查询商品
// module.exports.getById=function(req,res){
//     let id=req.query.id;
//     let productService=new ProductService()
//     productService.getById(id,ob=>{
//         res.json(ob)
//     })
// }
