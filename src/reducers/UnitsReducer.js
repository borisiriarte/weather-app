import { CHANGE_UNITS } from "../types";

const initialState = localStorage.getItem("unit");

function UnitsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_UNITS:
      return (state = action.payload);

    default:
      return state;
  }
}

export default UnitsReducer;
