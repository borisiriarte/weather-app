const DOMAIN = "http://api.weatherapi.com";
const API = `${DOMAIN}/v1`;
const KEY = "0329114cb704414cbc2233320220912";
const CURRENT_WEATHER_URL = `${API}/current.json?key=${KEY}`;
const FORECAST_WEATHER_URL = `${API}/forecast.json?key=${KEY}`;
const ASTRONOMY_URL = `${API}/astronomy.json?key=${KEY}`;
const DAYS = "&days=6";
const AQI = "&aqi=yes";

const wetaher_url = (option, location) => {
  const choose = {
    current: CURRENT_WEATHER_URL + location + AQI,
    forecast_days: FORECAST_WEATHER_URL + location + AQI + DAYS,
    forecast_hours: FORECAST_WEATHER_URL + location + AQI,
    astronomy: ASTRONOMY_URL,
  }[option];

  return choose;
};

export default wetaher_url;
