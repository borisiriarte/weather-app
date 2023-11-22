import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Location from "../pages/Location";
import Maps from "../pages/Maps";
import MainData from "../pages/MainData";
import Today from "../pages/Today";
import Daily from "../pages/Daily";
import Hourly from "../pages/Hourly";
import Error from "../pages/Error";
import Main from "../pages/Main";
import { useDispatch, useSelector } from "react-redux";
import { helpUserLocation } from "../helpers/helpUserLocation";
import weather_url from "../constants/url";
import { helpHttp } from "../helpers/helpHttp";
import { forecast } from "../actions/WeatherActions";
import { useTranslation } from "react-i18next";

const AppRoutes = () => {
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  let storage = JSON.parse(localStorage.getItem("recentLocations"));

  const { t } = useTranslation();

  const getForecastCurrentLocation = async (coordinates) => {
    let lat, lon;
    if (coordinates === undefined) {
      const userCurrentLocation = await helpUserLocation();

      lat = userCurrentLocation.latitude;
      lon = userCurrentLocation.longitude;
    } else {
      lat = coordinates.lat;
      lon = coordinates.lon;
    }

    const coordinatesQuery = `&q=${lat},${lon}`;
    const url = weather_url("forecast", coordinatesQuery);

    await helpHttp()
      .get(url)
      .then((res) => {
        dispatch(forecast(res));
      });
  };

  useEffect(() => {
    if (localStorage.getItem("recentLocations") === null) {
      localStorage.setItem("recentLocations", "[]");
    }

    if (localStorage.getItem("language") === null) {
      localStorage.setItem("language", "en");
    }

    if (localStorage.getItem("unit") === null) {
      localStorage.setItem("unit", "m");
    }

    if (
      weather.today?.cloud === undefined &&
      JSON.parse(localStorage.getItem("recentLocations")).length === 0
    ) {
      getForecastCurrentLocation();
    } else {
      getForecastCurrentLocation({ lat: storage[0].lat, lon: storage[0].lon });
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path={`${t("lanName")}/weather`} element={<MainData />}>
        <Route index element={<Today />}></Route>
        <Route path="today" element={<Today />} />
        <Route path="daily" element={<Daily />} />
        <Route path="hourly" element={<Hourly />} />
      </Route>
      <Route path="locations" element={<Location />} />
      <Route path="maps" element={<Maps />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
