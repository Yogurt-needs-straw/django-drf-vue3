import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store";

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    children:[
      {
        path: 'basic',
        name: 'basic',
        meta: {role: ["admin","user","manager"], title: "基本配置", is_menu: true},
        component: () => import('../views/admin/BasicView.vue'),

      },
      {
        path: 'user',
        name: 'user',
        meta: {role: ["admin","manager"], title: "用户管理", is_menu: true},
        component: () => import('../views/admin/UserView.vue'),

      },
      {
        path: 'order',
        name: 'order',
        meta: {role: ["admin","user"], title: "订单管理", is_menu: true},
        component: () => import('../views/admin/OrderView.vue'),

      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  // 1.当前访问的路由
  // console.log(to.mate.role);
  if(to.meta.role){
    // 判断
    // 获取当前vuex中自己的角色
    // to.mate.role就是允许的角色列表
    let userRole = store.state.role;
    let allowRoleList = to.meta.role;

    if(allowRoleList.indexOf(userRole) === -1) {
      next({name:"login"});
    }else {
      next();
    }

  }else {
    next();
  }

})

export default router
