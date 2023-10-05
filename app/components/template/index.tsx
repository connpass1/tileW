import dynamic from 'next/dynamic'
const Enter = dynamic(() => import('./enter') )
      export default function  Template({
        children,
      }: {
        children: React.ReactNode;
      }) { 
   
        return (
          <>
       <Enter/> <main >   {children} </main></>      
    
  );
}