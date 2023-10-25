
export default function Layout({ children }: { children: React.ReactNode }) { console.log("uuuu3")
  return (
    <div className="grid w-full grid-rows-[4fr_1fr] gap-4  h-96">   {children} </div>   
  );
}
