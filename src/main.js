import Vue from 'vue'
import App from './App.vue'
// import { L } from 'vue2-leaflet';
// import "leaflet/dist/leaflet.css";
// delete L.Icon.Default.prototype._getIconUrl;

// // Vue.component('v-map', LMap);
// // Vue.component('v-tilelayer', LTileLayer);
// // Vue.component('v-marker', LMarker);
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')

