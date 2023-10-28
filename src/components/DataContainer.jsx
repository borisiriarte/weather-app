import React from "react";
import "../weather-icons-master/css/weather-icons.css";
import MiniDataContainer from "./MiniDataContainer";
import CurrentData from "./CurrentData";
import LocationContainer from "./LocationContainer";

const responsive_1 = "grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1";
const responsive_2 = "grid sm:grid-cols-2 grid-cols-1";

const DataContainer = () => {
  return (
    <div
      className={`absolute top-36 left-0 w-full p-4 sm:p-0 sm:px-16  gap-4 sm:mt-3  text-white ${responsive_2} place-content-center`}
    >
      <LocationContainer />
    </div>
  );
};

export default DataContainer;
