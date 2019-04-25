<template>
  <div class="col-8 offset-2">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Enter Location" v-model="searchLocation" @keyup.enter="onSearchLocationEntered">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" @click="onSearchLocationEntered">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherSearch",
  data() {
    return {
      searchLocation: ""
    };
  },
  methods: {
    onSearchLocationEntered() {
      this.$emit("onSearchLocationEntered", this.searchLocation);
      this.searchLocation = "";
    }
  }
};
</script>