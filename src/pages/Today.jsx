import React from "react";
import CurrentData from "../components/CurrentData";
import DataContainer from "../components/DataContainer";
import Loader from "../components/Loader";
import { useOutletContext } from "react-router-dom";

const responsive = "grid sm:grid-cols-2 grid-cols-1";

const Today = () => {
  const weather = useOutletContext();
  const { today } = weather;

  // console.log(today);

  return (
    <>
      {today.length === 0 ? (
        <Loader />
      ) : (
        <DataContainer data={responsive}>
          {/* <CurrentData data={today[0]} /> */}
        </DataContainer>
      )}
      {/* <DataContainer data={responsive}>
        <CurrentData data={weather} />
      </DataContainer> */}
    </>
  );
};

export default Today;
