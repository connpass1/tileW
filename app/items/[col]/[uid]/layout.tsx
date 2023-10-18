export default function RootLayout({
 
    children, image
}: {
    children: React.ReactNode,
    image: React.ReactNode,
    }) { 
    return <div className="flex flex-col">ffff
       <div className="flex w-full h-[200px] bg-zinc-700">{image}</div> 
        
        {children}  </div> 
    
    
}