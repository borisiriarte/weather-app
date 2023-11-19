import { ASTRONOMY, FORECAST } from "../types";

const initialState = {
  today: {},
  daily: [],
  hourly: {},
  astronomy: {},
  location: {},
};

function WeatherReducer(state = initialState, action) {
  switch (action.type) {
    case FORECAST:
      return {
        ...state,
        today: action.payload.current,
        daily: action.payload.forecast.forecastday,
        hourly: action.payload.forecast.forecastday[0],
        location: action.payload.location,
      };
    case ASTRONOMY:
      return { ...state, atronomy: action.payload };
    default:
      return state;
  }
}

export default WeatherReducer;
