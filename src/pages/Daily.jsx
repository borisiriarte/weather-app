import React, { useEffect } from "react";
import DataContainer from "../components/DataContainer";
import MiniDataContainer from "../components/MiniDataContainer";
import DailyData from "../components/DailyData";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import DailyDataInfo from "../components/DailyDataInfo";

const responsive = "grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1";

const Daily = () => {
  const weather = useSelector((state) => state.weather);
  const daily = weather.daily;

  return (
    <>
      {daily.length === 0 ? (
        <Loader />
      ) : (
        <DataContainer data={responsive}>
          {daily.map((day, index) => (
            <MiniDataContainer key={index}>
              <DailyData data={day} />
              <DailyDataInfo data={day} />
            </MiniDataContainer>
          ))}
        </DataContainer>
      )}
    </>
  );
};

export default Daily;
