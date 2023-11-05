import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../actions/languageActions";
import i18n from "../languages";
import { t } from "i18next";

const languages = [
  { id: 0, name: "English", value: "en" },
  { id: 1, name: "Español", value: "es" },
  // { id: 2, name: "Chino", value: "ch" },
];

const ModalContent = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.language);

  const handleLanguage = useCallback((clickedLang) => {
    i18n.changeLanguage(clickedLang);
    dispatch(changeLanguage(clickedLang));
  }, []);

  return (
    <div className="absolute w-3/4 h-3/4 inset-0 m-auto grid grid-rows-auto rounded-xl font-roboto text-base sm:text-2xl  overflow-y-auto overflow-x-hidden gap-y-1">
      <div className="text-white text-xl">{t("lanName")}</div>
      {languages.map((el) => (
        <div
          className="w-full max-h-max py-2 rounded-md self-center flex justify-center items-center bg-cHover/40 hover:bg-cHover active:bg-cActive text-white/70 pointer-events-auto cursor-pointer duration-300 "
          id={el.value}
          key={el.id}
          onClick={(e) => {
            console.log(el.value);

            handleLanguage(el.value);
          }}
        >
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default ModalContent;
