import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUnits } from "../actions/UnitsActions";
import { t } from "i18next";

const data_unit = [
  {
    id: 0,
    name: "Metric",
    nombre: "Métrico",
    units: "°c, km/h, mm",
    value: "m",
  },
  {
    id: 1,
    name: "Imperial",
    nombre: "Imperial",
    units: "°f, mi/h, in",
    value: "i",
  },
];

const ModalContentUnits = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="absolute w-3/4 h-3/4 inset-0 m-auto grid grid-rows-auto rounded-xl font-roboto text-base sm:text-2xl  overflow-y-auto overflow-x-hidden gap-y-1">
      <div className="text-center text-white text-xl">
        {t("system").toUpperCase()}
      </div>
      {data_unit.map((unit) => (
        <div
          className={`w-full max-h-max py-2 px-2 rounded-md self-center flex justify-between items-center bg-cHover/40 hover:bg-cHover active:bg-cActive text-white/70 pointer-events-auto cursor-pointer duration-300 `}
          key={unit.id}
          onClick={() => {
            localStorage.setItem("unit", unit.value);
            dispatch(changeUnits(unit.value));
            data.setModalUnits(!data.modalUnits);
          }}
        >
          <div>{unit[t("name")]}</div>
          <div>{unit.units}</div>
        </div>
      ))}
    </div>
  );
};

export default ModalContentUnits;
