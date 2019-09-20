//引入用户模块
let UserService = require('../Service/UserService');
// const formidable = require('formidable');
module.exports.login = function (req, res) {
    // //解析提交数据
    let name = req.body.name;
    let password = req.body.password;
    let userService = new UserService();
        //验证用户是否合法
        userService.login(name, password, function (data) {
            //如果用户合法
            res.json(data);
        });
        
    // var form = new formidable.IncomingForm();
    // form.parse(req, (err, fields, files) => {
    //     var name = fields.name;
    //     var password = fields.password;
    //     //创建业务对象
    //     let userService = new UserService();
    //     //验证用户是否合法
    //     userService.login(name, password, function (data) {
    //         //如果用户合法
    //         res.json(data);
    //     });

    // });
 

}
module.exports.registeUser = function (req, res) {
    let name = req.body.name;
    let password = req.body.password;
    let userService = new UserService()
    userService.register(name, password, ob => {
        res.json(ob);
    })
}

// module.exports.updateUser = function (req, res) {
//     let name = req.body.name;
//     let password = req.body.password;
//     let address = req.body.address;
//     let num = req.body.num;
//     let img = req.body.img;
//     let id = req.body.id
//     let userService = new UserService();
//     userService.update(name, password, address, num, img, id, ob => {
//         res.json(ob)
//     })
// }
// module.exports.updateMoney = function (req, res) {
//     console.log(req.body)
//     let id = req.body.id;
//     let money = req.body.money;
//     let userService = new UserService();
//     userService.updateMoney(id, money, ob => {
//         res.json(ob)
//     })
// }