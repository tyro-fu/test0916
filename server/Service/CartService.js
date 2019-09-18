let CartModel=require('../Model/CartModel');
class CartService{
    constructor(){
        this.cartModel=new CartModel()
    }

    insert(proId,userId,count,call){
        this.cartModel.selectBeforeInsert(proId,userId,res=>{
            if(res.length==0){
                this.cartModel.insert(proId,userId,count,res=>{ 
                    this.cartModel.selectByUserId(userId,res=>{
                        call(res)
                    })
                })
            }else{
                this.cartModel.updateCount(proId,userId,count,res=>{
                    this.cartModel.selectByUserId(userId,res=>{
                        call(res)
                    })
                })
            }
        })
       
    }
    updateCounts(proId,userId,count,call){
        if(count==0){
            this.cartModel.delete(proId,userId,res=>{
                this.cartModel.selectByUserId(userId,res=>{
                    call(res)
                })
            })
        }else{
            this.cartModel.updateCount(proId,userId,count,res=>{
                this.cartModel.selectByUserId(userId,res=>{
                    call(res)
                })
            })
        }
    }
    selectBeforeInsert(userId,menuId,call){
        this.cartModel.selectBeforeInsert(userId,menuId,res=>{
            call(res)
        })
    }
    getCart(userId,call){
        this.cartModel.selectByUserId(userId,res=>{
            call(res)
        })
    }
    pay(cartList,call){
        let ob="";
        cartList.forEach(item => {
            let userId=item.user_id;
            let menuId=item.menu_id;
            this.cartModel.updateIspay(userId,menuId,res=>{
                ob+=res;
            })
        });
        call(ob)
    }
    getPayed(userId,call){
        this.cartModel.selcetPayed(userId,res=>{
            call(res)
        })
    }
}
module.exports=CartService;