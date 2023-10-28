"use client"

import NextImage from "next/image";
import { useState } from "react";
export default function Test() {
  const [state, setState] = useState("")
  const [state1, setState1] = useState("")
  const login = ( ) => {
    setState1("jjjj") 
    fetch("/api/x/login", {
     method: "POST", // *GET, POST, PUT, DELETE, etc.
     mode: "cors", // no-cors, *cors, same-origin
     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
     credentials: "same-origin", // include, *same-origin, omit
     headers: {
       "Content-Type": "application/json",
       // 'Content-Type': 'application/x-www-form-urlencoded',
      },  
      body: JSON.stringify({output: state})
    }).then(res => res.json().then((json) => {
      setState1(json)
      console.log( json );
    }))
      .catch(e => { setState1(e  )
      })
}
    const token = ( ) => {
        
        fetch("/api/x/token", {
         method: "POST", // *GET, POST, PUT, DELETE, etc.
         mode: "cors", // no-cors, *cors, same-origin
         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
         credentials: "same-origin", // include, *same-origin, omit
         headers: {
           "Content-Type": "application/json",
           // 'Content-Type': 'application/x-www-form-urlencoded',
          },  
          body: JSON.stringify({output:state})
        }).then(res => res.json().then((json) => {
         
          console.log( json );setState1(json)
        }))
          .catch(e => {console.log(e);setState1(e)
          }) 
    } 
  return <div className="flex flex-col gap-4 bg-slate-700   col-span-full row-span-full">
 <div className="w-full h-[280px] sm:h-[320px]   sm:h-[340px]  md:w-1/2     md:h-[280px]   lg:h-[340px] xl:h-[420px]  test relative"   >
 <NextImage  
        src={"https://firebasestorage.googleapis.com/v0/b/nextjs-43ece.appspot.com/o/items%2Fanada-23712.jpg?alt=media&token=3be7abcd-9e6c-4ed3-967b-5e09eff375d4"}
        
     objectFit="cover"
      alt="Picture of the author"
      quality="75"
      loading="lazy"
      fill 
      
      sizes="(max-width: 640px) 50vw, (max-width: 768px) 20vw, 10vw"
      />
    </div>
<div className="w-full h-4     bg-orange-800  sm:bg-green-500  md:bg-blue-800  lg:bg-slate-600"  />
 
     
<input type="text" value={state} onChange={(v)=> setState(v.target.value) }/>
      <button type="button" className="btn bg-red-700" onClick={token}>  token</button>
      <button  type="button"  className="btn bg-red-700" onClick={login}> login </button>
      <div className="h-16 w-16 "  >{JSON.stringify(state1)}</div>
    </div>;
  } 