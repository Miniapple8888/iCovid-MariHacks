<template>
    <div>
        <b-jumbotron>
            <template #header>iCovid <img src="../assets/logo.png" /></template>

            <template #lead>
            Gain real-time insight on the latest COVID19 trends.
            </template>
            <b-button variant="primary" href="https://github.com/Miniapple8888/iCovid-MariHacks">Check project</b-button>
        </b-jumbotron>
        <b-card title="Live Simulation" sub-title="Live COVID19 Simulation">
            <b-card-text>
            Display real-time COVID19 data on a map.
            </b-card-text>

            <b-button variant="primary" href="/live-simulation">Check Simulation</b-button>
        </b-card>
        <b-card title="Chart" sub-title="Real-time COVID19 chart">
            <b-card-text>
            Display confirmed, recovered, and death data!
            </b-card-text>

            <b-button variant="primary" href="/charts">Check Chart</b-button>
        </b-card>
    </div>
</template>
<script>

export default {
    name: 'Home',
  components: {
    
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
img {
    max-width: 50px;
    max-height: 50px;
    margin: auto;
}
div {
    text-align: left;
    margin-left: 175px;
}
</style>