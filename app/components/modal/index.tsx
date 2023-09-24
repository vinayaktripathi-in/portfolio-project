"use client";
import { useState, ReactNode, useRef } from "react";
import { useOutsideClick } from "@/app/hooks";
import { RxCross2 } from "react-icons/rx";

interface Props {
  button?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  className?: string;
  buttonClassName?: string;
}

export const Modal = ({
  button,
  onClick,
  children,
  className,
  buttonClassName,
}: Props) => {
  const [modal, setModal] = useState(false);

  // Handling outside click events to close Modal
  const modalRef = useRef(null);
  const closeModal = () => {
    setModal(!modal);
    console.log("Clicked");
  };
  useOutsideClick(modalRef, closeModal);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setModal(!modal);
    onClick && onClick(e);
  };

  return (
    <>
      <button className={buttonClassName} onClick={handleClick}>
        {button}
      </button>
      {modal && (
        <div
          ref={modalRef}
          className={`${className} ${
            modal ? "animate-easein" : "animate-easein"
          } h-[50vh] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] w-11/12 sm:w-11/12 md:w-3/4 lg:w-1/2 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 sm:mx-auto overflow-auto`}
        >
          <div className="relative">
            <div className="absolute top-2 right-2 z-10">
              <button
                onClick={closeModal}
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
