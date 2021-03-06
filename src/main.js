import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/store'
import VueOffline from 'vue-offline'
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.css";


import $ from 'jquery'
window.$ = $;
window.jQuery = $;

Vue.use(VueOffline);
Vue.prototype.$iziToast = iziToast;

import "@/assets/css/plugins.css"
import "@/assets/css/main.css"
const getStorage = localStorage.getItem("orderData");
if (getStorage === null) {
  let orderData = {
    orders: [],
    order_details: []
  };
  localStorage.setItem("orderData", JSON.stringify(orderData));
}
Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
