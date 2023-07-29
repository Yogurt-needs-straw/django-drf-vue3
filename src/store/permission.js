import store from "@/store/index";

export function hasPermission(allowRoleList) {
    // 1.获取当前自己的角色
    // 2.所有的角色
    if(allowRoleList.indexOf(store.state.role) !== -1 ){
        return true;
    }

}