"use client";
import { useEffect, useState } from "react";
import { BsFillBrightnessHighFill, BsFillMoonStarsFill } from "react-icons/bs";
export default function ThemeHandler() {
 const [ dark,setDark]=useState(false)
 
useEffect(()=>{
  if (localStorage.theme === 'light') {
    document.documentElement.classList.remove('dark')
   
  }
   if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
     document.documentElement.classList.add('dark')
     setDark(true);
} },[ dark])

  const changeDark = () => {
    localStorage.theme = dark?'light':"dark";
   // if (dark) document.documentElement.classList.remove('dark')
   // else document.documentElement.classList.add('dark')
   
    setDark(!dark); 
  };
  
  return<>
   {dark?<BsFillMoonStarsFill onClick={changeDark } className="col-start-5 icon  row-start-1"/> : 
         <BsFillBrightnessHighFill onClick={changeDark } className="col-start-5 icon  row-start-1"/> }
 </>
  
}
