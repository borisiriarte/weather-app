import React, { useState } from "react";
import { subNavigation } from "../constants";
import { Link } from "react-router-dom";

const Subnav = () => {
  const [active, setActive] = useState("Today");

  function handleActive(e) {
    setActive(e.target.innerHTML);
  }

  return (
    <div className="absolute w-full top-20 left-0 px-4 sm:px-16 ">
      <ul className="flex  w-full h-14 justify-around items-center font-roboto_condensed text-base border-b-white border-b-[1px]">
        {subNavigation.map((nav) => (
          <li
            key={nav.id}
            className={`${
              nav.name === active ? "text-secondary" : "text-white"
            } cursor-pointer sm:text-2xl text-base`}
            onClick={handleActive}
          >
            <Link to={`/${nav.href}`}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subnav;
