
//导入文件模块
let FileTool = require('../Utils/FileTool');
let config = require('../Utils/config');
module.exports.upload = function (req, res) {

    //获得上传的文件
    let file = req.files[0];

    //创建对象 
    let fileTool = new FileTool();
    //上传图片
    fileTool.upload(file, function (fileName) {
        res.json({
            url: config.ip + config.port + '/upload/imgs/' + fileName,
            key: '/upload/imgs/' + fileName
        });
    });



}