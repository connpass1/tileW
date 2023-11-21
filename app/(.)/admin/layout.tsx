import { Metadata } from "next";

 
 
export type ChildrenType = { children: React.ReactNode };
export default function RootLayout({ children }: ChildrenType) {
  return (
    < >
     
          {children}  
     
    </>
  );
}
