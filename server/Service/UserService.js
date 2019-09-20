const UserModel = require('../Model/UserModel');
class UserService {
    constructor() {
        this.userModel = new UserModel();
    }
    login(name,password,call){
        let ob = {
            msg: "用户不存在",
            code: -1
        }
        this.userModel.selectByName(name, function (users) {
            if (users.length < 1) {
                call(ob);
                return;
            }
            //获得用户对象
            let user = users[0];
            //获得用户的密码
            let buffer = user.password;
            if (buffer == password) {
                ob.msg = "用户合法";
                ob.code = 1;
            } else {
                ob.msg = "用户密码错误，请重新验证";
                ob.code = 0;
            }
            let data={
                ob:ob,
                user:user
            }
            call(data);
        });
    }
    register(name, password, call){
        let ob = {
            msg:'用户已存在',
            code:-1,
        }
         //查询是否已存在用户,如果存在直接返回ob对象
        this.userModel.selectByName(name,res=>{
            if(res.length>0){
                call(ob);
                return;
            }
            this.userModel.insert(name, password,result=>{
                ob.msg = "注册成功";
                ob.code = 1;
                call(ob);
            })
        })
      
    }
    // update(name,password,address,num,img,id,call) {
    //     this.userModel.update(name,password,address,num,img,id,res=>{
    //         this.userModel.selectByName(name,res=>{
    //             call(res)
    //         })
    //     })
    // }
    // updateMoney(userId,money,call){
    //     this.userModel.updateMoney(userId,money,res=>{
    //         call(res);
    //     })
    // }

}
module.exports = UserService;