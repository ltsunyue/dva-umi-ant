/**
 * 通用数据查询接口
 */
import axios from "./axios";


/**
 * get请求接口
 * @param url: 请求url
 * @param params: 请求参数
 * @return {Promise<any>}
 */
const getRequest = function (url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};

/**
 * post请求接口
 * @param url: 请求url
 * @param params: 请求参数
 * @return {Promise<any>}
 */
const postRequest = function (url, params, config) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params, config)
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};

/**
 * delete请求接口
 * @param url: 请求url
 * @param params: 请求参数
 * @return {Promise<any>}
 */
const deleteRequest = function (url, params) {
    return new Promise((resolve, reject) => {
        axios
            .delete(url, {
                params: params
            })
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};

/**
 * put请求接口
 * @param url: 请求url
 * @param params: 请求参数
 * @return {Promise<any>}
 */
const putRequest = function (url, params, config) {
    return new Promise((resolve, reject) => {
        axios
            .put(url, params, config)
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};
