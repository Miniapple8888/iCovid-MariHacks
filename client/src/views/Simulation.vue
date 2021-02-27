<template>
    <div>
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
      inner: 'Simulation',
      separator: ' - ',
      complement: 'iCovid',
    },
  },
};
</script>
<style scoped>
</style>