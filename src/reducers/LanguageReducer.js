import { CHANGE_LANGUAGE } from "../types";

const initialState = localStorage.getItem("language") || "en";

function LanguageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return (state = action.payload);
    default:
      return state;
  }
}

export default LanguageReducer;
