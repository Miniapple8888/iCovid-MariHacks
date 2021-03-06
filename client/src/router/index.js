import Vue from 'vue';
import VueRouter from 'vue-router';
import VueHead from 'vue-head';
import Home from '../views/Home.vue';
import Chart from '../views/Chart.vue';
import LiveSimulation from '../views/LiveSimulation.vue';
import LiveSimulationAR from '../views/LiveSimulationAR.vue';
import Statistics from '../views/Statistics.vue';
import About from '../views/About.vue';
import SelfTest from '../views/SelfTest.vue';

Vue.use(VueHead);
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/live-simulation/',
    name: 'Live Simulation',
    component: LiveSimulation,
  },
  {
    path: '/live-simulation/ar',
    name: 'Live Simulation AR',
    component: LiveSimulationAR,
  },
  {
    path: '/charts/',
    name: 'Chart',
    component: Chart,
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics,
  },
  {
    path: '/self-test',
    name: 'Self Test',
    component: SelfTest
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