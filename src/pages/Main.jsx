import React, { useEffect } from "react";
import Subnav from "../components/Subnav";
import { Outlet } from "react-router-dom";
import SubnavContainer from "../components/SubnavContainer";
import useGeoLocation from "../hooks/useGeoLocation";
import { helpUserLocation } from "../helpers/helpUserLocation";
import { useDispatch, useSelector } from "react-redux";
import { helpHttp } from "../helpers/helpHttp";
import { currentWeather } from "../actions/WeatherActions";

const Main = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const uri = "http://api.weatherapi.com/v1";
  const KEY = "0329114cb704414cbc2233320220912";
  const url = `${uri}/current.json?key=${KEY}&q=-17.3895,-66.1568&aqi=yes `;

  let coordinates = "";
  let location = "denied";

  const isAllowed = async () => {
    if (location === "denied") {
      // coordinates += helpUserLocation();
    } else {
      // coordinates += location.coords;
    }

    await helpHttp()
      .get(url)
      .then((res) => {
        dispatch(currentWeather(res));
      });
  };
  useEffect(() => {
    isAllowed();
  }, [dispatch]);
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
