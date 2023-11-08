"use client";
import { SubmitButton } from "@/app/_components/form/button";
import { minLength ,ErrorText} from "@/app/_components/form/errorMessage";
import { signIn } from "@/app/api/_data/fetch"; 
import Link from "next/link";
import { useState } from "react";
import { ErrorOption, useForm } from "react-hook-form";
import { BiChevronLeft, BiHome,BiCheckboxChecked,BiCheckboxMinus  } from "react-icons/bi"; 
export interface IFormInput {
  email: string;
  password: string;
  remember: boolean;
}

export default function Page() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError, 
    clearErrors, 
    formState: { errors },
  } = useForm<IFormInput>();
  
  
  const onSubmit = (output: IFormInput) => {
    clearErrors()
    setLoading(true);  
    signIn(output.email, output.password)
      .then((res) => {
        setLoading(false);
          const error: ErrorOption = { type: "auth", message:JSON.stringify(res) };
        setError("root", error);
      })
      .catch((e) => {
        const error: ErrorOption = { type: "auth", message: JSON.stringify(e) };
        setError("root", error);
        setLoading(false);
      });
  };
 
  return (
    <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
      <label   className="mb-2 block text-right font-sans text-sm font-medium"
        htmlFor="email" >   Your email
      </label> 
      <input
        type="text" 
        id="email"
        {...register("email", {
          required: `email - обязательное поле`,
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "не валидный email",
          },
        })}
        className={errors?.email?.message===undefined?"input":" err"}
        placeholder="name@company.com"
      /> 
      <ErrorText >{errors?.email?.message}</ErrorText >
      <label
        htmlFor="password"
        className="mb-2 block text-right font-sans text-sm font-medium"
      >
        Password
      </label>
      <input
        type="password"
        {...register("password", minLength("password", 6))} 
        id="password"
        placeholder="••••••••"
        className={errors?.password?.message===undefined?"input":" err"}    />
 <ErrorText >{errors?.password?.message}</ErrorText >
      <label className="flex items-center cursor-pointer">
        <input
          id="remember"
          aria-describedby="remember"
          type="checkbox"
          className="peer sr-only collapse relative"
        />
          <BiCheckboxChecked className="  h-8 w-8 peer-checked:hidden " />
          <BiCheckboxMinus className="  hidden h-8 w-8  peer-checked:block " />
        <span className="px-4 ">Remember me</span>

      </label> 
      <Link
        href="forgot"
        className="self-end justify-self-end text-sm font-medium hover:underline"
      > Forgot password? </Link> 
        <ErrorText>{errors?.root?.message }</ErrorText>  
      <SubmitButton loading  disabled={errors?.email!==undefined||errors?.password!==undefined}> Sign in </SubmitButton>
    </form>
  );
}
