<script>
import { Doughnut } from 'vue-chartjs';

export default {
    name: "Doughnut",
  extends: Doughnut,
  props: ['chartData','options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>