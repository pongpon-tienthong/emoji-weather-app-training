<template>
  <div id="emoji-weather-app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Emoij Weather 😎</a>
    </nav>
    <main class="container mt-2 home">
      <div class="row">
        <weather-search v-on:onSearchLocationEntered="onSearchLocationEntered"></weather-search>
        <weather-card></weather-card>
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
  methods: {
    onSearchLocationEntered(location) {
      console.log('====================================');
      console.log(location);
      console.log('====================================');
    }
  }
};
</script>
