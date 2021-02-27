<template>
    <div>
        <h1>Map</h1>
        <Map/>
    </div>
</template>
<script>
import Map from '../components/Map.vue';

export default {
    name: 'App',
  components: {
    Map,
  },
  head: {
    title: {
      inner: 'Home',
      separator: ' - ',
      complement: 'iCovid',
    },
  },
};
</script>
<style scoped>
</style>