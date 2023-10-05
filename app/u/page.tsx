"use client";
import { FaSpinner } from "react-icons/fa6";
import Layout from "./layout";
import { usePathname } from 'next/navigation'
 
export default function Home() { 
  const pathname = usePathname()
  return   <main>
<Layout>
  <button>
  <FaSpinner className="animate-spin h-5 w-5 mr-3 "  />
</button>
{ pathname}

  </Layout>

</main>;
}
