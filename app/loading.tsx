import { CgSpinner } from "react-icons/cg";

export default function Loading() {
  return (
    <div className="min-h-screen grid place-items-center text-primary">
      <CgSpinner className="h-8 w-8 animate-spin justify-center align-middle" />
    </div>
  );
}
