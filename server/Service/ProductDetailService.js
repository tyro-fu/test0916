const ProductDetailModel=require('../Model/ProductDetailModel') 
class ProductDetailService{
    constructor(){
        this.productDetailModel=new ProductDetailModel()
    }
    //通过id获取商品信息
    getById(id,call){
        this.productDetailModel.selectById(id,res=>{
            call(res)
        })
    }
    //添加商品
    insert(proCode,type,price, call){
            this.productDetailModel.insert(proCode, type,price,res=>{
                ob.msg='添加商品成功';
                ob.code=1;
                call(ob);
            })
   

    }


}
module.exports=ProductDetailService