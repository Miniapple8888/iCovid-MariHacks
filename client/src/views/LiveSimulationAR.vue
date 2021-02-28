<template>
    <div id="container" >
      
      <h1>Live Simuation in Augmented Reality</h1>
        <p>This project was made for Marihacks.</p>
        <p>Develop a computer program that can predict the future infection rates of variants. Curve fitting and Monte Carlo simulations would be a great add-on. In addition, a bonus point would be to simulate in a video game setting how certain actions can have an effect on case numbers.</p>
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
