"use client";

import { useEffect, useState } from "react";

export default function X() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    if (localStorage.theme === "light") {
      //document.documentElement.classList.remove("dark");
      document?.querySelector("html")?.setAttribute("data-theme", "mytheme");
      setDark(false);
    } else if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      // document.documentElement.classList.add("dark");
      document?.querySelector("html")?.setAttribute("data-theme", "mydark");
    }
  }, [dark]);

  const changeDark = () => {
    localStorage.theme = dark ? "light" : "dark";
    setDark(!dark);
  };
  return (
    <input
      type="checkbox"
      checked={dark}
      onChange={changeDark}
      className="sr-only collapse relative"
    />
  );
}
