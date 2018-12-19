// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex'
import ElementUI from 'element-ui';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
Vue.prototype.$http=axios;
// 设置跨域请求API
Vue.prototype.HOST = '/api'
// 设置默认的post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 设置请求拦截器
// axios.interceptors.request.use((config) => {
//     // 读取token
//   let token = localStorage.getItem('x-auth-token');
//   // 判断是否有token 如果存在的话，则每个http header都加上token
//   if(token){
//     config.headers.token=`${token}`;
//     return config;
//   }
// },err => {
//     return Promise.reject(err);
// })
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
