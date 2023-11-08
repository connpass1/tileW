import { ChildrenType } from "@/app/layout";

export default function RootLayout({ children }: ChildrenType) {
  return (
    <h1 className="font-os text-xl font-oswald font-bold leading-tight tracking-tight text-slate-900 dark:text-white md:text-2xl">
      {children}
    </h1>
  );
}
