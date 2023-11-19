const DOMAIN = "http://api.weatherapi.com";
const API = `${DOMAIN}/v1`;
const KEY = "0329114cb704414cbc2233320220912";
const FORECAST_WEATHER_URL = `${API}/forecast.json?key=${KEY}`;
const ASTRONOMY_URL = `${API}/astronomy.json?key=${KEY}`;
const DAYS = "&days=3";
const AQI = "&aqi=yes";

const weather_url = (option, location) => {
  const choose = {
    forecast: FORECAST_WEATHER_URL + location + DAYS + AQI,
    astronomy: ASTRONOMY_URL,
  }[option];

  return choose;
};

export default weather_url;
