import React, { useState } from "react";
import { Glass } from "../assets/img/index";
import SearchBar from "./SearchBar";

const styles = `relative h-14 w-full border-white`;

const SearchContainer = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [active, setActive] = useState("hidden");
  return (
    <>
      <div
        className="sm:hidden hover:bg-cHover active:bg-cActive duration-700 rounded-xl w-12 sm:w-14 sm:h-14 h-12 flex justify-center items-center cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setToggleSearch(!toggleSearch);
          setActive("flex");
        }}
      >
        <img
          src={`${Glass}`}
          className="scale-50 object-contain pointer-events-none"
        />
      </div>
      <div
        className={`${active} ${
          !toggleSearch ? `slide-out` : "slide-in"
        } fixed h-[calc(100vh-5rem)] w-full bottom-0 right-0 bg-primary border-t-[1px] border-t-secondary slide py-4 px-3`}
      >
        <SearchBar data={styles} />
      </div>
    </>
  );
};

export default SearchContainer;
