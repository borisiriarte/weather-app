import React, { useRef, useState } from "react";
import { Cross, Glass, Location } from "../assets/img";
import { helpHttp } from "../helpers/helpHttp";
import { CircleFlag } from "react-circle-flags";

const SearchBar = ({ data, cross }) => {
  const [isActive, setIsActive] = useState(false);
  const [locations, setLocations] = useState({});
  const [noMatches, setNoMatches] = useState(false);
  const inputRef = useRef();

  const handleOpen = () => {
    setIsActive(true);
  };
  const handleClose = () => {
    setIsActive(false);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setLocations({});
      const value = e.target.value;
      helpHttp()
        .get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${value}&count=10&language=en&format=json`
        )
        .then((res) => {
          const propExist = res?.results;
          if (propExist !== undefined) {
            setLocations(res);
          } else {
            setNoMatches(true);
          }
        })
        .catch((err) => err);
    }
  };

  const handleErase = () => {
    inputRef.current.value = "";
    setLocations({});
    setNoMatches(false);
  };

  return (
    <div className={`${data} border-[1px] rounded-md flex items-center`}>
      <input
        id="search"
        type="text"
        name="Search"
        placeholder={"Search"}
        autoComplete="off"
        className="w-full h-full bg-transparent pl-12 pr-4 rounded-md focus:outline-none block text-white"
        onKeyUp={handleSearch}
        onFocus={handleOpen}
        onBlur={handleClose}
        ref={inputRef}
      />

      <img
        src={`${Glass}`}
        alt="search-icon"
        className={`w-6 h-6  absolute left-4 pointer-events-none`}
      />
      <div
        className={`absolute right-0 w-[50px] h-full   grid place-content-center cursor-pointer ${cross}`}
        onClick={handleErase}
      >
        <img
          src={`${Cross}`}
          alt="search-icon"
          className={`w-6 h-6 pointer-events-none `}
        />
      </div>

      <div
        className={`${
          !isActive ? "hidden" : "grid"
        } absolute  top-14  max-h-[60vh] w-full z-10 rounded-md bg-white border-[1px] border-white overflow-x-hidden overflow-y-auto`}
      >
        <div className="backdrop-blur-3xl h-14 bg-primary/10 rounded-md hover:bg-cHover/30 duration-500 px-3 py-1 flex items-center justify-between hover:text-black text-primary cursor-pointer">
          <img src={Location} alt="location" className="w-6   h-6 " />
          <p className="fixed left-12">Use your current location</p>
        </div>
        <div
          className={`${
            Object.keys(locations).length === 0 ? "hidden" : "block"
          } w-full max-h-max`}
        >
          {Object.keys(locations).length > 0 &&
            locations.results.map((location) => (
              <div
                className="backdrop-blur-3xl h-14 bg-primary/10 rounded-md hover:bg-cHover/30 duration-500 px-3 py-1 flex items-center justify-between hover:text-black text-primary mt-1 cursor-pointer"
                key={location.id}
              >
                <p>
                  {location.country} , {location.name}
                </p>
                <CircleFlag
                  countryCode={`${location["country_code"].toLowerCase()}`}
                  height={20}
                  width={20}
                />
              </div>
            ))}
        </div>
        {noMatches && (
          <div className="h-14  rounded-md px-3 py-1 flex items-center justify-center  text-secondary mt-1">
            No Matches Found
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
