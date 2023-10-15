
"use client";
import "@/app/globals.css";
import { ErrorText, ResetButton, SubmitButton } from "@/components/elements/errorMessage";
import Label from "@/components/elements/label";
import ThemeHandler from "@/components/themeHandler";
import { signIn } from "@/utils/db/firebaseAuth";
import { minLength } from "@/utils/messages";
import { UserCredential } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
 
import { useRouter } from "next/navigation";
 interface IFormInput {
    email: string;
    password: string;
    type: boolean; 
  }
export default function Login() {
    const {
        register,
        handleSubmit,setError,
         setValue, clearErrors, 
        formState: { errors  },
      } = useForm<IFormInput>();
      const [loading, setLoading] = useState(false);
      const [reg, setReg] = useState (true);
      const router = useRouter();
      const onReset = () => {
        clearErrors(); 
        setValue("password","")
        setValue("email","")
      }  
    
    const onSubmit = (data: IFormInput) => {
        setLoading(true) 
        signIn(data).then((res  ) => {  
          setLoading(false)
          localStorage.user = res as UserCredential;
          router.push("/");
         }).catch((err  ) => {
          setLoading(false);
          console.log( err) 
          setError("email",{ type: 'custom', message: err?.message??"ошибка"});
        }) 
      };

 

    return <section className="bg-slate-500 dark:bg-primary_bg_dark col-span-5 absolute top-0 left-0 h-screen w-screen center  select-none" > 
    <div className="absolute top-3 right-3">
        <ThemeHandler/>
        </div>

      <div  className="flex flex-col gap-4 bg-slate-200 dark:bg-slate-900  rounded-lg px-8 py-4">
  <form onSubmit={handleSubmit(onSubmit)} className="grid   grid-cols-[min-content_1fr] gap-4   ">
  <div className="flex col-span-2 gap-2 justify-end cursor-pointer mb-4  text-lg" >
    <input type="checkbox"  {...register("type")} id="type"  onChange={  ()=> setReg(!reg)}  className="peer hidden "/>
        <label htmlFor="type"
         className= "text-gray-500   border-b-2 cursor-pointer font-medium   border-transparent peer-checked:border-primary  peer-checked:text-primary"> 
           
        Вход</label>  
            <label htmlFor="type"
              className=" border-primary text-primary cursor-pointer  border-b-2   peer-checked:text-gray-500 font-medium  peer-checked:border-transparent" >
             
        Регистрация</label>
          </div>
           
        <Label  htmlFor="email" errors={errors}/>
        <input type="text" className={errors?.email?"input !border-error !dark:border-error":"input"}
        {...register("email", {
          required: `email - обязательное поле` , 
          pattern: {
            value:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message:"не валидный email"
          }, 
          })}
        /> 
     <ErrorText text={errors?.email?.message}  /> 
        <Label  htmlFor="password" errors={errors}/>
      <input type="password" className={errors?.password?"input !border-error !dark:border-error":"input"}  {...register("password",   minLength("password",6) )} />
        
      <ErrorText text={errors?.password?.message}  />  
      <ErrorText text={(errors as any)?.custom?.message}  /> 
      <SubmitButton disabled ={ Object.keys(errors).length>0}  
       loading={ loading} 
       text={reg?"создать аккаунт":"войти"}/> 
     
      <ResetButton onClick={onReset}
          disabled={Object.keys(errors).length === 0}  />  
            </form > 
     
      
  <button type="button" className="btn text-slate-500 hover:text-primary">
  <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
    <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
  </svg>
  Sign in with Google
    </button>  </div>
 </section> 
}