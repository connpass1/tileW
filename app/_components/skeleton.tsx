import { MdImageNotSupported } from "react-icons/md";
export function SkeletonText() {
  return <div className="skeleton h-2.5 w-48  "></div>;
}
export function SkeletonFull() {
  return <div className="skeleton h-full w-full  "></div>;
}

export function SkeletonImage() {
  return (
    <div className=" center  h-full w-full">
      <div className="skeleton h-full w-full max-w-lg animate-pulse"></div>{" "}
    </div>
  );
}

export function NotFoundImage() {
  return (
    <div className=" center  h-full w-full">
      <div className=" skeleton w-full max-w-lg animate-none">
        <MdImageNotSupported className=" h-1/2  w-1/2" />{" "}
      </div>{" "}
    </div>
  );
}
