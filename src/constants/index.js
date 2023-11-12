import { Glass, Location, ChevronDown, Map, Lang, Weigth } from "../assets/img";

export const navigation = [
  // { id: 1, name: "Climate", href: "/", current: true },
  {
    id: 2,
    name: "Language",
    href: "",
    icon: [ChevronDown, Lang],
    current: true,
  },
  {
    id: 3,
    name: "Units",
    href: "",
    icon: [ChevronDown, Weigth],
    current: false,
  },
  {
    id: 4,
    name: "My Locations",
    href: "locations",
    icon: [Location],
    current: false,
  },
  { id: 5, name: "Maps", href: "maps", icon: [Map], current: false },
];

export const subNavigation = [
  { id: 1, name: "Today", href: "today", current: true },
  { id: 3, name: "Hourly", href: "hourly", current: false },
  { id: 2, name: "Daily", href: "daily", current: false },
];

export const air_quality = (index) => {
  const airQuality = {
    1: { means: "Good", color: "67C72F" },
    2: { means: "Moderate", color: "7DEE47" },
    3: { means: "Unhealthy for sensitive group", color: "EED82F" },
    4: { means: "Unhealthy", color: "EE8133" },
    5: { means: "Very Unhealthy", color: "DF4230" },
    6: { means: "Hazardous", color: "BF3228" },
  };

  return airQuality[index];
};

export const uv_condition = (index) => {
  const default_index = { means: "Extremly High", color: "D954F71" };
  const uv_index = {
    1: { means: "Low", color: "8DC443" },
    2: { means: "Low", color: "8DC443" },
    3: { means: "Medium", color: "FCD835" },
    4: { means: "Medium", color: "FCD835" },
    5: { means: "Medium", color: "FCD835" },
    6: { means: "High", color: "F5B233" },
    7: { means: "High", color: "F5B233" },
    8: { means: "Very High", color: "D1394A" },
    9: { means: "Very High", color: "D1394A" },
    10: { means: "Very High", color: "D1394A" },
  };

  return uv_index[index] || default_index;
};

export const currentWeather = [
  { id: "feelslike_c", name: "Feels Like", units: "°" },
  { id: "wind_kph", name: "Wind", units: "km/h" },
  { id: "gust_kph", name: "Wind Guts", units: "km/h" },
  { id: "humidity", name: "Humidity", units: "%" },
  { id: "cloud", name: "Cloud Cover", units: "%" },
  { id: "vis_km", name: "Visibility", units: "km" },
];
