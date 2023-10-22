'use client'
import { ContextProvider } from "@/app/_context/contextProvider";
import { useContext, useEffect } from "react";

export default function ContextHandler({text}:{text:string|undefined}) {
   const { dispatch } = useContext(ContextProvider);
    useEffect(() => {
        return dispatch({type:  "PATH",payload: text  });
    },[dispatch, text])
  
    return null
}