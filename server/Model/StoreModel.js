let SqlBase = require('./SqlBase');
class StoreModel extends SqlBase {
    constructor() {
        super();
    }

    //查询商家
    selectByName(name, callback) {
        //编写sql语句
        let sql = `select * from admin where name="${name}"`;
        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }

}
module.exports=StoreModel;