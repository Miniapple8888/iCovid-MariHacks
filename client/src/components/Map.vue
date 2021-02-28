<template>
    <div id="container">
      <vue-topprogress ref="topProgress"></vue-topprogress>
      <div class="enableBut">
        <b-button v-b-modal.modal-1 variant="primary">Launch Live Simulator</b-button>
        <b-button variant="danger" id="run">Run Configuration</b-button>
      </div>
      <b-modal id="modal-1" title="Live Simulator">
        <p>Enter some parameter and check out in real-time the development of COVID!</p>
        <p>Number of people in contact with</p>
        <v-slider
            v-model="sliderPeople"
            class="align-center"
            :max="maxPeople"
            :min="minPeople"
            hide-details
          >
            <template v-slot:append>
              <v-text-field
                v-model="sliderPeople"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
              ></v-text-field>
            </template>
          </v-slider>
          <p>Efficiency of masks</p>
        <v-slider
            v-model="sliderMask"
            class="align-center"
            :max="maxMask"
            :min="minMask"
            hide-details
          >
            <template v-slot:append>
              <v-text-field
                v-model="sliderMask"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
              ></v-text-field>
            </template>
          </v-slider>
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
        minPeople: 0,
        maxPeople: 90,
        minMask: 0,
        maxMask: 100,
        sliderPeople: 40,
        sliderMask: 40,
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
     date: moment().substract(1, "days").format('YYYY-MM-DD'),
     subject: "confirmed",
   }).then((response) => {
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