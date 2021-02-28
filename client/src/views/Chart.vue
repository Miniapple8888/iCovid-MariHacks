<template>
    <div>
        <vue-topprogress ref="topProgress"></vue-topprogress>
        <div class="message">
            <b-alert variant="success" show>{{ message }}</b-alert>
        </div>
        <div class="selectionOptions">
            <label for="startDate">Country</label>
            <b-form-select v-model="selectedCountry" :options="countryOptions"></b-form-select>
            <label for="startDate">Start Date</label>
            <b-form-datepicker id="startDate" v-model="startDate" class="mb-2"></b-form-datepicker>
            <label for="startDate">End Date</label>
            <b-form-datepicker id="endDate" v-model="endDate" class="mb-2"></b-form-datepicker>
            <label for="startDate">Subject</label>
            <b-form-select v-model="selectedSubject" :options="subjectObptions"></b-form-select>
            <b-button variant="primary" @click="updateChart" id="update">Update</b-button>
        </div>
        <div class="small">
            <line-chart :chart-data="datacollection"></line-chart>
        </div>
    </div>
</template>
<script>
import LineChart from '../LineChart.js';
import http from '../../http-common';
import { vueTopprogress } from 'vue-top-progress';

export default {
    components: {
        LineChart,
        vueTopprogress,
    },
    head: {
    title: {
      inner: 'Charts',
      separator: ' - ',
      complement: 'iCovid',
    },
  },
    data() {
        return {
            datacollection: null,
            selectedCountry: 'Canada',
            countryOptions: [
                { value: 'Canada', text: 'Canada' },
                { value: 'US', text: 'United States' },
                { value: 'Mexico', text: 'Mexico' },
                { value: 'France', text: 'France' },
                { value: 'United Kingdom', text: 'United Kingdom' },
                { value: 'Spain', text: 'Spain' },
                { value: 'Italy', text: 'Italy' },
                { value: 'Russia', text: 'Russia' },
                { value: 'China', text: 'China' },
                { value: 'Germany', text: 'Germany' },
            ],
            selectedSubject: 'confirmed',
            subjectObptions: [
                { value: 'confirmed', text: 'Confirmed' },
                { value: 'recovered', text: 'Recovered' },
                { value: 'deaths', text: 'Deaths' },
            ],
            startDate: '2021-01-25',
            endDate: '2021-02-26',
            data: [],
            dates: [],
            numbers: [],
            successfulFetch: false,
            failureFetch: false,
            message: '',
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData() {
            this.$refs.topProgress.start();
            http.post('/stats', {
                country: this.selectedCountry,
                startDate: this.startDate,
                endDate: this.endDate,
                subject: this.selectedSubject,
            }).then((response) => {
                console.log(response.data.msg);
                this.message = response.data.msg;
                let data = response.data.data;
                
                this.data = data;
                for(var i = 0; i < data.length; i++) {
                    this.dates[i] = data[i].date;
                    this.numbers[i] = data[i].value;
                }
                //console.log(this.dates);
                this.fillData();
                this.$refs.topProgress.done();
            });
        },
        fillData() {
            this.datacollection = {
            labels: this.dates,
            datasets: [
                {
                label: 'Total ' + this.selectedSubject + ' in ' + this.selectedCountry + " for COVID 19",
                backgroundColor: '#1E88FF',
                data: this.numbers,
                },
            ]};
        },
        updateChart(e) {
            e.preventDefault();
            this.getData();
        },
    },
}
</script>
<style scoped>
.small {
    max-width: 500px;
    margin:  50px auto;
  }
  .selectionOptions {
      float: right;
      margin-right: 50px;
      margin-top: 50px;
      padding: 20px;
      width: 225px;
  }
  .message {
      margin-left: 350px;
      height: 20px;
  }
  #update {
      margin-top: 15px;
  }
</style>