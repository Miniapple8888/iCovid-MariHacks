<template>
  
  <div id="app">
    <sidebar-menu :menu="menu" />

  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu';

export default {
  name: 'App',
  components: {
    SidebarMenu,
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
      href: '/charts',
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
