import React, { useEffect, useState } from "react";
import { Menu, Cross, Glass } from "../assets/img/index";
import { navigation } from "../constants";
import { Link } from "react-router-dom";
import useWindowsDimensions from "../hooks/useWindowDimensions";
import { createPortal } from "react-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [flexActive, setFlexActive] = useState("hidden");
  const [modal, setModal] = useState(false);
  const { width: w, height: h } = useWindowsDimensions();

  return (
    <>
      {createPortal(
        <div
          className={`${
            modal ? "flex" : "hidden"
          } fixed left-0 top-0 w-full h-full bg-secondary/40 backdrop-blur-sm justify-center items-center text-white`}
        >
          <div className="relative w-[40vw] h-[30vh] bg-primary rounded-lg grid place-content-center  ">
            <img
              src={Cross}
              alt="escape"
              className="w-6 h-6 absolute right-2 top-2 pointer-events-auto cursor-pointer hover:bg-cHover  active:bg-cActive rounded-md"
              onClick={(e) => {
                setModal(!modal);
              }}
            />
            <div className="c-scrollbar absolute w-3/4 h-3/4 inset-0 m-auto grid grid-rows-auto rounded-xl font-roboto text-2xl overflow-y-scroll overflow-x-hidden gap-y-1">
              <div className="w-full max-h-max py-1 rounded-md self-center flex justify-center items-center bg-cHover/40 hover:bg-cHover active:bg-cActive text-white/70 pointer-events-auto cursor-pointer duration-300 ">
                Español
              </div>
              <div className="w-full max-h-max py-1 rounded-md self-center flex justify-center items-center bg-cHover/40 hover:bg-cHover active:bg-cActive text-white/70 pointer-events-auto cursor-pointer duration-300 ">
                Español
              </div>
              <div className="w-full max-h-max py-1 rounded-md self-center flex justify-center items-center bg-cHover/40 hover:bg-cHover active:bg-cActive text-white/70 pointer-events-auto cursor-pointer duration-300 ">
                Español
              </div>
              <div className="w-full max-h-max py-1 rounded-md self-center flex justify-center items-center bg-cHover/40 hover:bg-cHover active:bg-cActive text-white/70 pointer-events-auto cursor-pointer duration-300 ">
                Español
              </div>
              <div className="w-full max-h-max py-1 rounded-md self-center flex justify-center items-center bg-cHover/40 hover:bg-cHover active:bg-cActive text-white/70 pointer-events-auto cursor-pointer duration-300 ">
                Español
              </div>
              <div className="w-full max-h-max py-1 rounded-md self-center flex justify-center items-center bg-cHover/40 hover:bg-cHover active:bg-cActive text-white/70 pointer-events-auto cursor-pointer duration-300 ">
                Español
              </div>
              <div className="w-full max-h-max py-1 rounded-md self-center flex justify-center items-center bg-cHover/40 hover:bg-cHover active:bg-cActive text-white/70 pointer-events-auto cursor-pointer duration-300 ">
                Español
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      <div className="flex items-center ">
        <div className="hover:bg-cHover active:bg-cActive duration-700 rounded-xl w-12 sm:w-14 sm:h-14 h-12 flex justify-center items-center cursor-pointer">
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
                      if (nav.id === 2 || nav.id === 3) {
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
