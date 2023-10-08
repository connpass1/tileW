/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface IFormInput {
  path: string;
}

export default function addForm(  ) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const router = useRouter();
  const pathname = usePathname()
  const onSubmit = (data: IFormInput) => {
    router.push(`${pathname}/${data.path}`);
  };

  const dis = errors?.path?.type !== undefined;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="path" className="font-light text-red-600">
        path
      </label>
      <input
        type="text"
        id="path"
        {...register("path", {
          required: true,
          maxLength: 12,
          minLength: 2,
          pattern:/^[A-Za-z0-9]+$/
        })}
      />
     {dis && <p className="bg-error_dark p-4">
        { errors?.path?.type
          
        }</p>
      }
      <button type="submit" disabled={dis}>
        добавить
      </button>
    </form>
  );
}
