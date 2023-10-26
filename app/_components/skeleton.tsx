import { MdImageNotSupported } from "react-icons/md";
export function SkeletonText() {
  return (
    <div className="h-2.5 w-48 skeleton  "></div>
  );
}
export function SkeletonFull() {
  return (
    <div className="h-full w-full skeleton  "></div>
  );
}

export function SkeletonImage () {return <div className=" w-full  h-full center" > <div className="animate-pulse w-full max-w-lg skeleton h-full" >   
 
    </div> </div> 
  }

export function NotFoundImage () {return <div className=" w-full  h-full center" > <div className=" w-full max-w-lg skeleton animate-none" >  < MdImageNotSupported
 
    className=" w-1/2  h-1/2"  /> </div> </div> 
  }
   
  