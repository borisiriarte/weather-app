import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ data, children }) => {
  return (
    <>
      {createPortal(
        <div
          className={`${
            data.modal ? "flex" : "hidden"
          } fixed left-0 top-0 w-full h-full bg-primary/50 backdrop-blur-3xl  justify-center items-center text-white`}
        >
          <div
            className={`relative sm:w-[400px] w-72 h-64 bg-primary rounded-lg grid place-content-center `}
          >
            <img
              src={data.Cross}
              alt="escape"
              className="w-6 h-6 absolute right-2 top-2 pointer-events-auto cursor-pointer hover:bg-cHover  active:bg-cActive rounded-md"
              onClick={(e) => {
                e.stopPropagation();
                data.setModal(!data.modal);
              }}
            />
            {children}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Modal;
