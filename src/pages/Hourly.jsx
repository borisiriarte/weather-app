import React from "react";
import DataContainer from "../components/DataContainer";
import MiniDataContainer from "../components/MiniDataContainer";
import HourlyData from "../components/HourlyData";

const responsive = "grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-4";

const Hourly = () => {
  return (
    <>
      <DataContainer data={responsive}>
        <MiniDataContainer>
          <HourlyData />
        </MiniDataContainer>
        <MiniDataContainer>
          <HourlyData />
        </MiniDataContainer>
        <MiniDataContainer>
          <HourlyData />
        </MiniDataContainer>
        <MiniDataContainer>
          <HourlyData />
        </MiniDataContainer>
        <MiniDataContainer>
          <HourlyData />
        </MiniDataContainer>
      </DataContainer>
    </>
  );
};

export default Hourly;
