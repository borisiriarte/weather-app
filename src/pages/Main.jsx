import React from "react";
import Subnav from "../components/Subnav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Subnav />
      <Outlet />
    </>
  );
};

export default Main;
