import React from "react";
import { weather_icons } from "../assets/weather_icons";
import { hourlyWeatherInfo, unit_type } from "../constants";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const HourlyData = ({ data }) => {
  const { t } = useTranslation();
  const u = useSelector((state) => state.units);
  const time = data.time;

  const date = new Date(time.replace(/-/g, "/").replace(/T.+/, ""));

  const dateTime = date.toLocaleDateString("en-En", {
    hour: "numeric",
  });

  const hour = dateTime.slice(-5).trim();

  return (
    <>
      <div className="">{hour}</div>
      <div className="text-center">
        <div>{weather_icons[`${data.condition.code}`][t("lanName")]}</div>
        <div>{data["chance_of_rain"]}%</div>
      </div>
      <div className="flex items-center gap-1">
        <div>{Math.floor(data[hourlyWeatherInfo[0][unit_type[u].value]])}°</div>
        <i
          className={`wi ${
            data["is_day"] === 0
              ? weather_icons[`${data.condition.code}`].night
              : weather_icons[`${data.condition.code}`].day
          } text-secondary  text-2xl`}
        ></i>
      </div>
    </>
  );
};

export default HourlyData;
