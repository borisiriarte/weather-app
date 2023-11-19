import React from "react";
import { weather_icons } from "../assets/weather_icons";
import { dailyWeatherInfo, unit_type } from "../constants";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const DailyData = ({ data }) => {
  const { t } = useTranslation();
  const u = useSelector((state) => state.units);
  const time = data.date;

  const date = new Date(time.replace(/-/g, "/").replace(/T.+/, ""));

  const strWeekday = date
    .toLocaleDateString(t("lang"), {
      weekday: "long",
    })
    .slice(0, 3);

  const day = date.toLocaleDateString(t("lang"), {
    month: "numeric",
    day: "numeric",
  });

  return (
    <>
      <div className="">
        {strWeekday} {day}
      </div>
      <div className="text-center">
        <div>{weather_icons[`${data.day.condition.code}`][t("lanName")]}</div>
        <div>{data.day["daily_chance_of_rain"]}%</div>
      </div>
      <div className="flex items-center gap-1">
        <div className="flex items-end">
          <div>
            {Math.floor(data.day[dailyWeatherInfo[0][0][unit_type[u].value]])}°/
          </div>
          <div className="text-white/60 text-xs">
            {Math.floor(data.day[dailyWeatherInfo[0][1][unit_type[u].value]])}°
          </div>
        </div>
        <i
          className={`wi ${
            data.astro["is_sun_up"] === 0
              ? weather_icons[`${data.day.condition.code}`].night
              : weather_icons[`${data.day.condition.code}`].day
          }  text-secondary text-2xl`}
        ></i>
      </div>
    </>
  );
};

export default DailyData;
