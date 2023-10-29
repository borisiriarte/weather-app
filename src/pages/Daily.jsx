import React from "react";
import DataContainer from "../components/DataContainer";
import MiniDataContainer from "../components/MiniDataContainer";
import DailyData from "../components/DailyData";

const responsive = "grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1";

const Daily = () => {
  return (
    <>
      <DataContainer data={responsive}>
        <MiniDataContainer>
          <DailyData />
        </MiniDataContainer>
        <MiniDataContainer>
          <DailyData />
        </MiniDataContainer>
        <MiniDataContainer>
          <DailyData />
        </MiniDataContainer>
        <MiniDataContainer>
          <DailyData />
        </MiniDataContainer>
        <MiniDataContainer>
          <DailyData />
        </MiniDataContainer>
      </DataContainer>
    </>
  );
};

export default Daily;
