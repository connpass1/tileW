'use client'
import { ContextProvider } from "@/app/_context/contextProvider";
import { useContext } from "react";

function TestContext0() {
   const { state, dispatch } = useContext(ContextProvider);
    return <p>context.path {state.path }{state.count} </p>
}
   function TestContext1() { 
    const {   dispatch } = useContext(ContextProvider); 
    return <div><button className="p-4" onClick={() =>  dispatch({ type: "INCREMENT" })}>test1</button> 
        <button className="p-4 bg-yellow-800" onClick={() => dispatch({ type: "DECREMENT" })}>test2</button></div>
   }
export default function TestContext() {
    return <div className="flex gap-3" > <TestContext0/><TestContext1/></div>
}

  