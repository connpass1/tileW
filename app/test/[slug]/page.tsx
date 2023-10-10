"use client";
 
import React from "react";
export default function Page({ params }: { params: { slug: string } }) {
  const [data, setData] = React.useState({time:100});
  React.useEffect(() => {
    fetch(`#${process.env.NEXT_PUBLIC_API_URL}`  , {
      next: { revalidate: 60 }
    }
      ).then((res) => {
        if (res.ok)  res.json().then(json => { return setData(json) })
        return  setData({time:-100})
      }).catch(() => {return setData({ time: 0 }) })
  
  }, [params]);

  return (
    <div>slug -{params.slug}- {process.env.NEXT_PUBLIC_API_URL} - { data?.time } </div>
  );
}

export const dynamic = "force-dynamic";
 