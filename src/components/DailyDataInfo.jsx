import React from "react";
import { dailyWeatherInfo, unit_type, uv_condition } from "../constants";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const DailyDataInfo = ({ data }) => {
  const u = useSelector((state) => state.units);
  const { t } = useTranslation();
  return (
    <>
      {dailyWeatherInfo[1].map((x, index) => (
        <div
          className="flex justify-between border-b-[1px] border-b-white text-base"
          key={index}
        >
          <div>{x[t("name")]}</div>
          <div>
            {Math.floor(data.day[x[unit_type[u].value]])} {x[unit_type[u].unit]}
          </div>
        </div>
      ))}

      <div className="flex justify-between border-b-[1px] border-b-white text-base">
        <div>{t("uv")}</div>
        <div className={`text-[${uv_condition(data.day.uv).color}]`}>
          {data.day.uv} {" - "} {uv_condition(data.day.uv)["means"]}
        </div>
      </div>
    </>
  );
};

export default DailyDataInfo;
