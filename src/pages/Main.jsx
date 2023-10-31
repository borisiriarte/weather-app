import React from "react";
import Subnav from "../components/Subnav";
import { Outlet } from "react-router-dom";
import SubnavContainer from "../components/SubnavContainer";

const Main = () => {
  return (
    <>
      <SubnavContainer>
        <Subnav />
      </SubnavContainer>
      <Outlet />
    </>
  );
};

export default Main;
