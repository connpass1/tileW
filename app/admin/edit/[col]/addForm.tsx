"use client";
import ErrorMessage from "@/app/_components/elements/errorMessage";
import Label from "@/app/_components/elements/label";
import { maxLength, minLength } from "@/utils/messages";
 
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
 
interface IFormInput {
  path: string;
}

export default function AddForm(  ) {
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
    <form onSubmit={handleSubmit(onSubmit)} className="grid m-4  grid-cols-[min-content_1fr] gap-4 p-4">
      <Label  htmlFor=" path"/> 
      <input
        type="text" 
        {...register("path", {
          ...minLength("path",4),
          ...maxLength("path",25), 
          pattern: {
            value: /^[A-Za-z0-9]+$/ ,
            message: "только латиница!",
          }
        })}
      />
 
      <ErrorMessage errors={errors } text="добавить" />  
 
    </form>
  );
}
