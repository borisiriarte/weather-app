import React from "react";
import DataContainer from "../components/DataContainer";
import LocationContainer from "../components/LocationContainer";

const responsive = "grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-4";

const Location = () => {
  return (
    <>
      <div className="absolute w-full h-14 top-20 left-0 px-4 sm:px-16 text-white">
        <div className="flex list-none w-full h-14 justify-around items-center font-roboto_condensed sm:text-2xl text-base">
          SAVED LOCATIONS
        </div>
        <div className="border-b-white w-full border-b-[1px]"></div>
      </div>
      <DataContainer data={responsive}>
        <LocationContainer />
      </DataContainer>
    </>
  );
};

export default Location;
