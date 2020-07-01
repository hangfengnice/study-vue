import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import './assets/reset.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

const requireComponent = require.context('./views', false, /\.vue$/)

console.log(
  requireComponent.keys().forEach(filename => {
    console.log(filename)
    console.log(requireComponent(filename).default.name)
  })
)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
