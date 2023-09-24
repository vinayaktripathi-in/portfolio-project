"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ReduxState } from "@/lib/redux";
import { ThemeSwitch } from "@components/theme";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, clearUser } from "@/lib/redux/slices/userDataSlice";
import { removeToken } from "@/lib/redux/slices/auth/signInSlice";
import { AiOutlineLoading3Quarters, AiOutlineUser } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useRouter, usePathname } from "next/navigation";
import { useOutsideClick } from "@/app/hooks";
import { BiLockAlt } from "react-icons/bi";

export const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch<any>();
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    // Dispatch the action to fetch user data when the component mounts
    dispatch(fetchUserData());
  }, [dispatch]);
  const userDataState = useSelector((state: ReduxState) => state.userData);
  const { userData, loading, error } = userDataState;

  function handleSignOut() {
    localStorage.removeItem("token");
    dispatch(removeToken());
    dispatch(clearUser());
    router.push("/");
  }
  // Handling outside click events to close Hamburger Menu
  const hamburgerRef = useRef(null);
  const closeMenu = () => {
    setHamburger(false);
  };
  useOutsideClick(hamburgerRef, closeMenu);

  // Handling outside click events to close Dropdown Menu
  const dropdownRef = useRef(null);
  const closeDropdown = () => {
    setDropdown(false);
  };
  useOutsideClick(dropdownRef, closeDropdown);
  return (
    <>
      <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav
          className="relative max-w-[85rem] w-full backdrop-blur supports-backdrop-blur:bg-white/95 dark:bg-gray-800/75 border border-gray-200 rounded-[36px] mx-2 mb-4 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:border-gray-700"
          aria-label="Global"
        >
          <div className="w-full flex items-center justify-between">
            <Link
              className="flex-none text-xl font-semibold dark:text-white"
              href="/"
              aria-label="Brand"
            >
              vinayaktripathi.in
            </Link>
            <div className="flex justify-center items-center gap-2">
              <div className="p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                <ThemeSwitch />
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setHamburger(!hamburger)}
                  type="button"
                  className="p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                >
                  {!hamburger ? <GiHamburgerMenu /> : <RxCross2 />}
                </button>
              </div>
              <div
                className={`hidden overflow-hidden transition-all duration-300 basis-full grow md:block`}
              >
                <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
                  <Link
                    className={`${
                      pathname === "/blog/post"
                        ? "text-blue-600"
                        : "text-gray-800 dark:text-gray-200"
                    } + inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 dark:bg-slate-900`}
                    href="/blog/post"
                  >
                    Post Blog
                  </Link>
                  <Link
                    className={`${
                      pathname === "/"
                        ? "text-blue-600"
                        : "text-gray-500 dark:text-gray-400"
                    } + font-medium hover:text-blue-600 md:py-6`}
                    href="/"
                    aria-current="page"
                  >
                    Home
                  </Link>
                  <Link
                    className={`${
                      pathname === "/services"
                        ? "text-blue-600"
                        : "text-gray-500 dark:text-gray-400"
                    } + font-medium hover:text-blue-600 md:py-6`}
                    href="/services"
                  >
                    Services
                  </Link>
                  <Link
                    className={`${
                      pathname === "/projects"
                        ? "text-blue-600"
                        : "text-gray-500 dark:text-gray-400"
                    } + font-medium hover:text-blue-600 md:py-6`}
                    href="/projects"
                  >
                    Projects
                  </Link>
                  <Link
                    className={`${
                      pathname === "/blog"
                        ? "text-blue-600"
                        : "text-gray-500 dark:text-gray-400"
                    } + font-medium hover:text-blue-600 md:py-6`}
                    href="/blog"
                  >
                    Blog
                  </Link>
                  <div className="md:py-4">
                    <button
                      onClick={() => setDropdown(!dropdown)}
                      type="button"
                      className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 "
                    >
                      Menu
                      <MdOutlineKeyboardArrowDown />
                    </button>
                    {dropdown && (
                      <div
                        ref={dropdownRef}
                        className="fixed top-20 right-24 transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] md:w-48 z-10 bg-white md:shadow-md rounded-lg p-2 dark:bg-gray-800 md:dark:border dark:border-gray-700 dark:divide-gray-700 md:border"
                      >
                        <Link
                          className={`${
                            pathname === "/about"
                              ? "text-blue-600"
                              : "text-gray-500 dark:text-gray-400"
                          } + flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-300`}
                          href="/about"
                        >
                          About
                        </Link>
                        <Link
                          className={`${
                            pathname === "/contact"
                              ? "text-blue-600"
                              : "text-gray-500 dark:text-gray-400"
                          } + flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-300`}
                          href="/contact"
                        >
                          Contact Us
                        </Link>
                        <Link
                          className={`${
                            pathname === "/team"
                              ? "text-blue-600"
                              : "text-gray-500 dark:text-gray-400"
                          } + flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-300`}
                          href="/team"
                        >
                          Our Team
                        </Link>
                        <div className="w-full mt-2 border-t border-gray-300 dark:border-gray-700"></div>
                        <button
                          onClick={handleSignOut}
                          className="w-full flex justify-center items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 group"
                        >
                          <BiLockAlt />
                          <label className="font-medium text-gray-500 md:py-4 dark:text-gray-400 group-hover:text-blue-600">
                            Sign Out
                          </label>
                        </button>
                      </div>
                    )}
                  </div>
                  <Link
                    className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                    href={userData ? "/profile" : "/signin"}
                  >
                    <AiOutlineUser />
                    {loading ? (
                      <AiOutlineLoading3Quarters className="animate-spin" />
                    ) : userData ? (
                      `${userData?.firstName ?? ""} ${
                        userData?.lastName ?? ""
                      }`.trim() || "Sign in"
                    ) : (
                      "Sign in"
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {hamburger && (
        <>
          <div
            ref={hamburgerRef}
            className={`z-10 w-full h-screen block fixed top-0 left-1/2 -translate-x-1/2 md:shadow-md pt-20 p-2 bg-white border dark:bg-gray-800 dark:border-gray-700 dark:divide-gray-700 shadow-lg dark:shadow-2xl rounded overflow-hidden transition-all duration-1000 basis-full grow md:hidden`}
          >
            <div className="p-2 flex flex-col items-center gap-y-4 gap-x-0">
              <Link
                onClick={() => setHamburger(!hamburger)}
                className={`${
                  pathname === "/blog/post"
                    ? "text-blue-600"
                    : "text-gray-800 dark:text-gray-200"
                } + inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xl font-medium bg-gray-100 dark:bg-slate-900`}
                href="/blog/post"
              >
                Post Blog
              </Link>
              <Link
                onClick={() => setHamburger(!hamburger)}
                className={`${
                  pathname === "/"
                    ? "text-blue-600"
                    : "text-gray-500 dark:text-gray-400"
                } + font-medium text-xl hover:text-blue-600 md:py-6`}
                href="/"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                onClick={() => setHamburger(!hamburger)}
                className={`${
                  pathname === "/services"
                    ? "text-blue-600"
                    : "text-gray-500 dark:text-gray-400"
                } + font-medium text-xl hover:text-blue-600 md:py-6`}
                href="/services"
              >
                Services
              </Link>
              <Link
                onClick={() => setHamburger(!hamburger)}
                className={`${
                  pathname === "/projects"
                    ? "text-blue-600"
                    : "text-gray-500 dark:text-gray-400"
                } + font-medium text-xl hover:text-blue-600 md:py-6`}
                href="/projects"
              >
                Projects
              </Link>
              <Link
                onClick={() => setHamburger(!hamburger)}
                className={`${
                  pathname === "/blog"
                    ? "text-blue-600"
                    : "text-gray-500 dark:text-gray-400"
                } + font-medium text-xl hover:text-blue-600 md:py-6`}
                href="/blog"
              >
                Blog
              </Link>
              <span className="w-full border-t"></span>
              <Link
                className="flex items-center gap-x-2 font-medium text-xl text-gray-500 hover:text-blue-600 md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                href={userData ? "/profile" : "/signin"}
              >
                <AiOutlineUser />
                {loading ? (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                ) : userData && userData.firstName && userData.lastName ? (
                  `${userData.firstName} ${userData.lastName}`
                ) : (
                  "Sign in"
                )}
              </Link>
              {userData && (
                <div className="flex items-center gap-x-2 font-medium text-xl text-gray-500 hover:text-blue-600 md:border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500">
                  <BiLockAlt />
                  <button
                    className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
