import { ChildrenType } from "@/app/layout";

export default function RootLayout({ children }: ChildrenType) {
  return (
    <h1 className="text-xl font-font2   leading-tight tracking-tight   md:text-2xl mb-4">
      {children}
    </h1>
  );
}
