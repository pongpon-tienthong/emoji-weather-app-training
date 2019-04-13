const PROXY = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = 'YOUR_API_KEY_HERE';

const GEO_API_URL = `${PROXY}https://darksky.net/geo?q=`
const WEATHER_API_URL = `${PROXY}https://api.darksky.net/forecast/${API_KEY}/`;
const ADDRESS_API_URL = `${PROXY}https://darksky.net/rgeo?hires=1`;

const getCoordinates = location => {
  return fetch(`${GEO_API_URL}${location}`)
    .then(response => response.json());
};

const getForecast = (lat, lon) => {
  return fetch(`${WEATHER_API_URL}${lat},${lon}`)
    .then(response => response.json());
};

const getAddress = (lat, lon) => {
  return fetch(`${ADDRESS_API_URL}&lat=${lat}&lon=${lon}`)
    .then(response => response.json());
};

export default {
  getForecast,
  getCoordinates,
  getAddress
};