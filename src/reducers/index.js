import { combineReducers } from "redux";
import LanguageReducer from "./LanguageReducer";

const reducer = combineReducers({ language: LanguageReducer });

export default reducer;
