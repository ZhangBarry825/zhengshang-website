import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
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
