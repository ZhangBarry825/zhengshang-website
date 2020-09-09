import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'b0nN1SLy6xKgqtT07XkAgVGMVMdqaUyZ'
})

import VueAnimateNumber from 'vue-animate-number'
Vue.use(VueAnimateNumber)

import {animateFun} from './utils/common.js';
Vue.prototype.$ami = animateFun;

Vue.prototype.$dia = ()=>{
  var form = document.createElement('form');
  form.action = 'https://live02.wasnnznyy.com/chat/chat/rRRLt%40AwGdSzybKiEGFYfA%24%24?lng=cn';
  form.target = '_blank';
  form.method = 'POST';
  document.body.appendChild(form);
  form.submit();
};

let author={
  'powered by': 'BarryZhang',
  'email':'530027054@qq.com'
}
console.warn(author)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
