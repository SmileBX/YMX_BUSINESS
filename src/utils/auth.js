import { getStore, setStore, removeStore } from "./store";

const adminId1 = "ADMIN-ID";
const adminToken1 = "ADMIN-TOKEN";

// 获取token
export function getToken() {
    return getStore(adminToken1);
}

// 设置token
export function setToken(sid) {
    return setStore(adminToken1, sid, 365);
}

// 删除token
export function removeToken() {
    return removeStore(adminToken1);
}

// 获取admin_id
export function getAdminId() {
    return getStore(adminId1);
}

// 设置admin_id
export function setAdminId(id) {
    return setStore(adminId1, id, 365);
}

// 删除admin_id
export function removeAdminId() {
    return removeStore(adminId1);
}



