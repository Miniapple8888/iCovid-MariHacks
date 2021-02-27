<template>
    <div id="container">
        <div id="mapContainer"></div>
    </div>
</template>
<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
 name: "Map",
 data() {
   return{
     center: [51.505, -0.09]
   };
 },
 methods: {
   setupLeafletMap: function () {
     const mapDiv = L.map("mapContainer").setView(this.center, 13);
     L.tileLayer(
       "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
       {
         attribution:
           'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
         maxZoom: 18,
         id: "mapbox/streets-v11",
         title: 512,
         accessToken: 'pk.eyJ1IjoibWluaWFwcGxlODg4OCIsImEiOiJja2xvMGJweGIwbjM2MnZtZm1xenM4b25oIn0.wJqXESQ0ZWHUSZEo7-5ZIA',
       },
     ).addTo(mapDiv);
     //var marker = L.marker([51.5, -0.09]).addTo(mapDiv);
     var marker = L.circleMarker([51.5, -0.09], radius=20).addTo(mapDiv);
     marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
   },
 },
 mounted() {
   this.setupLeafletMap();
 },
};
</script>
<style>
#mapContainer {
    float: right;
 width: 75vw;
 height: 100vh;
}
</style>