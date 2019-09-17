let SqlBase = require('./SqlBase');
class CartModel extends SqlBase {
    constructor() {
        super();
    }
    //获取用户的购物车
    selectByUserId(userId,call){
          //编写sql语句
          let sql = `select * from cart where user_id ='${userId}' and ispay = 0`;
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
    selcetPayed(userId,call){
         //编写sql语句
         let sql = `select * from cart where user_id ='${userId}' and ispay = 1`;
         //查询数据
         this.connection.query(sql, function (err, result) {
             if (err) {
                 console.log(err.message);
                 return;
             }
             call(result);
         });
    }
    //添加购物车
    insert(name,count,userId,price,menuId,img,call) {
         //1,编写sql语句
        var sql = `INSERT INTO cart(name,count,user_id,price,menu_id,img) VALUES('${name}','${count}','${userId}','${price}','${menuId}','${img}')`;
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
    selectBeforeInsert(userId,menuId,call){
        //编写sql语句
        let sql = `select * from cart where user_id ='${userId}' and menu_id = '${menuId}' and ispay = 0`;
        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            call(result);
        });
    }
    //更新购物车菜品的数量
    updateCount(count,userId,menuId,call) {
        //编写sql语句
        let sql = `UPDATE cart SET count =${count} WHERE user_id = '${userId}' and menu_id = '${menuId}' and ispay = 0`;
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
    delete(userId,menuId,call){
          //编写sql语句
          var sql = `delete from cart WHERE user_id = '${userId}' and menu_id = '${menuId}' and ispay = 0`;
          this.connection.query(sql, function (err, result) {
              if (err) {
                  console.log('[INSERT ERROR] - ', err.message);
                  return;
              }
              call(result);
          });
    }
    //结算之后修改isPay字段的状态
    updateIspay(userId,menuId,call){
        //编写sql语句
        let sql = `UPDATE cart SET ispay = 1 WHERE user_id = '${userId}' and menu_id = '${menuId}' and ispay = 0`;
        console.log(sql)
        //5，更新操作
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    }
}
module.exports=CartModel;