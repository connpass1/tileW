"use client"

import { ContextProvider } from "@/app/_context/contextProvider";
import { useContext } from "react";

export default function Breadcrumb({slug}:{slug:string}) {
  const { state  } = useContext(ContextProvider); 
  return    state.path 
}

 