import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import './assets/css/global.css'

import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://timemeetyou.com:8889/api/private/v1/'
Vue.prototype.$http = axios
//axios请求拦截
axios.interceptors.request.use(config => {
  // console.log(config);
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.config.productionTip = false;


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
