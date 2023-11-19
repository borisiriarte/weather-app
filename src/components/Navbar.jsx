import React, { useState } from "react";
import { Menu, Cross } from "../assets/img/index";
import { navigation } from "../constants";
import { Link } from "react-router-dom";
import useWindowsDimensions from "../hooks/useWindowDimensions";
import Modal from "./Modal";
import ModalContentLang from "./ModalContentLang";
import SearchContainer from "./searchContainer";
import ModalContentUnits from "./ModalContentUnits";
import { t } from "i18next";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [flexActive, setFlexActive] = useState("hidden");
  const [modalLang, setModalLang] = useState(false);
  const [modalUnits, setModalUnits] = useState(false);
  const { width: w, height: h } = useWindowsDimensions();

  return (
    <>
      <Modal data={{ Cross, modal: modalLang, setModal: setModalLang }}>
        <ModalContentLang />
      </Modal>

      <Modal data={{ Cross, modal: modalUnits, setModal: setModalUnits }}>
        <ModalContentUnits data={{ setModalUnits, modalUnits }} />
      </Modal>

      <div className="flex items-center gap-1">
        <SearchContainer />
        <div
          className="hover:bg-cHover active:bg-cActive duration-700 rounded-xl w-12 sm:w-14 sm:h-14 h-12 flex justify-center items-center cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
            setFlexActive("flex");
          }}
        >
          <img
            src={toggle ? Cross : Menu}
            alt="Hamburger"
            className="scale-50 object-contain pointer-events-none"
          />
          <div
            className={`${flexActive} ${
              !toggle ? `slide-out` : "slide-in"
            } fixed h-[calc(100vh-5rem)] w-full bottom-0 right-0 bg-primary border-t-[1px] border-t-secondary slide`}
          >
            <ul className="list-none sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-4 w-full sm:my-16 sm:mx-32">
              {navigation[0].map((nav) => (
                <li
                  key={nav.id}
                  className={`font-roboto_condensed w-full p-4 h-20 sm:h-full flex justify-start items-center border-b-[1px] sm:border-[1px] border-b-secondary sm:border-secondary sm:rounded-xl  ${
                    nav.id === 6 ? "sm:hidden" : "flex"
                  } cursor-pointer`}
                >
                  <div
                    className="h-16 w-full sm:h-full flex sm:flex-col-reverse justify-between items-center sm:justify-center px-4 sm:px-0 hover:bg-cHover active:bg-cActive duration-700 rounded-xl sm:text-xl"
                    onClick={() => {
                      if (nav.id === 1) {
                        setModalLang(!modalLang);
                      }

                      if (nav.id === 2) {
                        setModalUnits(!modalUnits);
                      }

                      setToggle(!toggle);
                    }}
                  >
                    {nav[t("name")]}
                    <img
                      src={`${
                        w > 768 ? nav.icon[1] || nav.icon[0] : nav.icon[0]
                      }`}
                      alt={`${nav.name}`}
                      className="w-6 h-6 sm:w-32 sm:h-32 mb-4"
                    />
                  </div>
                </li>
              ))}
              {navigation[1].map((nav) => (
                <li
                  key={nav.id}
                  className={`font-roboto_condensed w-full p-4 h-20 sm:h-full flex justify-start items-center border-b-[1px] sm:border-[1px] border-b-secondary sm:border-secondary sm:rounded-xl  ${
                    nav.id === 6 ? "sm:hidden" : "flex"
                  } cursor-pointer`}
                >
                  <Link
                    to={`/${nav.href}`}
                    className="h-16 w-full sm:h-full flex sm:flex-col-reverse justify-between items-center sm:justify-center px-4 sm:px-0 hover:bg-cHover active:bg-cActive duration-700 rounded-xl sm:text-xl"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    {nav[t("name")]}
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
