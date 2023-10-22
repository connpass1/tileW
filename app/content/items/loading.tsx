export default function LoadingLayout( ) {
 
   
  return  <div role="status"className ="flex flex-col gap-8">
    {[1,2,3,4,5,6].map( x =>  <div key={x}  className="h-6 w-2/5  max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"/>
      )}
       
     
  </div>  
  
}