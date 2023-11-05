import {
  ASTRONOMY,
  CURRENT_WEATHER,
  FORECAST_WEATHER_DAILY,
  FORECAST_WEATHER_HOURLY,
} from "../types";

export const currentWeather = (location) => ({
  type: CURRENT_WEATHER,
  payload: location,
});

export const hourlyWeather = (location) => ({
  type: FORECAST_WEATHER_HOURLY,
  payload: location,
});

export const dailyWeather = (location) => ({
  type: FORECAST_WEATHER_DAILY,
  payload: location,
});

export const astronomy = (location) => ({
  type: ASTRONOMY,
  payload: location,
});
