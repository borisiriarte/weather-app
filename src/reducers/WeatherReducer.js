import {
  ASTRONOMY,
  CURRENT_WEATHER,
  FORECAST_WEATHER_DAILY,
  FORECAST_WEATHER_HOURLY,
} from "../types";

const initialState = {
  today: {},
};

function WeatherReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_WEATHER:
      return { ...state, today: action.payload };
    case FORECAST_WEATHER_DAILY:
      return { ...state, day: action.payload };
    case FORECAST_WEATHER_HOURLY:
      return { ...state, hour: action.payload };
    case ASTRONOMY:
      return { ...state, atronomy: action.payload };

    default:
      return state;
  }
}

export default WeatherReducer;
