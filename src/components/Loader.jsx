import React from "react";
import { LoaderLogo } from "../assets/img";

const Loader = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center absolute left-0 top-0">
      <img
        src={`${LoaderLogo}`}
        alt="loader"
        className="animate-pulse scale-50 sm:scale-75"
      />
    </div>
  );
};

export default Loader;
