<template>
    <div>
        <vue-topprogress ref="topProgress"></vue-topprogress>
        <div class="selectionOptions">
            <label for="startDate">Country</label>
            <b-form-select v-model="selectedCountry" :options="countryOptions"></b-form-select>
            <label for="startDate">Start Date</label>
            <b-form-datepicker id="startDate" v-model="startDate" class="mb-2"></b-form-datepicker>
            <label for="startDate">End Date</label>
            <b-form-datepicker id="endDate" v-model="endDate" class="mb-2"></b-form-datepicker>
            <label for="startDate">Subject</label>
            <b-form-select v-model="selectedSubject" :options="subjectObptions"></b-form-select>
        </div>
        <div class="small">
            <line-chart :chart-data="datacollection"></line-chart>
            <b-button variant="primary" @click="updateChart">Update</b-button>
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
    data() {
        return {
            datacollection: null,
            selectedCountry: 'Canada',
            countryOptions: [
                { value: 'Canada', text: 'Canada' },
                { value: 'USA', text: 'United States' },
                { value: 'Mexico', text: 'Mexico' },
            ],
            selectedSubject: 'confirmed',
            subjectObptions: [
                { value: 'confirmed', text: 'Confirmed' },
                { value: 'unconfirmed', text: 'Unconfirmed' },
                { value: 'deaths', text: 'Deaths' },
            ],
            startDate: '2021-01-25',
            endDate: '2021-02-26',
            data: [],
            dates: [],
            numbers: [],
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
                label: 'Dataset',
                backgroundColor: '#1E88FF',
                data: this.numbers,
                },
            ]};
        },
        updateChart(e) {
            e.preventDefault();
            this.getData();
        },
        getRandomInt () {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        },
    },
}
</script>
<style scoped>
.small {
    max-width: 450px;
    margin:  150px auto;
  }
  .selectionOptions {
      float: right;
      margin-right: 50px;
      padding: 20px;
      width: 200px;
  }
  
</style>