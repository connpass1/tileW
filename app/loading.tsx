import { CgSpinner } from "react-icons/cg";

export default function Loading() {
  return (
    <div className=" h-screen w-screen top-0 left-0  absolute z-20 grid-center text-primary">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
}
