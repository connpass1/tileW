import Link from "next/link";

export default function Breadcrumb({ params: { slug } }: { params: { slug: string } }) { 
  return <li><Link href="/content/articles" >articles {slug}</Link></li>
}