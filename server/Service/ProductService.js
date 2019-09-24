const ProductModel=require('../Model/ProductModel') 
const ProductDetailModel=require('../Model/ProductDetailModel')
class ProductService{
    constructor(){
        this.productModel=new ProductModel()
        this.productDetailModel=new ProductDetailModel()
    }
    //获取全部商品
    getProduct(type,call){
        this.productModel.selectByType(type,res=>{
            res.forEach((item,index)=>{
                this.productDetailModel.selectById(item.id,ob=>{
                    console.log(ob);
                    item.detail=ob
                    if (index==res.length-1) {
                        call(res)
                    }
                })
            })
           
        })
    }
    //通过id获取商品信息
    getById(id,call){
        this.productModel.selectById(id,res=>{
            call(res)
        })
    }
    //添加商品
    insert(name,price,img,type,proCode,kind,prices, call){
      
        //商品不存在执行插入操作
<<<<<<< HEAD
            this.productModel.insert(name, img,price,type,pdid,res=>{
                this.productDetailModel.insert(proCode,kind,prices,pdid,res=>{
=======
            this.productModel.insert(name, img,price,type,res=>{
                this.productDetailModel.insert(proCode,kind,prices,res=>{
>>>>>>> 2d901bda6f66e84a2d2b7d6bc2bc32ce7bc90e60
                    let ob={}
                    ob.msg='添加商品成功';
                    ob.code=1;
                    call(ob);
                })
                
  
            })
  

    }
    //删除商品
    delete(id,call){
        this.productModel.delete(id,res=>{
            let ob={
                msg:'删除成功',
                code:1
            }
            call(ob);
        })
    }
    //修改商品信息
    update(name,img,price,info,id,call){
        this.productModel.update(name,img,price,info,id,res=>{
            let ob={
                msg:'修改成功',
                code:1
            }
            call(ob);
        })
    }
    //搜索商品
    source(name,call){
        this.productModel.selectLikeName(name,res=>{
            call(res);
        })
    }
}
module.exports=ProductService