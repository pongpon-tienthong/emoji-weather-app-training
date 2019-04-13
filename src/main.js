import Vue from 'vue'
import App from './WeatherBoard.vue'
import 'bootswatch/dist/superhero/bootstrap.min.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#emoji-weather-app')
