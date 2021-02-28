<template>
    <div>
        <div class="small">
            <BarChart :chartData="dataColAge" :options="optionsAge"></BarChart>
            <Pie :chartData="dataGender" :options="optionsGender"></Pie>
            <BarChart :chartData="dataColProv" :options="optionsProv"></BarChart>
        </div>
    </div>
</template>
<script>
import BarChart from '../components/BarChart';
import Pie from '../components/Pie';

export default {
    data() {
      return {
          dataColAge: null,
          dataColProv: null,
          dataGender: null,
          optionsAge: null,
          optionsProv: null,
          optionsGender: null,
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
        'Pie':Pie,
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
            this.optionsAge = {
                title: {
                    display: true,
                    text: 'Distribution Of Covid Cases By Age',
                    fontSize: 28,
                    fontFamily: 'Avenir',
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Percentage (%)'
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Age Range (Years)'
                        }
                    }],
                }
            };
            this.optionsProv = {
                title: {
                    display: true,
                    text: 'Distribution Of Covid Cases by Province',
                    fontSize: 28,
                    fontFamily: 'Avenir',
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Percentage (%)'
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Provinces of Canada'
                        }
                    }],
                }
            };
            this.optionsGender = {
                title: {
                    display: true,
                    text: 'Distribution Of Covid Cases By Sex',
                    fontSize: 28,
                    fontFamily: 'Avenir',
                }
            };
            this.dataColAge = {
            labels: this.ageRanges,
            datasets: [{
                barPercentage: 0.5,
                barThickness: 20,
                maxBarThickness: 25,
                minBarLength: 5,
                label: "Age",
                backgroundColor: '#1E88FF',
                data: this.percentages,
            }],
            };
            this.dataColProv = {
            labels: this.provinces,
            datasets: [{
                barPercentage: 0.5,
                barThickness: 17,
                maxBarThickness: 22,
                minBarLength: 2,
                label: "Provinces",
                backgroundColor: '#1E88FF',
                data: this.percentProv,
            }],};
            this.dataGender = {
                labels: this.genders,
                datasets: [{
                    data: this.percentGen,
                    backgroundColor: ["#0074D9", "#FF4136"]
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
