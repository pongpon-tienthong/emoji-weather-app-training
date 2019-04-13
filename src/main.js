import Vue from 'vue'
import WeatherBoard from './WeatherBoard.vue'
import 'bootswatch/dist/superhero/bootstrap.min.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(WeatherBoard),
}).$mount('#emoji-weather-app')
