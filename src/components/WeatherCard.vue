<template>
  <div class="col-12 col-sm-6 col-lg-4 text-center">
    <div class="card text-white bg-secondary mb-3">
      <div class="card-header">{{ address }}</div>
      <div class="card-body">
        <h4 class="card-title">{{ forecast.currently.summary }}</h4>
        <div class="card-text temperature">
          <span class="icon-emoji">{{ icons[forecast.currently.icon] }}</span>
          {{ forecast.currently.temperature }} ℉
        </div>
        <div class="card-text">
          {{ forecast.currently.precipProbability }}% Chance of Precipitation
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherCard",
  props: {
    forecast: Object,
    address: String
  },
  data() {
    return {
      icons: {
        "clear-day": "😎",
        "clear-night": "🌜",
        rain: "☔️",
        snow: "❄️",
        sleet: "🥶",
        wind: "💨",
        fog: "🌫",
        cloudy: "☁️",
        "partly-cloudy-day": "🌥",
        "partly-cloudy-night": "🌌"
      }
    };
  }
};
</script>
