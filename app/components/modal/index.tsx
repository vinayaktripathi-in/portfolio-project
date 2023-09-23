"use client";
import { useState, ReactNode, useRef } from "react";
import { useOutsideClick } from "@/app/hooks";
import { RxCross2 } from "react-icons/rx";

interface Props {
  button?: ReactNode;
  children?: ReactNode;
  className?: string;
  buttonClassName?: string;
}

export const Modal = ({
  button,
  children,
  className,
  buttonClassName,
}: Props) => {
  const [modal, setModal] = useState(false);

  // Handling outside click events to close Modal
  const modalRef = useRef(null);
  const closeModal = () => {
    setModal(false);
  };
  useOutsideClick(modalRef, closeModal);

  return (
    <>
      <button className={buttonClassName} onClick={() => setModal(!modal)}>
        {button}
      </button>
      {modal && (
        <div
          ref={modalRef}
          className={`${className} ${
            modal ? "opacity-100 duration-500" : "opacity-0"
          } min-h-[50vh] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] w-full sm:w-11/12 md:w-3/4 lg:w-1/2 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 ease-out transition-all sm:mx-auto`}
        >
          <div className="relative">
            <div className="absolute top-2 right-2">
              <button
                onClick={() => setModal(!modal)}
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-notifications"
              >
                <span className="sr-only">Close</span>
                <RxCross2 className="text-xl text-gray-500" />
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
