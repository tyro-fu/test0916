let SqlBase = require('./SqlBase');
class ProductModel extends SqlBase {
    constructor() {
        super();
    }
    selectByName(name,call){
        //编写sql语句
        let sql = `select * from 916yaojiaoPro where name ='${name}'`;
        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            call(result);
        });
    }
 //添加商品
<<<<<<< HEAD
 insert(name, img,price,type1,pdid, call) {
=======


 insert(name, img,price,type,pdid, call) {

>>>>>>> a0212c051eb32fdeb63a11cbe171bf98f58c1e4b
    //1,编写sql语句
    var sql = `INSERT INTO 916yaojiaoPro(name,img,price,type1,pdid) VALUES('${name}','${img}','${price}','${type1}','${pdid}')`;
    console.log(sql)
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
    //删除商品
    // delete(id,call){
    //     //编写sql语句
    //     var sql = `delete from menu where menu_id = '${id}'`;
    //     console.log(sql)
    //     this.connection.query(sql, function (err, result) {
    //         if (err) {
    //             console.log('[INSERT ERROR] - ', err.message);
    //             return;
    //         }
    //         call(result);
    //     });
    // }
    // //通过商品id修改商品属性
    // update(name,img,price,info,id,call) {
    //     //4,编写sql语句
    //     let sql = `UPDATE menu SET name ='${name}',img='${img}',price = '${price}',info='${info}' WHERE menu_id = '${id}'`;

    //     //5，更新操作
    //     this.connection.query(sql, function (err, result) {
    //         if (err) {
    //             console.log('[INSERT ERROR] - ', err.message);
    //             return;
    //         }
    //         call(result);
    //     });
    // }
    //查询所有商品
    // selectAll(call){
    //      //编写sql语句
    //      let sql = `select * from menu`;
    //      //查询数据
    //      this.connection.query(sql, function (err, result) {
    //          if (err) {
    //              console.log(err.message);
    //              return;
    //          }
    //          call(result);
    //      });
    // }
    //通过名字查询商品
    selectByType(type1,call){
          //编写sql语句
          let sql = `select * from 916yaojiaoPro where type1 ='${type1}'`;
          //查询数据
          this.connection.query(sql, function (err, result) {
              if (err) {
                  console.log(err.message);
                  return;
              }
              call(result);
          });
    }
     //通过id查询商品
    selectById(id,call){
        //编写sql语句
        let sql = `select * from 916yaojiaoPro where id ='${id}'`;
        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            call(result);
        });
    }
    //模糊查询
    selectLikeName(name, call) {
        //编写sql语句
        let sql = `select * from 916yaojiaoPro where name like '%${name}%'`;
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
module.exports=ProductModel;