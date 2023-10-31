import React from "react";
import HourlyData from "./HourlyData";
import DailyData from "./DailyData";
const currentForecast = [
  { name: "Real Feel", info: "20°" },
  { name: "Wind", info: "SE 11km/h" },
  { name: "Wind Guts", info: "11km/h" },
  { name: "Humidity", info: "40%" },
  { name: "Cloud Cover", info: "88%" },
  { name: "Visibility", info: "16km" },
];

const MiniDataContainer = ({ children }) => {
  return (
    <>
      <div className="w-full h-[35vh] border-[1px] border-white rounded-xl p-4 sm:px-6 sm:py-4 flex flex-col justify-between font-roboto_condensed">
        <div className="flex justify-between items-center">{children}</div>
        <div className="w-fulrounded-xl flex flex-col justify-around gap-y-1">
          {currentForecast.map((data) => (
            <div className="flex justify-between border-b-[1px] border-b-white text-base">
              <div>{data.name}</div>
              <div>{data.info}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MiniDataContainer;
