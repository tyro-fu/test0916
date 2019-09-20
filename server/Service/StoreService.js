const StoreModel=require('../Model/StoreModel') 
class StoreService{
    constructor(){
        this.storeModel=new StoreModel()
    }
    //验证商家账户
    cheakAdmin(name,password,call){
        let ob = {
            msg: "账号不存在",
            code: -1
        }
        this.storeModel.selectByName(name, function (users) {
            if (users.length < 1) {
                call(ob);
                return;
            }
            //获得用户对象
            let user = users[0];
            //获得用户的密码
            let buffer = user.password;
            if (buffer == password) {
                ob.msg = "账号合法";
                ob.code = 1;
            } else {
                ob.msg = "账号密码错误，请重新验证";
                ob.code = 0;
            }
            call(ob);
        });
    }
}
module.exports=StoreService;