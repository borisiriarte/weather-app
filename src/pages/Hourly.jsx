import React from "react";
import DataContainer from "../components/DataContainer";
import MiniDataContainer from "../components/MiniDataContainer";
import HourlyData from "../components/HourlyData";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import HourlyDataInfo from "../components/hourlyDataInfo";

const responsive = "grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-4";

const Hourly = () => {
  const weather = useSelector((state) => state.weather);
  const hourly = weather?.hourly?.hour;

  return (
    <>
      {hourly === undefined ? (
        <Loader />
      ) : (
        <DataContainer data={responsive}>
          {hourly.map((hour, index) => (
            <MiniDataContainer key={index}>
              <HourlyData data={hour} />
              <HourlyDataInfo data={hour} />
            </MiniDataContainer>
          ))}
        </DataContainer>
      )}
    </>
  );
};

export default Hourly;
