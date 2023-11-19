import { combineReducers } from "redux";
import LanguageReducer from "./LanguageReducer";
import WeatherReducer from "./WeatherReducer";
import UnitsReducer from "./UnitsReducer";

const reducer = combineReducers({
  language: LanguageReducer,
  weather: WeatherReducer,
  units: UnitsReducer,
});

export default reducer;
