const ProductModel=require('../Model/ProductModel') 
class ProductService{
    constructor(){
        this.productModel=new ProductModel()
    }
    //获取全部商品
    getProduct(call){
        this.productModel.selectAll(res=>{
            call(res)
        })
    }
    //通过id获取商品信息
    getById(id,call){
        this.productModel.selectById(id,res=>{
            call(res)
        })
    }
    //添加商品
    insert(name, img,price,info, call){
        //检查商品是否已存在
        this.productModel.selectByName(name,res=>{
            let ob={
                msg:"商品已存在",
                code:-1
            }
            if(res.length>0){
                call(ob);
                return
            }
        //商品不存在执行插入操作
            this.productModel.insert(name, img,price,info,res=>{
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