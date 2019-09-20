import axios from 'axios'
import qs from 'qs';
const serverUrl = "http://localhost:8888";
let net = {
    get: "",
    post: "",
    uploadFile: ""
};
net.get = function (api, object={}) {
    //1.封装请求地址
    let url = serverUrl + api;
    //2.根据请求地址和请求数据发出请求
    return axios.get(url, {
        params: object
    })
};


net.post = function (api, object={}) {
    //1.封装请求地址
    let url = serverUrl + api;
    //2.数据请求
    return axios.post(url, qs.stringify(object))

};

export default net;