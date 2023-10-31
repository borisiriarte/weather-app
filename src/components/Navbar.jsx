import React, { useState } from "react";
import { Menu, Cross, Glass } from "../assets/img/index";
import { navigation } from "../constants";
import { Link } from "react-router-dom";
import useWindowsDimensions from "../hooks/useWindowDimensions";
import Modal from "./Modal";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [flexActive, setFlexActive] = useState("hidden");
  const [modal, setModal] = useState(false);
  const { width: w, height: h } = useWindowsDimensions();

  return (
    <>
      <Modal data={{ Cross, modal, setModal }} />

      <div className="flex items-center ">
        <div className="sm:hidden hover:bg-cHover active:bg-cActive duration-700 rounded-xl w-12 sm:w-14 sm:h-14 h-12 flex justify-center items-center cursor-pointer">
          <img src={`${Glass}`} className="w-6 block sm:hidden" />
        </div>
        <div className="hover:bg-cHover active:bg-cActive duration-700 rounded-xl w-12 sm:w-14 sm:h-14 h-12 flex justify-center items-center cursor-pointer">
          <img
            src={toggle ? Cross : Menu}
            alt="Hamburger"
            className="scale-50 object-contain "
            onClick={() => {
              setToggle(!toggle);
              setFlexActive("flex");
            }}
          />
          <div
            className={`${flexActive} ${
              !toggle ? `slide-out` : "slide-in"
            } fixed h-[calc(100vh-5rem)] w-full bottom-0 right-0 bg-primary border-t-[1px] border-t-secondary slide`}
          >
            <ul className="list-none sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-4 w-full sm:my-16 sm:mx-32">
              {navigation.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-roboto_condensed w-full p-4 h-20 sm:h-full flex justify-start items-center border-b-[1px] sm:border-[1px] border-b-secondary sm:border-secondary sm:rounded-xl  ${
                    nav.id === 6 ? "sm:hidden" : "flex"
                  } cursor-pointer`}
                >
                  <Link
                    to={`/${nav.href}`}
                    className="h-16 w-full sm:h-full flex sm:flex-col-reverse justify-between items-center sm:justify-center px-4 sm:px-0 hover:bg-cHover active:bg-cActive duration-700 rounded-xl sm:text-xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (nav.id === 2) {
                        setModal(!modal);
                      }
                      if (nav.id === 3) {
                        setModal(!modal);
                      }

                      setToggle(!toggle);
                    }}
                  >
                    {nav.name}
                    <img
                      src={`${
                        w > 768 ? nav.icon[1] || nav.icon[0] : nav.icon[0]
                      }`}
                      alt={`${nav.name}`}
                      className="w-6 h-6 sm:w-32 sm:h-32 mb-4"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
