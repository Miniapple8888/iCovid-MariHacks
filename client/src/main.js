import Vue from 'vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vuetify from 'vuetify';
import router from './router/index.js';
import BarChart from './BarChart';
import Doughnut from './Doughnut';
import Pie from './Pie';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import 'vuetify/dist/vuetify.min.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSidebarMenu);
Vue.use(Pie);
Vue.use(Vuetify);
Vue.component('BarChart', BarChart);
Vue.component('Dougnhut', Doughnut);
Vue.component('Pie', Pie);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
