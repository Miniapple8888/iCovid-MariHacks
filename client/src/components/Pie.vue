<script>
import { Pie } from 'vue-chartjs';

export default {
    name: "Pie",
  extends: Pie,
  props: ['chartdata','options'],
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>