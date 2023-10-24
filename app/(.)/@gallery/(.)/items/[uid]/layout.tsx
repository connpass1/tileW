
export default function Layout({ children }: { children: React.ReactNode }) {
  return ( 
    <div className="grid w-full grid-rows-[4fr_1fr] gap-4  h-96">   {children} </div>   
  );
}
