<template>
    <div>
        <Map/>
    </div>
</template>
<script>
import Map from '../components/Map.vue';

export default {
    name: 'LiveSimulation',
  components: {
    Map,
  },
  head: {
    title: {
      inner: 'Live Simulation',
      separator: ' - ',
      complement: 'iCovid',
    },
  },
};
</script>
<style scoped>
</style>