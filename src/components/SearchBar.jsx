import React, { useRef, useState } from "react";
import { Cross, Glass, Location } from "../assets/img";
import { helpHttp } from "../helpers/helpHttp";
import { CircleFlag } from "react-circle-flags";
import { useEffect } from "react";
import weather_url from "../constants/url";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import updateStorage from "../helpers/helpUpdateStorage";
import { forecast } from "../actions/WeatherActions";
import { useTranslation } from "react-i18next";

const SearchBar = ({ data, cross }) => {
  const [isActive, setIsActive] = useState(false);
  const [locations, setLocations] = useState({});
  const [noMatches, setNoMatches] = useState(false);
  const inputContainerRef = useRef();
  const inputRef = useRef();

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpen = () => {
    setIsActive(true);
  };

  let loc;

  const handleSearchOnPressKey = (e) => {
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

  const handleSearchOnClick = async (coordinates) => {
    const options = {
      enableHighAccuracy: true,
      maximumAge: 0,
    };

    if (coordinates === undefined) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, options);
      } else {
        console.log("Geolocation not supported");
      }
    } else {
      const { lat_, lon_ } = coordinates;
      const coordinatesQuery = `&q=${lat_},${lon_}`;
      const url = weather_url("forecast", coordinatesQuery);
      await helpHttp()
        .get(url)
        .then((res) => {
          dispatch(forecast(res));
          loc = res.location;
          console.log(loc);
          const { name, country, lat, lon } = res.location;
          updateStorage({ name, country, lat, lon });
        })
        .catch((err) => console.error(err));

      navigate(`/${t("lanName")}/weather`);
    }
  };

  async function success(position) {
    const lat_ = position.coords.latitude;
    const lon_ = position.coords.longitude;

    const coordinateQuery = `&q=${lat_},${lon_}`;
    const url = weather_url("forecast", coordinateQuery);

    await helpHttp()
      .get(url)
      .then((res) => {
        dispatch(forecast(res));
        loc = res.location;
        const { name, country, lat, lon } = res.location;
        updateStorage({ name, country, lat, lon });
      });

    navigate(`${t("lanName")}/weather`);
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  const handleErase = () => {
    inputRef.current.value = "";
    setLocations({});
    setNoMatches(false);
    setLocations;
  };

  const handleOutsideClick = (e) => {
    if (
      inputContainerRef.current &&
      !inputContainerRef.current.contains(e.target)
    ) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={`${data} border-[1px] rounded-md flex items-center`}
      ref={inputContainerRef}
    >
      <input
        type="text"
        name="Search"
        placeholder={t("search")}
        autoComplete="off"
        className="w-full h-full bg-transparent pl-12 pr-4 rounded-md focus:outline-none block text-white"
        onKeyUp={handleSearchOnPressKey}
        onFocus={handleOpen}
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
        } absolute  top-14  max-h-[60vh] w-full z-10 rounded-md bg-white border-[1px] border-white overflow-x-hidden overflow-y-auto `}
      >
        <div
          className="w-full backdrop-blur-3xl h-14 bg-primary/10 rounded-md hover:bg-cHover/30 duration-500 px-3 py-1 flex items-center justify-between hover:text-black text-primary cursor-pointer"
          onClick={(e) => handleSearchOnClick()}
        >
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
                onClick={(e) =>
                  handleSearchOnClick({
                    lat_: location.latitude,
                    lon_: location.longitude,
                  })
                }
              >
                <p>
                  {location.country}
                  {location?.admin1 !== undefined ? `, ${location.admin1}` : ""}
                  {location?.admin2 !== undefined ? `, ${location.admin2}` : ""}
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
