"use client";
 
import { minLength } from "@/utils/messages";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage, { ResetButton } from "../components/elements/errorMessage";
import Label from "../components/elements/label";
import { signIn } from "../db/firebaseAuth";
  interface IFormInput {
    email: string;
    password: string;
    type: boolean; 
  }
  
  export default function Form() {
    const {
      register,
      handleSubmit,setError,
       setValue, clearErrors,watch, 
      formState: { errors,  },
    } = useForm<IFormInput>();
    const [loading, setLoading] = useState(false);  
    const onReset = () => {
      clearErrors(); 
      setValue("password","")
      setValue("email","")
    }  

 
    const onSubmit = (data: IFormInput) => {
      setLoading(true) 
      signIn(data).then((res) => { 
        console.log( res );
        setLoading(false)
       }).catch((err) => {
        setLoading(false);
        console.log( err) 
        setError("email",{ type: 'custom', message: err?.message??"ошибка"});
      })
   
    };  
   
  
   
    return <form onSubmit={handleSubmit(onSubmit)} className="grid m-4  grid-cols-[min-content_1fr] gap-4 p-4 select-none">
 
   <div className="flex  col-span-2 gap-2 justify-end cursor-pointer mb-2  text-lgv " >
    <input type="checkbox"  {...register("type")} id="type"     className="peer hidden opacity-70 hover:opacity-100"/>
        <label htmlFor="type"
         className= "peer-checked:text-slate-200 border-b-2 font-thin   peer-checked:font-normal  border-transparent peer-checked:border-slate-400  text-slate-600 cursor-pointer "> 
        Вход</label> 
  
        <label htmlFor="type" className=
          "peer-checked:text-slate-600 border-b-2     peer-checked:font-thin   peer-checked:border-transparent text-slate-400   cursor-pointer " >Регистрация</label>
      </div>
        <Label  htmlFor="email" errors={errors}/>
        <input type="text" 
        {...register("email", {
          required: `email - обязательное поле` , 
          pattern: {
            value:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message:"не валидный email"
          }, 
          })}
        /> 
     
        <Label  htmlFor="password" errors={errors}/>
      <input type="text"   {...register("password",   minLength("password",6) )} />
      <ErrorMessage errors={errors} loading={loading}/>
      <ResetButton onClick={onReset} className=" border text-slate-400 enabled:hover:text-slate-200 
       enabled:hover:bg-slate-200/10   border-slate-400 enabled:hover:border-slate-200  disable:opasity-50  "
        disabled={Object.keys(errors).length === 0} /> 
      
      </form>
    
  }