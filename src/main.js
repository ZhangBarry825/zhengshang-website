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

let author={
  'construct by': 'BarryZhang',
  'email':'530027054@qq.com'
}
console.warn(author)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
