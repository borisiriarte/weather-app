import React from "react";

const ModalContainer = () => {
  return (
    <div className="absolute w-3/4 h-3/4 inset-0 m-auto grid grid-rows-auto rounded-xl font-roboto text-base sm:text-2xl  overflow-y-auto overflow-x-hidden gap-y-1">
      <div className="w-full max-h-max py-2 rounded-md self-center flex justify-center items-center bg-cHover/40 hover:bg-cHover active:bg-cActive text-white/70 pointer-events-auto cursor-pointer duration-300 ">
        Español
      </div>
      <div className="w-full max-h-max py-2 rounded-md self-center flex justify-center items-center bg-cHover/40 hover:bg-cHover active:bg-cActive text-white/70 pointer-events-auto cursor-pointer duration-300 ">
        English
      </div>
    </div>
  );
};

export default ModalContainer;
