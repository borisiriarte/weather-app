import React from "react";
import CurrentData from "../components/CurrentData";
import DataContainer from "../components/DataContainer";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";

const responsive = "grid sm:grid-cols-2 grid-cols-1";

const Today = () => {
  const weather = useSelector((state) => state.weather);
  const today_current = weather.today?.cloud;

  return (
    <>
      {today_current === undefined ? (
        <Loader />
      ) : (
        <DataContainer data={responsive}>
          <CurrentData />
        </DataContainer>
      )}
    </>
  );
};

export default Today;
