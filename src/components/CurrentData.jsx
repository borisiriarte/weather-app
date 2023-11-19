import React from "react";
import { useTranslation } from "react-i18next";
import { weather_icons } from "../assets/weather_icons";
import {
  air_quality,
  currentWeatherInfo,
  unit_type,
  uv_condition,
} from "../constants";
import { useSelector } from "react-redux";

const CurrentData = () => {
  const { t } = useTranslation();
  const weather = useSelector((state) => state.weather);
  const u = useSelector((state) => state.units);
  const current = weather.today;

  const date = new Date(Date.now());
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const strDate = date.toLocaleDateString("en-En", options);

  return (
    <>
      <div className="w-full  border-white border-[1px] rounded-xl ">
        <div className="h-full mx-6 flex flex-col  py-6 sm:py-8 justify-between items-center">
          <div className="text-center">
            <div className="text-2xl sm:text-4xl">
              {weather_icons[`${current.condition.code}`][t("lanName")]}
            </div>
            <p className="text-base sm:text-2xl text-white/60">{strDate}</p>
          </div>
          <i
            className={`wi ${
              current["is_day"] === 0
                ? weather_icons[`${current.condition.code}`].night
                : weather_icons[`${current.condition.code}`].day
            } text-secondary text-[130px] sm:text-[200px]`}
          ></i>
          <div className="flex items-center justify-center w-full box-border">
            <div className="text-4xl sm:text-6xl relative">
              {Math.floor(
                current[currentWeatherInfo[0][0][unit_type[u].value]]
              )}{" "}
              {""}
              {currentWeatherInfo[0][0][unit_type[u].unit]}
            </div>
            <div className="text-3xl sm:text-4xl text-center"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-full border-white border-[1px] rounded-xl sm:h-[600px] flex flex-col justify-evenly px-4 sm:px-6">
        {currentWeatherInfo[1].map((x, index) => (
          <div
            key={index}
            className="flex justify-between items-stretch border-b-[1px] border-b-white text-base sm:text-2xl "
          >
            <div>{x[t("name")]}</div>
            <div>
              {Math.ceil(current[x[unit_type[u].value]])} {""}{" "}
              {x[unit_type[u].unit]}
            </div>
          </div>
        ))}
        <div className="flex justify-between items-stretch border-b-[1px] border-b-white text-base sm:text-2xl ">
          <div>{t("aqi")}</div>
          <div
            className={`text-[${
              air_quality(current["air_quality"]["us-epa-index"]).color
            }]`}
          >
            {current["air_quality"]["us-epa-index"]} {" - "}
            {air_quality(current["air_quality"]["us-epa-index"])[t("means")]}
          </div>
        </div>
        <div className="flex justify-between items-stretch border-b-[1px] border-b-white text-base sm:text-2xl ">
          <div>{t("uv")}</div>
          <div className={`text-[${uv_condition(current.uv).color}]`}>
            {current.uv} {" - "} {uv_condition(current.uv)[t("means")]}
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentData;
