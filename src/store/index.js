import Vue from "vue";
import Vuex from "vuex";
import { userInfo, loginName, logout ,userAmzcode } from "../api/login";
import * as types from "./mutation-types";
import {
    getToken,
    setToken,
    removeToken,
    getAdminId,
    setAdminId,
    removeAdminId
} from "../utils/auth";
import { Message } from "element-ui";

 

Vue.use(Vuex);

const store =new Vuex.Store({
    state : {
        adminId: getAdminId(), // id
        userName: "", // 昵称
        avatar: "", // 头像
        token1: getToken(), // 登录token
        authRules: [], // 权限列表
        newsCount:0,//消息数量
        // routers: constantRouterMap // 路由列表
    },
    getters : {
        adminId: state => state.adminId,
        userName: state => state.userName,
        avatar: state => state.avatar,
        token1: state => state.token1,
        authRules: state => state.authRules,
        newsCount:state=>state.newsCount
        // routers: state => state.routers
    },
    // actions
    actions:{
        // 用户名登录
        loginName({ commit }, userInfo) {
            const email = userInfo.email ? userInfo.email.trim() : "";
            const password = userInfo.password ? userInfo.password : "";
            return new Promise((resolve, reject) => {
                loginName(email, password)
                    .then(response => {
                        if (response.code) {
                            Message({
                                message: response.msg,
                                type: "error",
                                duration: 5 * 1000
                            });
                        } else {
                            let data = response.data;
                            commit(types.ADMIN_ID, data.member_id);
                            commit(types.ADMIN_TOKEN, data.user_token);
                            commit(types.RECEIVE_ADMIN_AUTH_RULES, []);
                        }
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        userInfo({ commit },token) {
            return new Promise((resolve, reject) => {
                userInfo(token)
                    .then(response => {
                        if (response.code === 2) {
                            reject("登录失效");
                        }
                        const data = response.data || {};
                        commit(types.RECEIVE_ADMIN_NAME, data.username);
                        commit(types.RECEIVE_ADMIN_AVATAR, data.avatar);
                        commit(types.RECEIVE_ADMIN_AUTH_RULES, data.authRules);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        // 登出
        loginOut({ commit }) {
            return new Promise((resolve, reject) => {
                logout()
                    .then(() => {
                        commit(types.ADMIN_ID, "");
                        commit(types.ADMIN_TOKEN, "");
                        commit(types.RECEIVE_ADMIN_AUTH_RULES, []);
                        resolve();
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },

        // 前端 登出
        fedLogout({ commit }) {
            return new Promise(resolve => {
                commit(types.ADMIN_ID, "");
                commit(types.ADMIN_TOKEN, "");
                commit(types.RECEIVE_ADMIN_AUTH_RULES, []);
                resolve();
            });
        },
        //获取折扣码 亚马逊链接
        getAmzurlCode({ commit },amzInfo){
            const token = amzInfo.user_token
            const id = amzInfo.id
            return new Promise((resolve,reject)=>{
                userAmzcode(token,id).then(res=>{
                    if(res.code == 0){
                        resolve(res);
                    }
                })
                .catch(err=>{
                    reject(err)
                })
            })
        },
        /**
         * 过滤路由列表
         * @param commit
         * @param data
         * @returns {Promise}
         */
        filterRouter({ commit }, data) {
            const { accessedRouters } = data;
            if (accessedRouters && accessedRouters.length > 0) {
                commit(types.RECEIVE_ROUTERS, accessedRouters);
            }
        }
    },
    mutations:{
        [types.ADMIN_ID](state, adminId) {
            state.adminId = adminId;
            if (adminId === "") {
                removeAdminId();
            } else {
                setAdminId(adminId);
            }
        },
        [types.ADMIN_TOKEN](state, token) {
            state.token1 = token;
            if (token === "") {
                removeToken();
            } else {
                setToken(token);
            }
        },
        [types.RECEIVE_ADMIN_NAME](state, userName) {
            state.userName = userName;
        },
        [types.RECEIVE_ADMIN_AVATAR](state, avatar) {
            state.avatar = avatar;
        },
        [types.RECEIVE_ADMIN_AUTH_RULES](state, authRules) {
            state.authRules = authRules;
        },
        [types.RECEIVE_ROUTERS](state, routers) {
            const tempRm = constantRouterMap.concat(routers);
            state.routers = JSON.parse(JSON.stringify(tempRm));
        },
        //修改消息数量
        changeNewsCount(state,params){
            state.newsCount = params
        }
    }
})

export default store