import React, { useEffect, useState } from "react";
import { Menu, Cross } from "../assets/img/index";
import { navigation } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="hover:bg-cHover active:bg-cActive duration-700 rounded-xl w-12 sm:w-14 sm:h-14 h-12 flex justify-center items-center cursor-pointer">
      <img
        src={toggle ? Cross : Menu}
        alt="Hamburger"
        className="w-8 h-8 object-contain sm:w-10 sm:h-10"
        onClick={() => setToggle(!toggle)}
      />

      <div
        className={`flex ${
          !toggle ? `slide-out` : "slide-in"
        } fixed h-[calc(100vh-5rem)] w-full bottom-0 right-0 bg-primary border-t-[1px] border-t-secondary slide z-10`}
      >
        <ul className="list-none sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-4 w-full sm:my-16 sm:mx-[128px]">
          {navigation.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-roboto_condensed font-normal cursor-pointer text-white text-base w-full sm:w-full p-4 h-20 sm:h-full flex justify-start items-center border-b-[1px] sm:border-[1px] border-b-secondary sm:border-secondary sm:rounded-xl  ${
                nav.id === 6 ? "sm:hidden" : "flex"
              }`}
            >
              <a
                href={`#${nav.href}`}
                className="h-16 w-full sm:h-full flex sm:flex-col-reverse justify-between items-center sm:justify-center px-4 sm:px-0 hover:bg-cHover active:bg-cActive duration-700 rounded-xl"
              >
                {nav.name}
                <img
                  src={`${nav.icon}`}
                  alt={`${nav.name}`}
                  className="w-6 h-6 sm:w-32 sm:h-32"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
