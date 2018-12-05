import Vue from 'vue';
import Router from 'vue-router';
import store from '../vuex'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login',
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/login'],resolve),
    },
    {
      path:'/home',
      name:'home',
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
          path:'guanli',
          name:'guanli',
          component:resolve => require(['@/page/guanli'],resolve)
        }
      ]
    },
    {
      path:'*',
      component:resolve => require(['@/components/404'],resolve)
    }
  ],
});


