import React from "react";
import "../weather-icons-master/css/weather-icons.css";

const DataContainer = ({ children, data }) => {
  return (
    <div
      className={`absolute top-32 sm:top-36  left-0 w-full  p-4 sm:p-0 sm:px-16 gap-4 sm:mt-3 sm:pb-4 text-white ${data} sm:h-[600px] h-[800px]`}
    >
      {children}
    </div>
  );
};

export default DataContainer;
