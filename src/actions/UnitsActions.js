import { CHANGE_UNITS } from "../types";

export const changeUnits = (unit) => ({
  type: CHANGE_UNITS,
  payload: unit,
});
