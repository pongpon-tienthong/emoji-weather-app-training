<template>
  <div id="emoji-weather-app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Emoij Weather 😎</a>
    </nav>
    <main class="container mt-2 home">
      <div class="row">
        <weather-search v-on:onSearchLocationEntered="onSearchLocationEntered"></weather-search>
        <weather-card 
          v-for="({ forecast, address }, index) in forecasts" 
          :key="index" 
          :forecast="forecast" 
          :address="address">
        </weather-card>
      </div>
    </main>
  </div>
</template>

<script>
import WeatherSearch from "@/components/WeatherSearch.vue";
import WeatherCard from "@/components/WeatherCard.vue";
import DarkSkyAPI from "@/apis/DarkSkyAPI";

export default {
  name: "WeatherBoard",
  components: {
    WeatherSearch,
    WeatherCard
  },
  data() {
    return {
      forecasts: [],
      locations: []
    };
  },
  methods: {
    getWeatherData(lat, lon) {
      DarkSkyAPI.getAddress(lat, lon).then(addressObj => {
        const address = [addressObj.name, addressObj.street].join(" ");
        DarkSkyAPI.getForecast(lat, lon).then(forecast => {
          this.forecasts.push({
            forecast,
            address
          });

          this.locations.push({
            lat: lat,
            lon: lon
          });

          localStorage.locations = JSON.stringify(this.locations);
        });
      });
    },
    onSearchLocationEntered(location) {
      DarkSkyAPI.getCoordinates(location).then(coordinates => {
        this.getWeatherData(coordinates.latitude, coordinates.longitude);
      });
    }
  },
  mounted() {
    if(localStorage.locations) {
      const locations = JSON.parse(localStorage.locations);
      
      // reset the storage
      localStorage.locations = null;

      for (const location of locations) {
        this.getWeatherData(location.lat, location.lon);
      }
    }
  }
};
</script>
