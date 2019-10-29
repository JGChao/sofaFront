
import axios from "axios";
// import { Loading } from 'element-ui';

//定义axios实例
const instance = axios.create({
    baseURL: "http://www.vicor-end.com/"
});

// let loading;
// function startStartLoding(){
//     loging = Login
// }
// 添加请求拦截器
instance.interceptors.request.use(
    function(config) {
        // 在发送请求之前做些什么
        if(sessionStorage.getItem('token')){
            config.headers.Authorization=sessionStorage.getItem('token');
            config.headers['Content-type']='application/json;charset=utf8';

        }
        return config;
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
instance.interceptors.response.use(
    function(response) {
        // 对响应数据做点什么
        return response;
    },
    function(error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);
export default instance;
