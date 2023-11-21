import { ChildrenType } from "../layout";
export default function RootLayout({ children }:ChildrenType) {
  return    <section
  className="fixed left-0  top-0 z-50  grid-center  h-full   w-full
place-content-center bg-base-300 glass "
> {children} </section>;
}
