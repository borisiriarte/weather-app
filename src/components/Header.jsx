import React from "react";
import { Logo } from "../assets/img/index";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import style from "../style";

const Header = () => {
  return (
    <div
      className={`w-full h-20 font-sansation bg-primary fixed top-0 left-0 flex justify-between items-center px-4 text-white`}
    >
      <div className={`${style.flexCenter} relative`}>
        <Link to="/today" className="cursor-pointer">
          <img src={`${Logo}`} alt="Logo" className="scale-90 sm:scale-105 " />
        </Link>
        <div className="absolute left-5 top-5 text-primary pointer-events-none">
          28°
        </div>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-xl leading-none text-secondary">BOLIVIA</h1>
          <div className="text-xs  leading-nonefont-roboto ">cochabamba</div>
        </div>
      </div>
      <SearchBar />
      <Navbar />
    </div>
  );
};

export default Header;
