<template>
  
  <div id="app">
    <sidebar-menu :menu="menu" :hideToggle="menuCollapsed"/>
    <div>
        <router-view></router-view>
      </div>
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
          title: 'Home',
          icon: 'fa fa-user'
        },
        {
          href: '/live-simulation',
          title: 'Live Simulation',
          icon: 'fa fa-user'
        },
        {
          href: '/charts',
          title: 'Charts',
          icon: 'fa fa-chart-area'
        }, 
        {
          href: '/about',
          title: 'About',
          icon: 'fa fa-user'
        }, 
     ],
    menuCollapsed:true,
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
  /*margin-top: 60px;*/
}
</style>
