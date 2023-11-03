import { LinkType } from "@/app/api/_data/types";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
type ChildrenType = { children: React.ReactNode };
export function BreadcrumbsLink({ link }: { link: LinkType }) {
  return (
    <>
      <Link href={link.slug} className="hover:underline ">
        {link.name}
      </Link> 
      <BiChevronRight />
    </>
  );
}

export default function Breadcrumbs({ children }: ChildrenType) {
  return (
    <div className="col-span-full row-start-1 grid auto-cols-max grid-flow-col items-center justify-end   gap-2 px-4 text-sm font-thin ">
      <BreadcrumbsLink link={{ slug: "/", name: "home" }} />
      {children}
    </div>
  );
}
