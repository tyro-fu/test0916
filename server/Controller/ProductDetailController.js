let ProductDetailService=require('../Service/ProductDetailService')
module.exports.getDetail=function(req,res){
    let productDetailService=new ProductDetailService()
    let pdid=req.query.pdid
    productDetailService.getById(pdid,data=>{
        res.json(data)
    })
}