"use client";
import { useEffect } from "react";
export default function DarkModeHandler() {
  useEffect(() => {
    if (localStorage.theme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return null;
}
