import { Suspense } from "react";
import { ChildrenType } from "../_utils/models/types";

export function BreadCrumbLoader({ children }: ChildrenType) {
  return (
    <Suspense fallback={<span className="animate-pulse">...</span>}>
      {children}
    </Suspense>
  );
}
