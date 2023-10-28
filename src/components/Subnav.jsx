import React, { useState } from "react";
import { subNavigation } from "../constants";

const navName = localStorage.getItem("nav");

const Subnav = () => {
  const [active, setActive] = useState(navName);
  function handleActive(e, name) {
    localStorage.setItem("nav", `${name}`);
    setActive(name);
  }
  return (
    <div className="absolute w-full top-20 left-0 px-4 sm:px-16 ">
      <ul className="flex list-none w-full h-14 justify-around items-center font-roboto_condensed text-base">
        {subNavigation.map((nav) => (
          <li
            key={nav.id}
            className={`${
              nav.name === active ? "text-secondary" : "text-white"
            } cursor-pointer sm:text-2xl text-[16px]`}
            onClick={(e) => handleActive(e, nav.name)}
          >
            <a href={`${nav.href}`}>{nav.name}</a>
          </li>
        ))}
      </ul>
      <div className="border-b-white w-full border-b-[1px]"></div>
    </div>
  );
};

export default Subnav;
