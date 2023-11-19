import React from "react";
import { Logo } from "../assets/img/index";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import style from "../style";
import { useSelector } from "react-redux";
import { currentWeatherInfo, unit_type } from "../constants";

const styles = `relative h-10  w-2/4 border-secondary sm:flex hidden`;

const Header = () => {
  const weather = useSelector((state) => state.weather);
  const u = useSelector((state) => state.units);
  const exists = weather?.today?.cloud;
  const location = weather.location;
  const current = weather.today;

  return (
    <div
      className={`w-full h-20 font-sansation bg-primary fixed top-0 left-0 flex justify-between items-center px-4 text-white`}
    >
      <div className={`${style.flexCenter} sm:gap-2 gap-1`}>
        <Link to="/" className={`cursor-pointer relative h-18 w-18`}>
          <img
            src={`${Logo}`}
            alt="Logo"
            className="sm:w-full sm:h-full w-14 h-14"
          />
        </Link>
        <div className="flex flex-col justify-center items-start">
          <h1 className="sm:w-max  text-base  text-secondary leading-4">
            {exists !== undefined && location.country}
          </h1>
          <div className="text-xs sm:text-base font-roboto ">
            {exists !== undefined && location.name}
          </div>
        </div>
        <div className="text-white sm:text-4xl text-2xl sm:ml-3 font-roboto_condensed flex items-end">
          <div>
            {exists !== undefined &&
              Math.floor(current[currentWeatherInfo[0][0][unit_type[u].value]])}
            {currentWeatherInfo[0][0][unit_type[u].unit]}
          </div>
        </div>
      </div>
      <SearchBar
        data={styles}
        cross={"w-10 h-10 rounded-full active:bg-cHover"}
      />
      <Navbar />
    </div>
  );
};

export default Header;
