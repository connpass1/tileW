import { MdImageNotSupported } from "react-icons/md";
export function SkeletonText() {
  return (
    <div className="h-2.5 w-48 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700"></div>
  );
}
export function SkeletonFull() {
  return (
    <div className="h-full w-full   animate-pulse bg-gray-200 dark:bg-gray-700"></div>
  );
}

export function SkeletonImage () {return <div className=" w-full  h-full center" > <div className="animate-pulse w-full max-w-lg rounded-xl bg-gray-400 text-gray-500 dark:bg-gray-700 h-full center" >   
 
    </div> </div> 
  }

export function NotFoundImage () {return <div className=" w-full  h-full center" > <div className=" w-full max-w-lg rounded-xl bg-gray-400 text-gray-500 dark:bg-gray-700 h-full center" >  < MdImageNotSupported
 
    className=" w-1/2  h-1/2"  /> </div> </div> 
  }