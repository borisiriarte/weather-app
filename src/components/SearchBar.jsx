import React from "react";
import { Glass } from "../assets/img";

const SearchBar = ({ data }) => {
  return (
    <div
      className={`${data} h-10 absolute border-[1px] rounded-md flex items-center`}
    >
      <input
        type="search"
        name="Search"
        id=""
        placeholder={"Search..."}
        className="w-full  bg-transparent  pl-14  pr-4 rounded-md   focus:outline-none text-white"
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
