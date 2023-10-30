import React from "react";
import { Glass } from "../assets/img";

const SearchBar = () => {
  return (
    <div
      className={`relative h-10 w-[50vw] hidden sm:flex  items-center border-[1px]  border-secondary rounded-md`}
    >
      <input
        type="search"
        name="Search"
        placeholder={"Search..."}
        className="w-full bg-transparent pl-14 pr-4 rounded-md focus:outline-none sm:block hidden"
      />
      <img
        src={`${Glass}`}
        alt="search-icon"
        className={`w-6 h-6 sm:scale-105 absolute left-4 pointer-events-none`}
      />
    </div>
  );
};

export default SearchBar;
