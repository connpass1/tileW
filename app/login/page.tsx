"use client"

import { redirect } from 'next/navigation';
import { useState } from "react";
import { getUserData  } from "../api/_data/fetch";
const c = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
const c1 = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
export default function X() { 
    const [x, setX] = useState("sss");
    const [token,setToken] =  useState("") ;
    const loginHandler = () => {
        setX("loginHandler"  )
         
      
    } 
    const userDataHandler = () => {
        setX(" getUserData"  )
        getUserData( token).then(json => { return setX("g" + JSON.stringify(json)) }).catch((e) => { return setX("g" + JSON.stringify(e)) })
      
    } 
   if(token.length===0) return    redirect('/login/sign/in')   
    return <div className='grid place-items-center row-span-full col-span-full  '> 
        <span>login </span>
        <button onClick={loginHandler} className="border p-2"> login  </button>
        <span className="w-96">{x} </span>
        <button onClick={userDataHandler} className="border p-2" disabled={token.length===0}> login  </button> 
     </div>   
 
}  