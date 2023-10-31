import React from "react";

const SubnavContainer = ({ children }) => {
  return (
    <div className="absolute w-full top-20 left-0 px-4 sm:px-16 text-white">
      {children}
    </div>
  );
};

export default SubnavContainer;
