import React from "react";
import { LoaderLogo, Logo } from "../assets/img";

const Loader = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center absolute left-0 top-0">
      <img
        src={LoaderLogo}
        alt="scale-50 sm:scale-75"
        className="absolute w-14"
      />
      <img src={Logo} alt="loader" className="animate-pulse w-14 absolute" />
    </div>
  );
};

export default Loader;
