/**
 * Created by lk on 17/6/4.
 */
import axios from "./axios";
// 获取亚马逊折扣信息
export function userAmzcode(user_token,id) {
    return axios({
        url: "/goods/view_links?lang=en-us",
        method: "post",
        params: { user_token,id }
    });
}
// 获取信息
export function userInfo(user_token) {
    return axios({
        url: "/user/getuserinfo?lang=en-us",
        method: "post",
        params: { user_token }
    });
}

export function loginName(email, password) {
    return axios({
        url: "/common/login?lang=en-us",
        method: "post",
        data: { email, password }
    });
}

export function logout(uid, token) {
    return axios({
        url: "/common/loginout?lang=en-us",
        method: "post",
        data: { uid, token }
    });
}

export function password(data) {
    return axios({
        url: "/admin/auth/login/password",
        method: "post",
        data: data
    });
}
