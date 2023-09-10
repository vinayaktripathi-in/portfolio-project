"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ReduxState } from "@/lib/redux";
import { ThemeSwitch } from "@components/theme";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "@/lib/redux/slices/userDataSlice";
import { AiOutlineLoading3Quarters, AiOutlineUser } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const Header = () => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    // Dispatch the action to fetch user data when the component mounts
    dispatch(fetchUserData());
  }, [dispatch]);
  const userDataState = useSelector((state: ReduxState) => state.userData);
  const { data, loading } = userDataState;
  return (
    <>
      <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav
          className="relative max-w-[85rem] w-full backdrop-blur supports-backdrop-blur:bg-white/95 dark:bg-gray-800/75 border border-gray-200 rounded-[36px] mx-2 mb-4 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:border-gray-700"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              className="flex-none text-xl font-semibold dark:text-white"
              href="/"
              aria-label="Brand"
            >
              vinayaktripathi.in
            </Link>
            <div className="md:hidden">
              <button
                onClick={() => setClick(!click)}
                type="button"
                className="p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              >
                {!click ? <GiHamburgerMenu /> : <RxCross2 />}
              </button>
            </div>
          </div>
          <div
            className={`hidden overflow-hidden transition-all duration-300 basis-full grow md:block`}
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
              <ThemeSwitch />
              <Link
                className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                href="#"
              >
                Post Blog
              </Link>
              <Link
                className="font-medium text-blue-600 md:py-6 dark:text-blue-500"
                href="/"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
              >
                Services
              </Link>
              <Link
                className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
              >
                Projects
              </Link>
              <Link
                className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="/blog"
              >
                Blog
              </Link>
              <div className="md:py-4">
                <button
                  onClick={() => setOpen(!open)}
                  type="button"
                  className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 "
                >
                  Dropdown
                  <MdOutlineKeyboardArrowDown />
                </button>
                {open && (
                  <div className="absolute top-16 right-24 transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] md:w-48 z-10 bg-white md:shadow-md rounded-lg p-2 dark:bg-gray-800 md:dark:border dark:border-gray-700 dark:divide-gray-700 md:border">
                    <Link
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      href="#"
                    >
                      About
                    </Link>
                    <div className="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
                      <button
                        type="button"
                        className="w-full flex justify-between items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      >
                        Sub Menu
                        <svg
                          className="md:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-2 bg-white md:shadow-md rounded-lg p-2 dark:bg-gray-800 md:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute md:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          About
                        </Link>
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          Downloads
                        </Link>
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          Team Account
                        </Link>
                      </div>
                    </div>
                    <Link
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      href="#"
                    >
                      Downloads
                    </Link>
                    <Link
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      href="#"
                    >
                      Team Account
                    </Link>
                  </div>
                )}
              </div>
              <Link
                className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                href={data ? "/profile" : "/signin"}
              >
                <AiOutlineUser />
                {loading ? (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                ) : data ? (
                  `${data?.firstName ?? ""} ${data?.lastName ?? ""}`.trim() ||
                  "Sign in"
                ) : (
                  "Sign in"
                )}
              </Link>
            </div>
          </div>
        </nav>
      </header>
      {click && (
        <>
          <div
            className={`block overflow-hidden transition-all duration-300 basis-full grow md:hidden`}
          >
            <div className="p-2 flex flex-col items-center gap-y-4 gap-x-0 mt-5">
              <ThemeSwitch />
              <Link
                className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                href="/blog/post"
              >
                Post Blog
              </Link>
              <Link
                className="font-medium text-blue-600 md:py-6 dark:text-blue-500"
                href="/"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
              >
                Services
              </Link>
              <Link
                className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
              >
                Projects
              </Link>
              <Link
                className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="/blog"
              >
                Blog
              </Link>
              <div className="md:py-4">
                <button
                  onClick={() => setOpen(!open)}
                  type="button"
                  className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 "
                >
                  Dropdown
                  <MdOutlineKeyboardArrowDown />
                </button>
                {open && (
                  <div className="absolute top-16 right-24 transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] md:w-48 z-10 bg-white md:shadow-md rounded-lg p-2 dark:bg-gray-800 md:dark:border dark:border-gray-700 dark:divide-gray-700 md:border">
                    <Link
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      href="#"
                    >
                      About
                    </Link>
                    <div className="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
                      <button
                        type="button"
                        className="w-full flex justify-between items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      >
                        Sub Menu
                        <svg
                          className="md:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-2 bg-white md:shadow-md rounded-lg p-2 dark:bg-gray-800 md:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute md:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          About
                        </Link>
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          Downloads
                        </Link>
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          Team Account
                        </Link>
                      </div>
                    </div>
                    <Link
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      href="#"
                    >
                      Downloads
                    </Link>
                    <Link
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      href="#"
                    >
                      Team Account
                    </Link>
                  </div>
                )}
              </div>
              <Link
                className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                href={data ? "/profile" : "/signin"}
              >
                <AiOutlineUser />
                {loading ? (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                ) : data ? (
                  `${data?.firstName ?? ""} ${data?.lastName ?? ""}`.trim() ||
                  "Sign in"
                ) : (
                  "Sign in"
                )}
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};
