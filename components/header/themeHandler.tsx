"use client";
import { useEffect, useState } from "react";
import {
  BsFillBrightnessHighFill,
  BsFillMoonStarsFill,
} from "react-icons/bs";
export default function ThemeHandler() {
  const [dark, setDark] = useState(true);
  const [isUser, setIsUser] = useState("");
  useEffect(() => {
    if (localStorage.theme === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
  }, [dark]);

  const changeDark = () => {
    localStorage.theme = dark ? "light" : "dark";
    setDark(!dark);
  };

  return (
    <>
      {dark ? (
        <BsFillMoonStarsFill
          onClick={changeDark}
          className="icon col-start-[-2]"
        />
      ) : (
        <BsFillBrightnessHighFill
          onClick={changeDark}
          className="icon col-start-[-2]"
        />
      )}
    </>
  );
}
