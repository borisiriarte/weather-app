import { Location, ChevronDown, Map, Lang, Weigth } from "../assets/img";

export const navigation = [
  [
    {
      id: 1,
      name: "Language",
      nombre: "Lenguaje",
      icon: [ChevronDown, Lang],
    },
    {
      id: 2,
      name: "Units",
      nombre: "Unidades",
      icon: [ChevronDown, Weigth],
    },
  ],
  [
    {
      id: 3,
      name: "My Locations",
      href: "locations",
      nombre: "Localidades",
      icon: [Location],
    },
    {
      id: 4,
      name: "Maps",
      nombre: "Mapas",
      href: "maps",
      icon: [Map],
    },
  ],
];

export const subNavigation = [
  { id: 1, name: "Today", nombre: "Hoy", href: "today" },
  {
    id: 2,
    name: "Daily",
    nombre: "Diario",
    href: "daily",
  },
  {
    id: 3,
    name: "Hourly",
    nombre: "A Cada Hora",
    href: "hourly",
  },
];

export const air_quality = (index) => {
  const airQuality = {
    1: { means: "Good", significa: "Buena", color: "#67c72f" },
    2: { means: "Moderate", significa: "Moderada", color: "#7dee47" },
    3: {
      means: "Unhealthy for sensitive group",
      significa: "Dañina para grupos sensibles",
      color: "#eed82f",
    },
    4: { means: "Unhealthy", significa: "Dañino", color: "#ee8133" },
    5: { means: "Very Unhealthy", significa: "Muy Dañino", color: "#df4230" },
    6: { means: "Hazardous", significa: "Peligrosa", color: "#bf3228" },
  };

  return airQuality[index];
};

export const uv_condition = (index) => {
  const default_index = {
    means: "Extremly High",
    significa: "Extremadamente Alto",
    color: "#D954F71",
  };
  const uv_index = {
    1: { means: "Low", significa: "bajo", color: "#8DC443" },
    2: { means: "Low", significa: "bajo", color: "#8DC443" },
    3: { means: "Medium", significa: "Moderado", color: "#FCD835" },
    4: { means: "Medium", significa: "Moderado", color: "#FCD835" },
    5: { means: "Medium", significa: "Moderado", color: "#FCD835" },
    6: { means: "High", significa: "Alto", color: "#F5B233" },
    7: { means: "High", significa: "Alto", color: "#F5B233" },
    8: { means: "Very High", significa: "Muy Alto", color: "#D1394A" },
    9: { means: "Very High", significa: "Muy Alto", color: "#D1394A" },
    10: { means: "Very High", significa: "Muy Alto", color: "#D1394A" },
  };

  return uv_index[index] || default_index;
};

export const currentWeatherInfo = [
  [
    {
      id: "temp_c",
      id_i: "temp_f",
      name: "Temperature",
      nombre: "Temperatura",
      units: "°C",
      units_i: "°F",
    },
  ],
  [
    {
      id: "feelslike_c",
      id_i: "feelslike_f",
      name: "Feels Like",
      nombre: "Sensasión Termica",
      units: "°C",
      units_i: "°F",
    },
    {
      id: "wind_kph",
      id_i: "wind_mph",
      name: "Wind",
      nombre: "Viento",
      units: "km/h",
      units_i: "mi/h",
    },
    {
      id: "gust_kph",
      id_i: "gust_mph",
      name: "Wind Guts",
      nombre: "Rafagas de Viento",
      units: "km/h",
      units_i: "mi/h",
    },
    {
      id: "humidity",
      id_i: "humidity",
      name: "Humidity",
      nombre: "Humedad",
      units: "%",
      units_i: "%",
    },
    {
      id: "cloud",
      id_i: "cloud",
      name: "Cloud Cover",
      nombre: "Nubosidad",
      units: "%",
      units_i: "%",
    },
    {
      id: "vis_km",
      id_i: "vis_miles",
      name: "Visibility",
      nombre: "Visibilidad",
      units: "km",
      units_i: "mi",
    },
  ],
];

export const dailyWeatherInfo = [
  [
    {
      id: "maxtemp_c",
      id_i: "maxtemp_f",
      name: "Average Humidity",
      nombre: "Humedad Promedio",
      units: "°C",
      units_i: "°F",
    },
    {
      id: "mintemp_c",
      id_i: "mintemp_f",
      name: "Average Temperature",
      nombre: "Temperatura Promedio",
      units: "°C",
      units_i: "°F",
    },
  ],
  [
    {
      id: "avghumidity",
      id_i: "avghumidity",
      name: "Average Humidity",
      nombre: "Humedad Promedio",
      units: "%",
      units_i: "%",
    },
    {
      id: "avgtemp_c",
      id_i: "avgtemp_f",
      name: "Average Temperature",
      nombre: "Temperatura Promedio",
      units: "°C",
      units_i: "°F",
    },
    {
      id: "maxwind_kph",
      id_i: "maxwind_mph",
      name: "Max Wind",
      nombre: "Vientos Máximos",
      units: "km/h",
      units_i: "mi/h",
    },
    {
      id: "totalprecip_mm",
      id_i: "totalprecip_in",
      name: "Total Precipitation",
      nombre: "Precipitación Total",
      units: "mm",
      units_i: "in",
    },
    {
      id: "avgvis_km",
      id_i: "avgvis_miles",
      name: "Average Visibility",
      nombre: "Visibilidad Promedio",
      units: "km",
      units_i: "mi",
    },
  ],
];

export const hourlyWeatherInfo = [
  {
    id: "temp_c",
    id_i: "temp_f",
    name: "Temperature",
    nombre: "Temperatura",
    units: "°C",
    units_i: "°F",
  },
  [
    {
      id: "humidity",
      id_i: "humidity",
      name: "Humidity",
      nombre: "Humedad",
      units: "%",
      units_i: "%",
    },
    {
      id: "feelslike_c",
      id_i: "feelslike_f",
      name: "Feels Like",
      nombre: "Sensasión Termica",
      units: "°C",
      units_i: "°F",
    },
    {
      id: "wind_kph",
      id_i: "wind_mph",
      name: "Wind",
      nombre: "Viento",
      units: "km/h",
      units_i: "mi/h",
    },
    {
      id: "precip_mm",
      id_i: "precip_in",
      name: "Precipitation",
      nombre: "Precipitación",
      units: "mm",
      units_i: "in",
    },
    {
      id: "vis_km",
      id: "vis_miles",
      name: "Visibility",
      nombre: "Visibilidad",
      units: "km",
      units_i: "mi",
    },
  ],
];

export const unit_type = {
  m: { value: "id", unit: "units" },
  i: { value: "id_i", unit: "units_i" },
};
