"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme: string) => {
    if (newTheme === "system") {
      setTheme("system");
      localStorage.removeItem("theme"); // Remove explicit choice
    } else {
      setTheme(newTheme);
      localStorage.theme = newTheme;
    }
  };

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const themeOptions = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "System Default" },
  ];

  return (
    <div className="absolute right-5 top-2">
      <select
        className={`p-2 rounded-md hover:scale-110 active:scale-100 duration-200 ${
          theme === "dark"
            ? "bg-slate-200 dark:bg-[#212933]"
            : "bg-[#212933] dark:bg-slate-200"
        }`}
        value={theme}
        onChange={(e) => handleThemeChange(e.target.value)}
      >
        {themeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
