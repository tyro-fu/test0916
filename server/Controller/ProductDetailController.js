let ProductDetailService=require('../Service/ProductDetailService')
module.exports.getDetail=function(req,res){
    let productDetailService=new ProductDetailService()
    let id=req.query.id
    productDetailService.getById(id,data=>{
        res.json(data)
    })
}