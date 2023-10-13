"use client";
import { useEffect, useState } from "react";
import  Link from "next/link";
import { BsFillBrightnessHighFill, BsFillMoonStarsFill ,BsFillDoorOpenFill,BsFillPersonFill,BsFillBellFill} from "react-icons/bs";
export default function ThemeHandler() {
 const [ dark,setDark]=useState(true)
 const [ isUser,setIsUser]=useState("")
useEffect(()=>{ 
  if (localStorage.theme === 'light') {
    document.documentElement.classList.remove('dark') 
    setDark(false);
  }
  else if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
     document.documentElement.classList.add('dark')
     
} },[ dark])
  
  const changeDark = () => {
    localStorage.theme = dark?'light':"dark";  
    setDark(!dark); 
  };
   
  return<>
   {dark?<BsFillMoonStarsFill onClick={changeDark } className="col-start-5 icon  row-start-1"/> : 
         <BsFillBrightnessHighFill onClick={changeDark } className="col-start-5 icon  row-start-1"/> } 
       
 </>
 
  
}
