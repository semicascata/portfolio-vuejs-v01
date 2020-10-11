import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";

// bootstrap & style
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/styles.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
