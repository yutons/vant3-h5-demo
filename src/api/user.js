// 封装用户相关的请求模块
import request from "../utils/request";
export const login = (data) => {
    return request({
        method: "POST",
        url: "/user/login",
        data,
    });
};