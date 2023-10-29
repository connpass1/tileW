import { Suspense } from "react";
import { ChildrenType } from "../_utils/models/types";
import { SkeletonImage } from "./skeleton";

export function BreadCrumbLoader({ children }: ChildrenType) {
  return (
    <Suspense fallback={<span className="animate-pulse">...</span>}>
      {children}
    </Suspense>
  );
}
export function ImageLoader({ children }: ChildrenType) {
  return (
    <Suspense fallback={<SkeletonImage/>}>
      {children}
    </Suspense>
  );
}
