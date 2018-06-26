// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import "./assets/reset.css"
import Vuex from 'vuex'

Vue.config.productionTip = false
//axios引入
Vue.prototype.$axios=axios
//vuex注册
Vue.use(Vuex);
var store=new Vuex.Store({
	state:{
       username:'',   //用户名
       isLogin:false  //用户登陆状态
	},
	mutations:{
		login(state,userInfo,isLogin){
      state.username=userInfo.phone;
      state.isLogin=isLogin
		}
	}
});
//swiper引入
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
