import { CgSpinner } from "react-icons/cg";
import { FaExclamationCircle } from "react-icons/fa";
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
export function SubmitButton({
  text = "применить",
  disabled,
  loading,
}: IButton) {
  return (
    <button type="submit" disabled={disabled}>
      {loading && <CgSpinner className="h-4 w-4 animate-spin" />}
      {text}
    </button>
  );
}
export function ErrorText({ text }: { text: string | undefined }) {
  if (text === undefined) return null;
  return <span className="col-span-2 text-sm text-error"> {text} </span>;
}
export default function ErrorMessage({
  errors,
}: IForm) {
  let errorMessage = Object.keys(errors).length ? "не корректные дынные" : null;
  if (errorMessage !== null) {
    const t = errors[Object.keys(errors)[0]];
    if (typeof t.message === "string" && t.message.length)
      errorMessage = t.message;
  }

  return (
    <>
      {errorMessage && (
        <div
          className="col-span-2 flex items-center gap-2 rounded-lg  border border-red-300 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <FaExclamationCircle />
          <span className="sr-only">Info</span>
          <span className="px-2 font-medium"> {errorMessage} </span>
        </div>
      )}
      <SubmitButton />
    </>
  );
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
