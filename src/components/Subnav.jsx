import React from "react";
import { subNavigation } from "../constants";
import { Link, useLocation } from "react-router-dom";
import { t } from "i18next";
import { useSelector } from "react-redux";

const Subnav = () => {
  const location = useLocation();
  const weather = useSelector((state) => state.weather);
  let path = location.pathname.slice(1);

  return (
    <ul className="flex  w-full h-11 sm:h-14 justify-around items-center font-roboto_condensed text-base border-b-white border-b-[1px]">
      {subNavigation.map((nav) => (
        <li
          key={nav.id}
          className={`${
            path.includes(nav.href) ? "text-secondary" : "text-white"
          } cursor-pointer sm:text-2xl text-base transition-colors duration-500 `}
        >
          <Link to={`/${t("lanName")}/weather/${nav.href}`}>
            {nav[t("name")]}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Subnav;
