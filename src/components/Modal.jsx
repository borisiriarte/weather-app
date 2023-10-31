import React from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

const Modal = ({ data }) => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language);

  console.log(lang);

  return (
    <>
      {createPortal(
        <div
          className={`${
            data.modal ? "flex" : "hidden"
          } fixed left-0 top-0 w-full h-full bg-primary/50 backdrop-blur-sm justify-center items-center text-white`}
        >
          <div className="relative w-[40vw] h-[30vh] bg-primary rounded-lg grid place-content-center ">
            <img
              src={data.Cross}
              alt="escape"
              className="w-6 h-6 absolute right-2 top-2 pointer-events-auto cursor-pointer hover:bg-cHover  active:bg-cActive rounded-md"
              onClick={() => {
                data.setModal(!data.modal);
              }}
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Modal;
