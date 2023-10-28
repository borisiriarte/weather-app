import React from "react";

const DailyData = () => {
  return (
    <>
      <div className="">FRI 10/24</div>
      <div className="text-center">
        <div>SHOWERS</div>
        <div>58%</div>
      </div>
      <div className="flex items-center gap-1">
        <div className="flex items-end">
          <div>19°</div>
          <div className="text-white/60 text-xs">/13°</div>
        </div>
        <i className="wi wi-forecast-io-clear-day text-secondary text-2xl"></i>
      </div>
    </>
  );
};

export default DailyData;
