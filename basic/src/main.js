import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Directives from './directives/index'

Vue.use(Directives)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
