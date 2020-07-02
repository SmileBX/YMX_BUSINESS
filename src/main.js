// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'swiper/css/swiper.css';
import App from './App'
import HeaderNav from './components/headNav';
import router from './router'
import {getToken} from './utils/auth.js'
import ElementUI from 'element-ui';
import { Message ,MessageBox } from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/js/jquery-3.4.1.min.js';
import './assets/js/set_rem.js';

import store from "./store/index";




Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.use(ElementUI, { locale })

Vue.component('Header-nav', HeaderNav); // 初始化组件
Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//       if (getToken) {  // 通过vuex state获取当前的token是否存在
//           next();
//       }
//       else {
//           next({
//               path: '/login',
//               query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//           })
//       }
//   }
//   else {
//       next();
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data:{
      Bus:new Vue()
  },
  components: { App,HeaderNav },
  template: '<App/>'
})
