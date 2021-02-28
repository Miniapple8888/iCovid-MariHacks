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
          icon: 'fa fa-home',
        },
        {
          href: '/live-simulation',
          title: 'Live Simulation',
          icon: 'fa fa-gamepad',
          child: [
            {
              href: '/live-simulation/ar',
              title: 'Augmented Reality',
              icon: 'fa fa-mobile'
            }
          ]
        },
        {
          href: '/charts',
          title: 'Charts',
          icon: 'fa fa-chart-line',
        }, 
        {
          href: '/statistics',
          title: 'Statistics',
          icon: 'fa fa-chart-bar',
        },
        {
          href: '/self-test',
          title: 'Self-test',
          icon: 'fa fa-vial',
        },
        {
          href: '/about',
          title: 'About',
          icon: 'fa fa-user',
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
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.1/css/all.min.css');
body {
  font-family: 'Font Awesome 5 Free',Avenir, sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.v-sidebar-menu .vsm--arrow::after {
  content: '\f105';
  font-family: 'Font Awesome 5 Free';
}
.btn {
  font-family: 'Font Awesome 5 Free',Avenir, sans-serif;
  color: #fff;
}
</style>
