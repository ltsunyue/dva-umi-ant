import axios from "axios";
import { showDeleteConfirm, info } from "./globalPrompt";

axios.defaults.timeout = 10000;
if( JSON.parse(localStorage.getItem('user')) !== null ){
    axios.defaults.headers['apiAuth'] = JSON.parse(localStorage.getItem('user')).apiAuth;
}
axios.interceptors.request.use(function (config) {
    if( JSON.parse(localStorage.getItem('user')) !== null ){
        config.headers.apiAuth = JSON.parse(localStorage.getItem('user')).apiAuth;
    }
    return config;
}, function (error) {
   // console.log(error)
});

axios.interceptors.response.use(function (response) {
    if( typeof (response) !== 'object' ){
        showDeleteConfirm( '服务器错误,请稍后重试');
    }

    if( response.data['code'] !== undefined && response.data.code === 3 ){
        showDeleteConfirm( '请重新登录');
    }
    if( response.data !== undefined && response.data.code === -14 ){
        showDeleteConfirm( 'ApiAuth不匹配 请重新登录');
    }
    if( response.data['code'] !== undefined && response.data.code === 6 ){
        info( '无权访问');
    }
    return response;

}, function (errors) {
    const { code, message } = errors;
    if (code === 'ECONNABORTED' || message === 'Network Error') { // 请求超时
        info( '请求超时');
    }
    if( errors.response.status === 500 ){
        return Promise.reject();
    }
    return Promise.reject(errors);
});

export default axios
