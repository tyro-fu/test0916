var fs = require("fs");
class FileTool {
    constructor() {}

    upload(file, callback) {

        //原始文件的地址
        var src_path = file.path;
        //重新设置图片的名字
        var fileName = new Date().getTime() + ".jpg";
        //设置图片的地址
        var des_path = file.destination + fileName;
        //修改文件名称，可更改文件的存放路径.oldPath 原路径;newPath 新路径
        fs.rename(src_path, des_path, function (err) {
            if (err) {
                throw err;
            }
            //获取文件信息,des_path 文件路径
            fs.stat(des_path, function (err, stat) {
                if (err) {
                    throw err;
                }

                //启动一个回调
                callback(fileName);
            });
        });
    }
}

module.exports = FileTool;