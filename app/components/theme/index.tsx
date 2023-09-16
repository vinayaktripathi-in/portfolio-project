import React, { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState("dark");

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <button
        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
        onClick={handleThemeChange}
      >
        {theme === "light" ? <BsSun /> : <BiMoon />}
      </button>
    </>
  );
};
