import { message, Modal } from 'antd';
import {Register} from "./APIService";
/**
 * 全局提示
 * @param data: 要说的话
 * success 登录成功
 * error 错误
 * warning 警告提示(黄色感叹号)
 * info 轻微提示 (蓝色感叹号)
 */
message.config({
    top:40,
    duration: 2,
    maxCount: 1,
});
export const info = (data) => {
    message.info(data);
};
export const success = (data) => {
    message.success(data);
};

export const error = (data = '服务器错误') => {
    message.error(data);
};

export const warning = (data) => {
    message.warning(data);
};
/**
 * 全局（成功）提示
 * @data 文字
 * @time 持续时间
 * longSuccess
 */
export const longSuccess = (data,time) => {
    message.success(data, time);
};
let state = true;
//登录超时提示
export function showDeleteConfirm ( msg, content = '' ){
    if( state ){
        state = false;
        Modal.warning({
            title: msg ,
            content: content,
            onOk() {
                state = false;
                Register.retreat()
                    .then((arr) =>{
                        if( arr.data.code === -14 ){
                            localStorage.clear();
                            window.location.href='/';
                        }
                    })
                    .catch((red) => {

                    })
            },
        });
    }
};
