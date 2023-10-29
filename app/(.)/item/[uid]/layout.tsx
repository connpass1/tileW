 
export type  Type ={ children: React.ReactNode, photo: React.ReactNode,description: React.ReactNode}
export default function ItemLayout({children,photo,description}: Type) { 
  return <> 
   <div className="col-span-4 md:col-span-2 lg:col-span-4 xl:col-span-2 full"> {photo} </div>
   <div className="col-span-4 md:col-span-2 lg:col-span-4 xl:col-span-2 p-4 test center">{children}</div> 
   <div className="col-span-4  ">{description}</div> 
   </>
} 
