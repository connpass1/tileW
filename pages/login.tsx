
"use client";
import "@/app/globals.css"; 
import ErrorMessage, { ResetButton } from "@/components/elements/errorMessage";
import Label from "@/components/elements/label";
import ThemeHandler from "@/components/themeHandler";
import { signIn } from "@/utils/db/firebaseAuth";
import { minLength } from "@/utils/messages";
import { useState } from "react";
import { useForm } from "react-hook-form";

 
 
import { useRouter } from 'next/navigation';
 function BackButton( ) {
  const router = useRouter()  
  const onClick=()=>{router.back()}
return <button type='button' onClick={onClick}   className="text-slate-100 dark:text-slate-400  dark:hover:text-slate-200   hover:text-slate-600" >назад</button>
}



 interface IFormInput {
    email: string;
    password: string;
    type: boolean; 
  }
export default function Login() {
    const {
        register,
        handleSubmit,setError,
         setValue, clearErrors,watch, 
        formState: { errors,  },
      } = useForm<IFormInput>();
      const [loading, setLoading] = useState(false);
      const [res, setRes] = useState<any>(null); 
      const onReset = () => {
        clearErrors(); 
        setValue("password","")
        setValue("email","")
      }  
 

    const onSubmit = (data: IFormInput) => {
        setLoading(true) 
        signIn(data).then((res  ) => { 
          console.log( res );
          setLoading(false)
          setRes(res)
         }).catch((err  ) => {
          setLoading(false);
          console.log( err) 
          setError("email",{ type: 'custom', message: err?.message??"ошибка"});
        }) 
      };

if(res) return<p>{JSON.stringify(res)}</p>

    return <section className="bg-slate-500 dark:bg-primary_bg_dark col-span-5 absolute top-0 left-0 h-screen w-screen center  select-none" > 
    <div className="absolute top-3 right-3">
        <ThemeHandler/>
        </div>

      <div  className="flex flex-col gap4" >
  <form onSubmit={handleSubmit(onSubmit)} className="grid m-4  grid-cols-[min-content_1fr] gap-4 p-6 bg-slate-200 dark:bg-slate-900  rounded-lg ">
  <div className="flex  col-span-2 gap-2 justify-end cursor-pointer m-b-2  text-lg " >
    <input type="checkbox"  {...register("type")} id="type"   className="peer hidden "/>
        <label htmlFor="type"
         className= "border-b-2 cursor-pointer text-slate-500 font-light   peer-checked:font-medium opacity-50 border-transparent peer-checked:border-slate-500  peer-checked:opacity-100 "> 
           
        Вход</label>  
        <label htmlFor="type" className= " border-b-2 border-slate-500 cursor-pointer text-slate-500    peer-checked:font-light  peer-checked:border-transparent font-medium  peer-checked:opacity-50" >
             
        Регистрация</label>
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
      <ResetButton onClick={onReset} 
        disabled={Object.keys(errors).length === 0} />  
            </form > 
           <  BackButton/>
 </div>
 </section> 
}