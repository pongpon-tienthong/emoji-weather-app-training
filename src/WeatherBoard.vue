<template>
  <div id="emoji-weather-app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Emoij Weather 😎</a>
    </nav>
    <main class="container mt-2 home">
      <div class="row">
        <!-- Your components should go here -->
        <weather-search></weather-search>
        <weather-card></weather-card>
      </div>
    </main>
  </div>
</template>

<script>
import WeatherSearch from "@/components/WeatherSearch.vue";
import WeatherCard from "@/components/WeatherCard.vue";

export default {
  name: "WeatherBoard",
  components: {
    WeatherSearch,
    WeatherCard
  }
};
</script>
