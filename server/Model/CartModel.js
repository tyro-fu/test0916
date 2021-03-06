let SqlBase = require('./SqlBase');
class CartModel extends SqlBase {
    constructor() {
        super();
    }
    //获取用户的购物车
    selectByUserId(userId,call){
          //编写sql语句
          let sql = `select * from 916shopCar where userId ='${userId}'`;
          //查询数据
          this.connection.query(sql, function (err, result) {
              if (err) {
                  console.log(err.message);
                  return;
              }
              call(result);
          });
    }
    //获取用户历史订单
    // selcetPayed(userId,call){
    //      //编写sql语句
    //      let sql = `select * from cart where user_id ='${userId}' and ispay = 1`;
    //      //查询数据
    //      this.connection.query(sql, function (err, result) {
    //          if (err) {
    //              console.log(err.message);
    //              return;
    //          }
    //          call(result);
    //      });
    // }
    //添加购物车
    insert(img,userId,count,name,price,kind,proId,call) {
         //1,编写sql语句
        var sql = `INSERT INTO 916shopCar(img,userId,count,name,price,kind,proId,) VALUES('${img}','${userId}','${count}','${name}','${price}','${kind}','${proId}')`;
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
    }
    //插入购物车之前检查用户是否已有该菜品
    selectBeforeInsert(proId,userId,call){
        //编写sql语句
        let sql = `select * from 916shopCar where userId ='${userId}' and proId = '${proId}'`;
        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            call(result);
        });
    }
    //更新购物车商品的数量
    updateCount(proId,userId,count,call) {
        //编写sql语句
        let sql = `UPDATE 916shopCar SET count =${count} WHERE proId = '${proId}' and userId = '${userId}'`;
        //5，更新操作
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    }
    //删除购物车菜品
    delete(proId,userId,call){
          //编写sql语句
          var sql = `delete from 916shopCar WHERE proId = '${proId}' and userId = '${userId}'`;
          this.connection.query(sql, function (err, result) {
              if (err) {
                  console.log('[INSERT ERROR] - ', err.message);
                  return;
              }
              call(result);
          });
    }
    //结算之后修改isPay字段的状态
    // updateIspay(userId,menuId,call){
    //     //编写sql语句
    //     let sql = `UPDATE cart SET ispay = 1 WHERE user_id = '${userId}' and menu_id = '${menuId}' and ispay = 0`;
    //     console.log(sql)
    //     //5，更新操作
    //     this.connection.query(sql, function (err, result) {
    //         if (err) {
    //             console.log('[INSERT ERROR] - ', err.message);
    //             return;
    //         }
    //         call(result);
    //     });
    // }
}
module.exports=CartModel;