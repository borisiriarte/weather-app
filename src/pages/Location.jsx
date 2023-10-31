import React from "react";
import DataContainer from "../components/DataContainer";
import LocationContainer from "../components/LocationContainer";
import SubnavContainer from "../components/SubnavContainer";

const responsive = "grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-4";

const Location = () => {
  return (
    <>
      <SubnavContainer>
        <div className="flex w-full h-11 sm:h-14 justify-center items-center font-roboto_condensed sm:text-2xl text-base border-b-white border-b-[1px]">
          SAVED LOCATIONS
        </div>
      </SubnavContainer>
      <DataContainer data={responsive}>
        <LocationContainer />
      </DataContainer>
    </>
  );
};

export default Location;
