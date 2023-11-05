import React from "react";
import { useTranslation } from "react-i18next";

const currentForecast = [
  { name: "Real Feel", info: "20°" },
  { name: "Wind", info: "SE 11km/h" },
  { name: "Wind Guts", info: "11km/h" },
  { name: "Humidity", info: "40%" },
  { name: "Cloud Cover", info: "88%" },
  { name: "Visibility", info: "16km" },
];

const CurrentData = ({ data }) => {
  const { t } = useTranslation();
  const current = data.current;

  const date = new Date(Date.now());
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const strDate = date.toLocaleDateString("en-En", options);

  return (
    <>
      <div className="w-full h-[414px] border-white border-[1px] rounded-xl sm:h-[75vh]">
        <div className="h-full mx-6 flex flex-col  py-6 sm:py-8 justify-between items-center">
          <div className="text-center">
            <div className="text-2xl sm:text-4xl">CURRENT WEATHER</div>
            <p className="text-base sm:text-2xl text-white/60">{strDate}</p>
          </div>
          <i className="wi wi-forecast-io-clear-day text-secondary text-[180px] sm:text-[200px]"></i>
          <div className="flex items-center justify-center w-full gap-3 ">
            <div className="text-5xl sm:text-6xl ">{`${Math.floor(
              current.temp_c
            )}°`}</div>
            <p className="text-4xl sm:text-5xl ">
              {current.condition.text.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-64 border-white border-[1px] rounded-xl sm:h-[75vh] flex flex-col justify-evenly px-4 sm:px-6">
        {currentForecast.map((data, index) => (
          <div
            key={index}
            className="flex justify-between items-stretch border-b-[1px] border-b-white text-base sm:text-2xl "
          >
            <div>{data.name}</div>
            <div>{data.info}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CurrentData;
