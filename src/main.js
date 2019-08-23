import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './bus'
import iview from 'iview'
import 'iview/dist/styles/iview.css'

// if(process.env.NODE_ENV !== 'production') require('./mock')
import CountTo from './components/countTo'
Vue.use(iview)

Vue.prototype.$bus = Bus

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // render: h => {
  //   return h(CountTo,{
  //       "class": ['count-to'],
  //       props: {
  //         endVal: 100
  //       },
  //       on: {
  //         'on-animation-end': val => {
  //           console.log('animation-end')
  //         }
  //       },
  //       nativeOn: {
  //         'click': () => {
  //           console.log('click!')
  //         }
  //       }
  //     }
  //   );
  // }
  render: h => h(App)
}).$mount('#app')
