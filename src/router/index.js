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
        component: () => import('../views/admin/BasicView.vue'),
        mate:{role:["admin","user","manager"]},
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('../views/admin/UserView.vue'),
        mate:{role:["admin","manager"]},
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/admin/OrderView.vue'),
        mate:{role:["admin","user"]},
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
    let allowRoleList = to.mate.role;

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