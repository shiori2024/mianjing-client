import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 全局样式
import '@/styles/reset.css'
// 全局引入iconfont
import '@/styles/font_4436380_v8be49m1gig.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
