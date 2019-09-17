let StoreService = require('../Service/StoreService');

module.exports.checkAdmin = function (req, res) {

    //解析提交数据
    let name = req.body.name;
    let password = req.body.password;
    
    //创建业务对象
    let storeService = new StoreService();
    //验证用户是否合法
    storeService.cheakAdmin(name, password, function (ob) {
        //如果用户合法
        res.json(ob);
    });

}