import React, { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";

export const ThemeSwitch = () => {
  const [click, setClick] = useState(false);
  const [theme, setTheme] = useState(loadTheme());

  function loadTheme() {
    const isServer = typeof window === "undefined";
    if (!isServer) {
      return localStorage.getItem("theme") || "dark";
    }
  }
  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setClick(!click);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <button onClick={handleThemeChange}>
        {click ? (
          <BsSun className="text-xl fill-black dark:fill-white" />
        ) : (
          <BiMoon className="text-xl fill-black dark:fill-white" />
        )}
      </button>
    </>
  );
};
