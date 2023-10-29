import React from "react";
import CurrentData from "../components/CurrentData";
import DataContainer from "../components/DataContainer";

const responsive = "grid sm:grid-cols-2 grid-cols-1";

const Today = () => {
  return (
    <>
      <DataContainer data={responsive}>
        <CurrentData />
      </DataContainer>
    </>
  );
};

export default Today;
