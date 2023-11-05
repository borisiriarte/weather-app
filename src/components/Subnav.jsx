import React, { useEffect, useState } from "react";
import { subNavigation } from "../constants";
import { Link, useLocation } from "react-router-dom";
import { t } from "i18next";

const Subnav = () => {
  const location = useLocation();
  let path = location.pathname.slice(1);

  return (
    <ul className="flex  w-full h-11 sm:h-14 justify-around items-center font-roboto_condensed text-base border-b-white border-b-[1px]">
      {subNavigation.map((nav) => (
        <li
          key={nav.id}
          className={` ${
            nav.href === path ? "text-secondary" : "text-white"
          } cursor-pointer sm:text-2xl text-base transition-colors duration-500`}
        >
          <Link to={`${nav.href}`}>{nav.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Subnav;
