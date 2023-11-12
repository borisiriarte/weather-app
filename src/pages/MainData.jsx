import React from "react";
import Subnav from "../components/Subnav";
import { Outlet } from "react-router-dom";
import SubnavContainer from "../components/SubnavContainer";

const MainData = () => {
  return (
    <>
      <SubnavContainer>
        <Subnav />
      </SubnavContainer>
      <Outlet />
    </>
  );
};

export default MainData;
