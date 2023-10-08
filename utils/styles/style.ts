import { FieldError } from "react-hook-form";

export const labelStyle = (err: FieldError | undefined) => err?.type !== undefined ? "text-error" : "text-slate-500"
 