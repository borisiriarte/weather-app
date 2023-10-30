import React from "react";

const LocationContainer = () => {
  return (
    <>
      <div className="w-full h-auto border-[1px] border-white rounded-xl p-4 sm:px-6 sm:py-4 flex flex-col gap-5 font-roboto_condensed">
        <div className="border-b-white border-b-[1px] text-center text-secondary text-xl">
          BOLIVIA
        </div>
        <div className="flex flex-col gap-2 justify-start">
          <div className="border-white border-[1px] rounded-md px-2 h-8 grid place-content-center cursor-pointer hover:bg-secondary hover:text-primary hover:border-none duration-700">
            SantaCruz
          </div>
          <div className="border-white border-[1px] rounded-md px-2 h-8 grid place-content-center cursor-pointer hover:bg-secondary hover:text-primary hover:border-none duration-700">
            Cochabamba
          </div>
          <div className="border-white border-[1px] rounded-md px-2 h-8 grid place-content-center cursor-pointer hover:bg-secondary hover:text-primary hover:border-none duration-700">
            La Paz
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationContainer;
