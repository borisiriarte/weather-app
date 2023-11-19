import React from "react";

const MiniDataContainer = ({ children }) => {
  return (
    <>
      <div className="w-full h-[275px] border-[1px] border-white rounded-xl p-4 sm:px-6 sm:py-4 flex flex-col justify-between font-roboto_condensed">
        <div className="flex justify-between items-center">{children[0]}</div>
        <div className="w-fulrounded-xl flex flex-col justify-around gap-y-1"></div>
        {children[1]}
      </div>
    </>
  );
};

export default MiniDataContainer;
