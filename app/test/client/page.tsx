'use client'
 
import { useRouter, useSelectedLayoutSegment } from 'next/navigation'
export default function Page() {
  const router = useRouter()
  const segment = useSelectedLayoutSegment()
 
  return (
      <>
          <p>Active segment: {segment}</p>
    <button
      type="button"
      onClick={() => router.push('/', { scroll: false })}
    >
      Dashboard
    </button>
    </>
  )
}