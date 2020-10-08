import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

// bootstrap
import './assets/scss/styles.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
