"use client";
import "@/app/globals.css";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { ErrorText, SubmitButton } from "../_components/errorMessage";
import Label from "../_components/label";
import ThemeHandler from "../_layout/themeHandler";
 
import { minLength } from "../_utils/messages";

interface IFormInput {
  email: string;
  password: string;
  type: boolean;
}
export default function LoginPage() {
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
    <section className="center absolute  left-0 top-0 h-screen w-screen select-none bg-slate-500  dark:bg-slate-950">
      <div className="absolute right-3 top-3">
        <ThemeHandler />
      </div>

      <div className="flex flex-col gap-4 rounded-lg bg-slate-200  px-8 py-4 dark:bg-primary_bg_dark">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid   grid-cols-[min-content_1fr] gap-4   "
        >
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

          <Label htmlFor="email" errors={errors} />
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
          <ErrorText text={errors?.email?.message} />
          <Label htmlFor="password" errors={errors} />
          <input
            type="password"
            className={
              errors?.password
                ? "input !dark:border-error !border-error"
                : "input"
            }
            {...register("password", minLength("password", 6))}
          />

          <ErrorText text={errors?.password?.message} />
          <ErrorText text={(errors as any)?.custom?.message} />
          <SubmitButton
            disabled={Object.keys(errors).length > 0}
            loading={loading}
            text={reg ? "создать аккаунт" : "войти"}
          />

          <button
            type="reset"
            onClick={onReset}
            disabled={Object.keys(errors).length === 0}
          />
        </form>
        <button type="button" className="btn text-slate-500 hover:text-primary">
          <FcGoogle className="mr-2 h-4 w-4" />
          Sign in with Google
        </button>
      </div>
    </section>
  );
}
 

