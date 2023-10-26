import { CgSpinner } from "react-icons/cg";

export default function Loading() {
  return (
    <div className=" center absolute left-0 top-0 h-screen w-screen text-primary"> 
      <CgSpinner className="h-8 w-8 animate-spin" />
    </div>
  );
}
