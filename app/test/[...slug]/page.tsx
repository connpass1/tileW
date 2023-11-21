'use client'
 
import Link from 'next/link'
import { usePathname } from 'next/navigation'
 
export default function ExampleClientComponent() {
  const pathname = usePathname()
  return <p>Current pathname: {pathname} <Link href={'j;j;'}>j;jj;;</Link></p>
}