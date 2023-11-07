"use client";
 

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import {minLength} from "@/app/_components/form/errorMessage";

interface IFormInput {
  email: string;
  password: string;
  type: boolean;
}
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<IFormInput>();
  const [loading, setLoading] = useState(false);
  const [reg, setReg] = useState(true);
  const router = useRouter();
  const onReset = () => {
    clearErrors();
    setValue("password", "");
    setValue("email", "");
  };

  const onSubmit =   (output: IFormInput) => {
    setLoading(true);
     fetch("/api/x/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
       },  
       body: JSON.stringify(output)
     }).then(res => res.json().then((json) => {
      setLoading(false);
       console.log("json");
     }))
       .catch(e => {
         setLoading(false);
         setError("email", {
      type: "custom",
      message: e?.message ?? "ошибка",
    });})
    
 
  };

  return (
    <section className="  absolute  left-0 top-0 h-screen w-screen select-none grid place-content-center  bg-slate-500  dark:bg-slate-950">
 

       
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-[min-content_1fr] gap-4 bg-slate-900 p-4 rounded-lg "
        >
  <button type="button" className="grid grid-cols-4 place-items-center p-2 col-span-full bg-base  border text-slate-500 dark:hover:bg-base/50">
         
         
                  <FcGoogle className="mr-2 " />
          <span  className="  col-span-3 font-sans normal-case">Sign in with Google </span>
        </button>
        <div className="grid place-items-center grid-cols-[1fr_min-content_1fr] my-2  col-span-full gap-4">
        <hr className="w-full h-1   bg-gray-200 border-0 rounded dark:bg-base  "/>
        <span  >nnn</span > 
        <hr className="w-full h-1   bg-gray-200 border-0 rounded dark:bg-base "/>    
        </div> 
          <div className="col-span-2 mb-4 flex cursor-pointer justify-end gap-2  text-lg">
            <input
              type="checkbox"
              {...register("type")}
              id="type"
              onChange={() => setReg(!reg)}
              className="peer hidden "
            />
            <label
              htmlFor="type"
              className="cursor-pointer   border-b-2 border-transparent font-medium   text-gray-500 peer-checked:border-primary  peer-checked:text-primary"
            >
              Вход
            </label>
            <label
              htmlFor="type"
              className=" cursor-pointer border-b-2 border-primary  font-medium   text-primary peer-checked:border-transparent  peer-checked:text-gray-500"
            >
              Регистрация
            </label>
          </div>

          <label htmlFor="email"   >email  </label>
          <input
            type="text"
            className={
              errors?.email ? "input !dark:border-error !border-error" : "input"
            }
            {...register("email", {
              required: `email - обязательное поле`,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "не валидный email",
              },
            })}
          />
           {errors?.email?.message}  
           <label htmlFor="password">password </label >
          <input
            type="password"
            className={
              errors?.password
                ? "input !dark:border-error !border-error"
                : "input"
            }
            {...register("password", minLength("password", 6))}
          />

           {errors?.password?.message} 
              {(errors as any)?.custom?.message} 
          <button  type="submit"
            disabled={Object.keys(errors).length > 0} >войти</button> 
          <button
            type="reset"
            onClick={onReset}
            disabled={Object.keys(errors).length === 0}
          />
        </form> 
    </section>
  );
}
 