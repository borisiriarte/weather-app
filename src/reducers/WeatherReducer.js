import {
  ASTRONOMY,
  CURRENT_WEATHER,
  FORECAST_WEATHER_DAILY,
  FORECAST_WEATHER_HOURLY,
} from "../types";

const initialState = {
  today: [],
};

function WeatherReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_WEATHER:
      return { ...state, today: [...state.today, action.payload] };
    case FORECAST_WEATHER_DAILY:
    case FORECAST_WEATHER_HOURLY:
    case ASTRONOMY:

    default:
      return state;
  }
}

export default WeatherReducer;
