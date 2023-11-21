"use client"
 const likes = 100; 
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createAction, dropAction } from "../action";
 
import SelectAll from "./selectAll";
type FormInputs = {
  test: string
} 
export default function App() {
const [state,setState]=useState("ggg")

  const {
    register,
    handleSubmit,
    // Read the formState before render to subscribe the form state through Proxy
    formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
  } = useForm<FormInputs>();
     
    const onSubmit=   (data: FormInputs) => {
        createAction( ).then(res=>{setState(JSON.stringify(res ))}).catch((e)=>{setState(JSON.stringify(e ))}) 
    } 
  function drop( ): void {
    dropAction ( ).then(res=>{setState(JSON.stringify(res ))}).catch((e)=>{setState(JSON.stringify(e ))})
  }

    return (
      <div className="col-start-1 col-end-[-1] row-end-[-1]">{state}
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("test")} />
      <button type="submit"  >create</button>
            </form>
      
       <hr/> 
       <button type="submit" onClick={drop} >drop</button> 
             <hr/>  
              <SelectAll/> 
               </div>
  );
} 
 