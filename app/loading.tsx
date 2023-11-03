import { CgSpinner } from "react-icons/cg";

export default function Loading() {
  return (
    <div className="col-span-full row-span-full grid place-items-center text-primary">
      <CgSpinner className="h-8 w-8 animate-spin justify-center align-middle" />
    </div>
  );
}
