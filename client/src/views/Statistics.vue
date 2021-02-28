<template>
    <div>
        <div class="small">
            <BarChart :chartData="dataColAge"></BarChart>
            <Doughnut :chartData="dataGender"></Doughnut>
            <BarChart :chartData="dataColProv"></BarChart>
        </div>
    </div>
</template>
<script>
import BarChart from '../components/BarChart';
import Doughnut from '../components/Doughnut';

export default {
    data() {
      return {
          dataColAge: null,
          dataColProv: null,
          dataGender: null,
          percentProv: [
              34.642668,
                33.246642,
                15.430972,
                9.166975,
                3.688673,
                3.284814,
                0.189228,
                0.166274,
                0.113374,
                0.041365,
                0.013633,
                0.008389,
                0.005476,
                0.001515,
          ],
          provinces: [
              "Ontario",
                "Quebec",
                "Alberta",
                "British Columbia",
                "Manitoba",
                "Saskatchewan",
                "Nova Scotia",
                "New Brunswick",
                "NL",
                "Nunavut",
                "PEI",
                "Yukon",
                "NWT",
                "Repatriated",
          ],
          percentages: [
              8.950015, 
              12.170860, 
              10.072569, 
              8.764865, 
              8.159194,
              5.185605, 
              2.737404, 
              1.904169
            ],
            ageRanges: [
                "<20",
                "20-29",
                "30-39",  
                "40-49",   
                "50-59",    
                "60-69",    
                "70-79",     
                "80+",
            ],
            genders: [
                "Male",
                "Female",
            ],
            percentGen: [
                49.8, 
                50.2,
            ]
      };
    },
    component: {
        'BarChart':BarChart,
        'Doughnut':Doughnut,
    },
    head: {
        title: {
        inner: 'Statistics',
        separator: ' - ',
        complement: 'iCovid',
        },
    },
    mounted() {
        this.fillData();
    },
    methods: {
        fillData() {
            this.dataColAge = {
            labels: this.ageRanges,
            datasets: [{
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                label: "Age",
                backgroundColor: '#1E88FF',
                data: this.percentages
            }],
            };
            this.dataColProv = {
            labels: this.provinces,
            datasets: [{
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                label: "Provinces",
                backgroundColor: '#1E88FF',
                data: this.percentProv
            }],};
            this.dataGender = {
                label: this.genders,
                datasets: [{
                    data: this.percentGen,
                }],
            };
        },
    },
}
</script>
<style scoped>
.small {
    max-width: 450px;
    margin:  50px auto;
  }
</style>
