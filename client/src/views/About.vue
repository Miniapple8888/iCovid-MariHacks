<template>
    <div>
        <h1>About</h1>
        <p>This project was made for Marihacks.</p>
        <h3>Covid19 Modeling</h3>
        <p>Develop a computer program that can predict the future infection rates of variants. Curve fitting and Monte Carlo simulations would be a great add-on. In addition, a bonus point would be to simulate in a video game setting how certain actions can have an effect on case numbers.</p>
    </div>
</template>
<script>
export default {
    head: {
    title: {
      inner: 'About',
      separator: ' - ',
      complement: 'iCovid',
    },
  },
}
</script>
<style scoped>
div {
    margin-top: 10px;
    margin-left: 400px;
    padding-right: 20px;
    text-align: left;
}
</style>
