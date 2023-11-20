import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../actions/languageActions";
import i18n from "../languages";
import { useTranslation } from "react-i18next";

const languages = [
  { id: 0, name: "English", value: "en" },
  { id: 1, name: "Español", value: "es" },
];

const ModalContentLang = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleLanguage = useCallback((clickedLang) => {
    i18n.changeLanguage(clickedLang);
    dispatch(changeLanguage(clickedLang));
  }, []);

  return (
    <div className="absolute w-3/4 h-3/4 inset-0 m-auto grid grid-rows-auto rounded-xl font-roboto text-base sm:text-2xl  overflow-y-auto overflow-x-hidden gap-y-1">
      <div className="text-center text-white text-xl">
        {t("lan").toLocaleUpperCase()}
      </div>
      {languages.map((el) => (
        <div
          className="w-full max-h-max py-2 rounded-md self-center flex justify-center items-center bg-cHover/40 hover:bg-cHover active:bg-cActive text-white/70 pointer-events-auto cursor-pointer duration-300 "
          id={el.value}
          key={el.id}
          onClick={(e) => {
            handleLanguage(el.value);

            if (localStorage.getItem("language") !== el.value) {
              localStorage.setItem("language", el.value);
              const pathname = window.location.pathname;

              window.location.pathname = el.value + pathname.slice(3);
            }
          }}
        >
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default ModalContentLang;
