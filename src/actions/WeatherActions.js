import { ASTRONOMY, FORECAST } from "../types";

export const forecast = (location_forecast) => ({
  type: FORECAST,
  payload: location_forecast,
});

export const astronomy = (location) => ({
  type: ASTRONOMY,
  payload: location,
});
