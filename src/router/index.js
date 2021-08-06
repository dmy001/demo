import Vue from "vue";
import Router from "vue-router";
import Login from '@/components/Login.vue';
import Home from '@/components/Home'
import Welcome from '@/components/Welcome'
import Users from '@/components/user/Users'

Vue.use(Router);

const router = new Router({
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    {
      path: "/home", component: Home, redirect: '/welcome',
      children: [
        { path: "/welcome", component: Welcome },
        { path: '/users', component: Users }
      ]
    },
  ]
});
//挂在路由导航守卫
router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from代表从哪个路径跳转过来
  //next放行
  if (to.path === "/login") return next();
  //获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next("/login")
  next()
})
export default router