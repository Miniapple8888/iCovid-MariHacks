import Vue from 'vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import router from './router/index.js';
import BarChart from './BarChart';
import Doughnut from './Doughnut';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSidebarMenu);
Vue.component('BarChart', BarChart);
Vue.component('Dougnhut', Doughnut);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
