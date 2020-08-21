import Vue from 'vue'
import App from './App.vue'
import router from './router'
import imgLazy from '@/directive/imgLazy'
import backBtn from '@/components/BackBtn.vue'

Vue.component('backBtn', backBtn)

Vue.directive('imgLazy', imgLazy)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
