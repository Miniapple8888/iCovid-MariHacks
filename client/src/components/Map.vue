<template>
    <div id="container">
      <vue-topprogress ref="topProgress"></vue-topprogress>
      <div class="enableBut">
        <b-button v-b-modal.modal-1 variant="primary">Launch Live Simulator</b-button>
        <b-button v-b-modal.modal-2 variant="danger" id="run" @click="runConfig">Run Configuration</b-button>
        
      </div>
      <b-modal id="modal-1" title="Live Simulator">
        <p>Enter some parameter and check out in real-time the development of COVID!</p>
        <p>Percentage of people who wear a mask (%)</p>
        <v-slider
            v-model="sliderWearMask"
            class="align-center"
            :max="maxWearMask"
            :min="minWearMask"
            hide-details
          >
            <template v-slot:append>
              <v-text-field
                v-model="sliderWearMask"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
              ></v-text-field>
            </template>
          </v-slider>
          <p>Mask Blocking Rate (%)</p>
        <v-slider
            v-model="sliderMaskEffectiveness"
            class="align-center"
            :max="maxMaskEffectiveness"
            :min="minMaskEffectiveness"
            hide-details
          >
            <template v-slot:append>
              <v-text-field
                v-model="sliderMaskEffectiveness"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
              ></v-text-field>
            </template>
          </v-slider>
          <p>No Mask Blocking Rate (%)</p>
        <v-slider
            v-model="sliderNoMaskEffectiveness"
            class="align-center"
            :max="maxNoMaskEffectiveness"
            :min="minNoMaskEffectiveness"
            hide-details
          >
            <template v-slot:append>
              <v-text-field
                v-model="sliderNoMaskEffectiveness"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
              ></v-text-field>
            </template>
          </v-slider>
          <p>Hygiene level (%)</p>
        <v-slider
            v-model="sliderHygiene"
            class="align-center"
            :max="maxHygiene"
            :min="minHygiene"
            hide-details
          >
            <template v-slot:append>
              <v-text-field
                v-model="sliderHygiene"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
              ></v-text-field>
            </template>
          </v-slider>
          <p>Recovery Time (Days)</p>
        <v-slider
            v-model="sliderRecovery"
            class="align-center"
            :max="maxRecovery"
            :min="minRecovery"
            hide-details
          >
            <template v-slot:append>
              <v-text-field
                v-model="sliderRecovery"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
              ></v-text-field>
            </template>
          </v-slider>
          <p>Time to run simulation (Days)</p>
        <v-slider
            v-model="sliderDays"
            class="align-center"
            :max="maxDays"
            :min="minDays"
            hide-details
          >
            <template v-slot:append>
              <v-text-field
                v-model="sliderDays"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
              ></v-text-field>
            </template>
          </v-slider>
      </b-modal>
      <b-modal id="modal-2" title="Data">
        <p style="font-family: 'Courier-Sans';">
          {{ healthydeathdata }}
        </p>
        </b-modal>
      <div id="mapContainer"></div>
    </div>
</template>
<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import http from '../../http-common';
import { vueTopprogress } from 'vue-top-progress';
import moment from 'moment';

export default {
 name: "Map",
 components: {
        vueTopprogress,
    },
 data() {
   return{
     center: [51.505, -0.09],
        minWearMask: 0,
        maxWearMask: 100,
        minMaskEffectiveness: 0,
        maxMaskEffectiveness: 100,
        minNoMaskEffectiveness: 0,
        maxNoMaskEffectiveness: 100,
        minHygiene: 0,
        maxHygiene: 100,
        minRecovery: 1,
        maxRecovery: 30,
        minDays: 10,
        maxDays: 300,
        
        sliderWearMask: 40,
        sliderMaskEffectiveness: 80,
        sliderNoMaskEffectiveness: 40,
        sliderHygiene: 70,
        sliderRecovery: 14,
        sliderDays: 30,
        healthydeathdata: {},
   };
 },
 methods: {
   setupLeafletMap: function () {
     const mapDiv = L.map("mapContainer").setView(this.center, 3);
     L.tileLayer(
       "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
       {
         attribution:
           'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
           minZoom: 2,
         maxZoom: 18,
         id: "mapbox/streets-v11",
         title: 512,
         accessToken: 'pk.eyJ1IjoibWluaWFwcGxlODg4OCIsImEiOiJja2xvMGJweGIwbjM2MnZtZm1xenM4b25oIn0.wJqXESQ0ZWHUSZEo7-5ZIA',
       },
     ).addTo(mapDiv);
     this.getLiveData(mapDiv);
     //this.getLiveData(mapDiv);
     //var marker = L.marker([51.5, -0.09]).addTo(mapDiv);
    //  var marker = L.circleMarker([51.5, -0.09], {radius:20}).addTo(mapDiv);
    //  marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
   },
  getLiveData(mapDiv) {
   this.$refs.topProgress.start();
   http.post('/multi-stats', {
     includeAll: true,
    // countries: ["Canada", "US", "Mexico", "France", "China", "Japan", "Spain", 
    // "Germany", "Brazil", "Russia", "Australia", "India", "Sweden", "Argentina",
    // "United Kingdom", "Italy", "Greece", "Iran", "Romania", "Algeria", "Egypt", "New Zealand"],
     date: "2021-02-25",
     subject: "confirmed",
   }).then((response) => {
     console.log(String(moment().subtract(2, "days").format("YYYY-MM-DD")));
     let countriesData = response.data.data;
     for (let c = 0; c < countriesData.length; c++) {
      var strength = countriesData[c].data[0].value * 0.12;
      var color = "#fc9403"
      if (strength > 60) strength = 60; // max size
      if (strength < 15) strength = 15; // min size
      if (strength <= 45) {
        if (strength == 15) {
          color = "#02c208" // green
        } else {
          color = "#fc9403" // orange
        }
      } else {
        color = "#E0301E" // red
      }
      var marker = L.circleMarker([countriesData[c].data[0].lat, countriesData[c].data[0].long], {radius:strength, color:color}).addTo(mapDiv);
      marker.bindPopup("<b>" + countriesData[c].country + "</b><br>" + countriesData[c].data[0].value + " confirmed today" + "</br>").openPopup();
    }
     this.$refs.topProgress.done();
  });
  },
  runConfig() {
    console.log("executed")
    http.post('/generate-simulation', {
      population: 1000, 
      mask_percentage: this.sliderWearMask, 
      mask_effectiveness: this.sliderMaskEffectiveness, // How much does the mask block the virus (0: no effect, 1: 100% effectiveness)
      no_mask_effectiveness: this.sliderNoMaskEffectiveness, // How much does the surrounding air block the virus (0: the virus does not get lost in the air, 1: the virus cannot go throught the air)
      hygiene: this.sliderHygiene, // How clean are people (0: ablsolutely disgusting, 1: clean af)
      days_to_recover: this.sliderRecovery, // How many days does it take for someone to recover (1 to inf days)
      days: this.sliderDays
      }).then((response) => {
      console.log(response.data.data);
      this.healthydeathdata = response.data.data;
    });
  }
 },
 mounted() {
   this.setupLeafletMap();
 },
};
</script>
<style scoped>
#mapContainer {
    float: right;
 width: 73vw;
 height: 100vh;
 z-index: 1;
}
.enableBut {
  position: absolute;
  left: 500px;
  top: 15px;
  z-index: 100;
  font-family: 'Font Awesome 5 Free',Avenir, sans-serif;
  color: #fff;
}

#run {
  position: relative;
  left: 5px;
}

.modal-dialog {
  font-family: 'Font Awesome 5 Free',Avenir, sans-serif;
}
.btn {
    color: #fff;
  }
</style>