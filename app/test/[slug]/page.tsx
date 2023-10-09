"use client";
 
import React from "react";
import { usePathname, useRouter } from 'next/navigation';
export default function Page({ params }: { params: { slug: string } }) {
  const [data, setData] = React.useState({time:100});
  React.useEffect(() => {
      fetch('http://localhost:3000/api/hello', {
      next: { revalidate: 60 }
    }
      ).then((res) => {
        if (res.ok)  res.json().then(json => { return setData(json) })
        return  setData({time:-100})
      }).catch(() => {return setData({ time: 0 }) })
  
  }, [params]);

  return (
    <div>{params.slug}{ data?.time }</div>
  );
}

export const dynamic = "force-dynamic";
 