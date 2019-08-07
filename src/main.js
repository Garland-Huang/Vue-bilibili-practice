import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 导入jq
// import $ from "jquery"
// Vue.use($)
// 导入axios进行数据请求
import axios from "axios";
// 将axios加入到全局作用域中
Vue.prototype.$axios = axios;
// 导入vue-jsonp
import VueJsonp from "vue-jsonp"
Vue.use(VueJsonp)
// 导入mint-ui css样式
import "./assets/css/style.css";
import "./assets/mui/css/mui.css";
// 导入vant UI框架
import vant from 'vant';
import 'vant/lib/index.css';
Vue.use(vant);
import 'swiper/dist/css/swiper.css';
// Vue.use(Mui)     //引入时发生报错
// 方式一：导入mint-ui
import MintUI from 'mint-ui'
Vue.use(MintUI)
// 方式二：导入用到的mint-ui组件，并进行绑定
// import {Tabbar, TabItem} from 'mint-ui';
// Vue.use(Tabbar).use(TabItem);
// 导入iconfont字体图标
import "./assets/font/iconfont.css";
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
