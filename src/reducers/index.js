import { combineReducers } from "redux";
import LanguageReducer from "./LanguageReducer";
import WeatherReducer from "./WeatherReducer";

const reducer = combineReducers({
  language: LanguageReducer,
  weather: WeatherReducer,
});

export default reducer;
