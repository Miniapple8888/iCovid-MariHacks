<template>
    <div id="container" >
      
      <h1>Live Simuation in Augmented Reality</h1>
        <p>Visualize COVID-19 data in 3d with augmented reality technology.</p>
        <p>To access the AR application, click on the following link and scan the following pattern with your integrated camera.</p>
        <img src="../assets/pattern1.png"  />
        <img src="../assets/pattern.png"  />
        <a href="https://afternoon-sierra-62737.herokuapp.com/live-simulation-ar">Link to AR simulation</a>
    </div>
</template>
<script>

export default {
    head: {
    title: {
      inner: 'Live Simulation Augmented Reality',
      separator: ' - ',
      complement: 'iCovid',
    },
  },
  name: "LiveSimulationAR",
}
</script>
<style scoped>
div {
  margin-left: 374px;
  text-align: left;
}
img {
  margin: auto;
  max-width: 200px;
  max-height: 100px;
}
</style>
