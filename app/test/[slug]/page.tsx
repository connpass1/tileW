
"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const  handler =  () =>       router.replace("/")
  return <div className="bg-gray-700 p-44 grid-cols-1 gap-8">
    <div className="text-error" > useRouter  use <q>client </q></div>
    <div><button onClick={handler} className="bg-primary_dark p-4">  router.replace( )  </button> </div>
    <div className="text-error" > params.slug: <span className='text-green-800 font-extrabold bg-neutral-800 p-8'>{params.slug}</span></div>
    <div className="text-orange-800" ><Link href="ups">ups</Link></div>
    <div className="text-neutral-200" ><Link href="/test/ups">test/ups</Link></div>
  </div>
}