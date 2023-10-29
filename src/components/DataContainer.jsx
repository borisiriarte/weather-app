import React from "react";
import "../weather-icons-master/css/weather-icons.css";

const DataContainer = ({ children, data }) => {
  return (
    <div
      className={`absolute top-36 left-0 w-full p-4 sm:p-0 sm:px-16  gap-4 sm:mt-3  text-white ${data} place-content-center`}
    >
      {children}
    </div>
  );
};

export default DataContainer;
