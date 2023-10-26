import { Suspense } from "react";
import { ChildrenType } from "../_utils/models/types";

export function BreadCrumbLoader({ children }: ChildrenType) {
  return (
    <Suspense fallback={<span className="animate-pulse">...</span>}>
      {children}
    </Suspense>
  );
}
export function ImageLoader({ children }: ChildrenType) {
  return (
    <Suspense fallback={<div className="animate-pulse">loading</div>}>
      {children}
    </Suspense>
  );
}
