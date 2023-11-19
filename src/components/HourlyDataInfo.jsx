import React from "react";
import { hourlyWeatherInfo, unit_type, uv_condition } from "../constants";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const HourlyDataInfo = ({ data }) => {
  const u = useSelector((state) => state.units);
  const { t } = useTranslation();
  return (
    <>
      {hourlyWeatherInfo[1].map((x, index) => (
        <div
          className="flex justify-between border-b-[1px] border-b-white text-base"
          key={index}
        >
          <div>{x[t("name")]}</div>
          <div>
            {Math.floor(data[x[unit_type[u].value]])} {x[unit_type[u].unit]}
          </div>
        </div>
      ))}

      <div className="flex justify-between border-b-[1px] border-b-white text-base">
        <div>{t("uv")}</div>
        <div className={`text-[${uv_condition(data.uv).color}]`}>
          {data.uv} {" - "}
          {uv_condition(data.uv)[t("means")]}
        </div>
      </div>
    </>
  );
};

export default HourlyDataInfo;
