import { CgSpinner } from "react-icons/cg";
import { FaExclamationCircle } from "react-icons/fa";
import { ChildrenType } from "@/app/layout";
interface IForm {
  errors: any;
  loading?: boolean | undefined;
  text?: string | undefined;
}
interface IButton {
  text?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void | undefined;
}

export const maxLength = (field: string, num: number) => {
  return { maxLength: { value: num, message: `${field} - максимум ${num} знаков` } } as any
}
export const required = (field: string) => {
  return { required: `${field} - обязательное поле` } as any
}
export const minLength = (field: string, num: number) => {
  return {
      required: `${field} - обязательное поле`,
      minLength: {
          value: num,
          message: `${field} - минимум ${num} знаков`
      }
  } as any
}
  
export function ErrorText({children }: ChildrenType) {
  if (children === undefined) return null;
  return <span className="col-span-2 text-sm text-error"> {children} </span>;
} 
export function ResetButton({
  text = "отмена",
  disabled = false,
  onClick,
}: IButton) {
  return (
    <button type={"reset"} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}
