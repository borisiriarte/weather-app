import React from "react";
import { Logo } from "../assets/img/index";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const searchBarClass =
  "w-[50vw] hidden sm:flex relative border-[1px] border-secondary rounded-md";

const Header = () => {
  return (
    <div className="w-full h-20 bg-primary fixed top-0 left-0 flex justify-between items-center px-4 font-sansation">
      <div className="flex justify-center items-center relative">
        <img src={`${Logo}`} alt="Logo" className="scale-90 sm:scale-105 " />
        <div className="absolute left-5 top-5 text-[#2a2e35] font-sansation">
          28°
        </div>
        <div className="flex flex-col justify-center items-center ml-1">
          <h1 className="text-[20px] leading-none text-secondary">BOLIVIA</h1>
          <div className="text-[12px] leading-none text-white font-roboto ">
            cochabamba
          </div>
        </div>
      </div>
      <SearchBar data={searchBarClass} />
      <Navbar />
    </div>
  );
};

export default Header;
