<template>
  
  <div id="app">
    <sidebar-menu :menu="menu" />
    <Map />

  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu';
import Map from './components/Map.vue';

export default {
  name: 'App',
  components: {
    SidebarMenu,
    Map,
  },
  data() {
    return {
      menu: [
        {
          header: true,
          title: 'iCovid',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Simulation',
          icon: 'fa fa-user'
     },
     {
      href: '#',
      title: 'Charts',
      icon: 'fa fa-chart-area'
     }, 
     ]
    }
  },
  async created() {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
