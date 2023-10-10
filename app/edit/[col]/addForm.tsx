"use client";
import ErrorMessage from "@/app/components/elements/errorMessage";
import { maxLength, minLength } from "@/utils/messages";
import styles from "@/utils/styles/form.module.css";
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
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label >
        path
      </label>
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
