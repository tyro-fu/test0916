let SqlBase = require('./SqlBase');
class ProductDetailModel extends SqlBase {
    constructor() {
        super();
    }
 //添加商品
 insert(proCode,kind,prices, pdid,call) {
    //1,编写sql语句
    var sql = `INSERT INTO 916proDetail(proCode,kind,prices,pdid) VALUES('${proCode}','${kind}','${prices}','${pdid}')`;
    //2,进行插入操作 
    /**
     *query，mysql语句执行的方法
     * 1，userAddSql编写的sql语句
     * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
     */
    this.connection.query(sql, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }
        call(result);
    });
    //5,连接结束    
}

     //通过id查询商品
    selectById(pdid,call){
        //编写sql语句
        let sql = `select * from 916proDetail where pdid ='${pdid}'`;
        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            call(result);
        });
    }
 
}
module.exports=ProductDetailModel;