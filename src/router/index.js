import Vue from 'vue';
import Router from 'vue-router';
import store from '../vuex'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      redirect: 'dashboard'
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/login'],resolve),
    },
    {
      path:'/',
      name:'home',
      redirect:'dashboard',
      component:resolve => require(['@/components/Home'],resolve),
    
      beforeEnter:(to,from,next) => {
        console.log(store.state.status)
        if(store.state.status || to.name === 'login'){
          next({
            path: '/login',
            query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
         }else{
           next();
          store.state.status=true;
         }
      },
      children:[
        {
          path:'/guanli',
          name:'guanli',
          component:resolve => require(['@/page/guanli'],resolve)
        },
        {
          path:'/zhiliao',
          name:'zhiliao',
          component:resolve => require(['@/page/gerenziliao'],resolve)
        },
        {//菜单栏展示路由地址  子路由加/ 就是把父路由的路径当成根路径
          path: '/dashboard',
          name: 'dashboard',
          component: resolve => require(['@/page/daohang'], resolve)
        },
      ]
    },
  
    ,
    {
      path:'*',
      component:resolve => require(['@/components/404'],resolve)
    }
  ],
});


