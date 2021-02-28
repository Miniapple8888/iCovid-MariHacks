<template>
    <div id="home">
        <b-jumbotron>
            <template #header>iCovid <img src="../assets/logo.png" /></template>

            <template #lead>
            Gain real-time insight on the latest COVID19 trends.
            </template>
            <b-button target="__blank" variant="primary" href="https://github.com/Miniapple8888/iCovid-MariHacks"><b-icon-github></b-icon-github>     Checkout project</b-button>
        </b-jumbotron>
        <b-container class="bv-example-row">
        <b-row>
            <b-col>
                <b-card title="Live Simulation" sub-title="Live COVID19 Simulation">
                    <b-card-text>
                    Display real-time COVID19 data on a map.
                    </b-card-text>

                    <b-button variant="primary" to="live-simulation">Check Simulation</b-button>
                </b-card>
            </b-col>
            <b-col>
                <b-card title="Chart" sub-title="Real-time COVID19 chart">
                    <b-card-text>
                    Display confirmed, recovered, and death data!
                    </b-card-text>

                    <b-button variant="primary" to="charts">Check Chart</b-button>
                </b-card>
            </b-col>
            <b-col>
                <b-card title="Statistics" sub-title="COVID 19 Statistics">
                    <b-card-text>
                    Display distribution of COVID19 cases among age, sex, and provinces!
                    </b-card-text>

                    <b-button variant="primary" to="statistics">Check Statistics</b-button>
                </b-card>
            </b-col>
        </b-row>
        </b-container>
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
#home {
    text-align: left;
    margin-left: 345px;
}
.jumbotron {
    padding: 4rem 2rem;
}
.col {
    margin-right: 10px;
}
</style>