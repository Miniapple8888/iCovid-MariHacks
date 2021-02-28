<template>
    <div id="container"></div>
</template>
<script>
import * as Three from 'three';

export default {
    head: {
    title: {
      inner: 'Live Simulation Augmented Reality',
      separator: ' - ',
      complement: 'iCovid',
    },
  },
  name: "LiveSimulationAR",
  data() {
      return {
        camera: null,
        scene: null,
        renderer: null,
      }
  },
  methods: {
    init: function() {
        let container = document.getElementById('container');

        this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10);
        this.camera.position.z = 1;

        this.scene = new Three.Scene();
        this.scene.background = new Three.Color( 0xff0000 );

        let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
        let material = new Three.MeshNormalMaterial();

        this.mesh = new Three.Mesh(geometry, material);
        this.scene.add(this.mesh);

        this.renderer = new Three.WebGLRenderer({antialias: true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);

    },
    animate: function() {
        requestAnimationFrame(this.animate);
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
      console.log("hey");
      this.init();
      this.animate();
  }
}
</script>
<style scoped>
#container {
 float: right;
 width: 75vw;
 height: 100vh;
}
</style>
