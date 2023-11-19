import { CHANGE_LANGUAGE } from "../types";

const initialState = localStorage.getItem("language");

function LanguageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return (state = action.payload);
    default:
      return state;
  }
}

export default LanguageReducer;
