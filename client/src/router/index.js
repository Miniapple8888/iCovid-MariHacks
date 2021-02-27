import Vue from 'vue';
import VueRouter from 'vue-router';
import VueHead from 'vue-head';
import Home from '../views/Home.vue';
import Chart from '../views/Chart.vue';
import Simulation from '../views/Simulation.vue';
import About from '../views/About.vue';

Vue.use(VueHead);
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/simulation/',
    name: 'Simulation',
    component: Simulation,
  },
  {
    path: '/charts/',
    name: 'Chart',
    component: Chart,
  },
  {
    path: '/about/',
    name: 'About',
    component: About,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;