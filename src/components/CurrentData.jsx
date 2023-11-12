import React from "react";
import { useTranslation } from "react-i18next";
import { weather_icons } from "../assets/weather_icons";
import { air_quality, currentWeather, uv_condition } from "../constants";

const CurrentData = ({ data }) => {
  const { t } = useTranslation();

  const date = new Date(Date.now());
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const strDate = date.toLocaleDateString("en-En", options);
  console.log(data);

  return (
    <>
      <div className="w-full  border-white border-[1px] rounded-xl ">
        <div className="h-full mx-6 flex flex-col  py-6 sm:py-8 justify-between items-center">
          <div className="text-center">
            <div className="text-2xl sm:text-4xl">
              {data.condition.text.toUpperCase()}
            </div>
            <p className="text-base sm:text-2xl text-white/60">{strDate}</p>
          </div>
          <i
            className={`wi ${
              data["is_day"] === 0
                ? weather_icons[`${data.condition.code}`].night
                : weather_icons[`${data.condition.code}`].day
            } text-secondary text-[180px] sm:text-[200px]`}
          ></i>
          <div className="flex items-center justify-center w-full box-border">
            <div className="text-5xl sm:text-6xl relative">
              {`${Math.floor(data.temp_c)}`}°
              <sub className="absolute bottom-[-1px] left-[56px]  sm:bottom-[2px] sm:left-[74px] text-xl">
                C
              </sub>
            </div>
            <div className="text-3xl sm:text-4xl text-center"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-72 border-white border-[1px] rounded-xl sm:h-[600px] flex flex-col justify-evenly px-4 sm:px-6">
        {currentWeather.map((x, index) => (
          <div
            key={index}
            className="flex justify-between items-stretch border-b-[1px] border-b-white text-base sm:text-2xl "
          >
            <div>{x.name}</div>
            <div>
              {data[x.id]} {""} {x.units}
            </div>
          </div>
        ))}
        <div className="flex justify-between items-stretch border-b-[1px] border-b-white text-base sm:text-2xl ">
          <div>Air Quality</div>
          <div
            className={`text-[#${
              air_quality(data["air_quality"]["us-epa-index"]).color
            }]`}
          >
            {air_quality(data["air_quality"]["us-epa-index"]).means}
          </div>
        </div>
        <div className="flex justify-between items-stretch border-b-[1px] border-b-white text-base sm:text-2xl ">
          <div>UV Index</div>
          <div className={`text-[#${uv_condition(data.uv).color}]`}>
            {uv_condition(data.uv).means}
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentData;
