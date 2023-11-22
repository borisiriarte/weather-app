import React from "react";
import SearchBar from "../components/SearchBar";
import { Logo } from "../assets/img";

import { weather_icons } from "../assets/weather_icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import updateStorage from "../helpers/helpUpdateStorage";
import { useTranslation } from "react-i18next";
import weather_url from "../constants/url";
import { helpHttp } from "../helpers/helpHttp";
import { forecast } from "../actions/WeatherActions";

const styles = `relative h-14 w-4/5 border-white`;

const Main = () => {
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const current = weather.today;
  const location = weather.location;
  let storage = JSON.parse(localStorage.getItem("recentLocations"));

  const goTo = () => {
    navigate(`${t("lanName")}/weather`);
    const { name, country, lat, lon } = weather.location;
    updateStorage({ name, country, lat, lon });
  };

  const handleFindOnClick = async (coordinates) => {
    const { lat, lon } = coordinates;
    const coordinatesQuery = `&q=${lat},${lon}`;
    const url = weather_url("forecast", coordinatesQuery);
    let loc;

    await helpHttp()
      .get(url)
      .then((res) => {
        dispatch(forecast(res));
        loc = res.location;
        const { name, country, lat, lon } = res.location;
        updateStorage({ name, country, lat, lon });
      })
      .catch((err) => console.error(err));

    navigate(`/${t("lanName")}/weather`);
  };

  return (
    <>
      <div className={`w-full flex items-center font-sansation pl-2 py-3`}>
        <img src={`${Logo}`} alt="Logo" className="scale-75 sm:scale-105" />
        <h1 className="sm:text-xl text-base leading-none text-secondary -ml-1 sm:ml-2">
          CLIMATE
        </h1>
      </div>
      <div className="w-full grid place-content-center sm:my-6 my-0 mb-6">
        <div className="w-[90vw]  sm:w-[80vw] h-[600px]  rounded-xl backdrop-blur-3xl bg-cHover/30 flex flex-col items-center justify-center sm:gap-y-3 gap-y-2">
          <SearchBar
            data={styles}
            cross={
              "bg-white active:shadow-inner active:shadow-primary/50 rounded-tr-[4px] rounded-br-[4px]"
            }
          />
          <div className="text-center text-xs text-white font-roboto">
            RECENT LOCATIONS
          </div>
          <div
            className={`w-4/5 h-[75%] grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-2 grid-rows-4 gap-1 text-white font-roboto`}
          >
            <div
              className="backdrop-blur-3xl bg-cHover/10 rounded-md px-4 py-2 sm:p-5 font-roboto grid grid-cols-2 cursor-pointer"
              onClick={goTo}
            >
              {weather.today?.cloud !== undefined && (
                <>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h1 className="text-base sm:text-xl">{location.name}</h1>
                      <p className="text-xs text-white/60">
                        {location.country}
                      </p>
                    </div>
                    <div>
                      <div className="text-base sm:text-xl">
                        {Math.floor(current["temp_c"])}°
                      </div>
                      <p className="text-xs text-white/60">
                        Feels Like
                        {Math.floor(current["feelslike_c"])}°
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end items-center">
                    <i
                      className={`wi ${
                        current["is_day"] === 0
                          ? weather_icons[`${current.condition.code}`].night
                          : weather_icons[`${current.condition.code}`].day
                      } text-secondary text-[50px] sm:text-[90px] md:text-[120px] leading-none`}
                    ></i>
                  </div>
                </>
              )}
            </div>

            {storage?.length !== undefined &&
              storage.map((x, index) => (
                <div
                  className="backdrop-blur-3xl bg-cHover/10 rounded-md px-4 py-2 sm:p-5 font-roboto grid grid-cols-2 cursor-pointer "
                  key={index}
                  onClick={(e) => handleFindOnClick({ lat: x.lat, lon: x.lon })}
                >
                  <div className="flex flex-col justify-between">
                    <div>
                      <h1 className="text-base sm:text-xl">{x.name}</h1>
                      <p className="text-xs text-white/60">{x.country}</p>
                    </div>
                    <p className="text-xs">{`${x.lat} , ${x.lon}`}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
