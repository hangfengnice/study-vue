// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

import Vue from 'vue'
const AlertComponent = Vue.extend({
  template: '<div>{{ message }}</div>',
  data() {
    return {
      message: 'hello'
    }
  }
})

const component = new AlertComponent().$mount()
console.log(component.$el)
document.body.appendChild(component.$el)
