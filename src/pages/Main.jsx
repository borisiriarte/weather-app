import React, { useEffect, useState } from "react";
import Subnav from "../components/Subnav";
import { Outlet, useLocation } from "react-router-dom";
import SubnavContainer from "../components/SubnavContainer";
import useGeoLocation from "../hooks/useGeoLocation";
import { helpUserLocation } from "../helpers/helpUserLocation";
import { useDispatch, useSelector } from "react-redux";
import { helpHttp } from "../helpers/helpHttp";
import { currentWeather } from "../actions/WeatherActions";

const Main = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const [ipLocation, setUIpLocation] = useState({});

  const uri = "http://api.weatherapi.com/v1";
  const KEY = "0329114cb704414cbc2233320220912";
  const base = `${uri}/current.json?key=${KEY}`;
  const aqi = "&aqui=yes";

  const location = useGeoLocation();
  let lat;
  let long;

  const isAllowed = async () => {
    let coordinates;
    let url;

    if (location.status > 0) {
      if (location.status === 1) {
        lat = location.res.lat;
        long = location.res.long;
        coordinates = `&q=${lat},${long}`;
        url = base + coordinates + aqi;
        await helpHttp()
          .get(url)
          .then((res) => {
            console.log(res);
            dispatch(currentWeather(res));
          });
      }

      if (location.status === 2) {
        const userLocation = await helpUserLocation();
        lat = userLocation.latitude;
        long = userLocation.longitude;
        coordinates = `&q=${lat},${long}`;
        url = base + coordinates + aqi;
        await helpHttp()
          .get(url)
          .then((res) => {
            console.log(res);
            dispatch(currentWeather(res));
          });
      }
    }
  };

  useEffect(() => {
    isAllowed();
  }, [dispatch, location]);
  return (
    <>
      <SubnavContainer>
        <Subnav />
      </SubnavContainer>
      <Outlet context={weather} />
    </>
  );
};

export default Main;
