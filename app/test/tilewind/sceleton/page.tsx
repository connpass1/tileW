export default function Page() {
    return (<div className="grid-cols-1 "> 
<div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>
    </div>
    <div className="w-full">
        <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        
            </div>
        </div>
        <div role="status" className="max-w-sm animate-pulse">
    <div className="h-4.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span className="sr-only">Loading...</span>
        </div> 
        
        <div className='group text-xl group-first:text-red-500'>
        <strong className='group'>Hover on me  </strong>
          <strong className='group-hover:text-red-500'>Hover on me </strong>
          <strong className='group-hover:text-green-500'>the texts will be </strong>
          <strong className='group-hover:text-blue-500'>of different colors</strong>
       
        </div>
        <ul role="list" className="p-6 divide-y divide-slate-200">
            {[0, 1, 2, 3].map(k =>
 
                <li key={k} className="flex py-4 first:bg-zinc-500 last:bg-zinc-800">
                   
                    <div className="ml-3 overflow-hidden">
                        <p className="text-sm font-medium text-slate-500">{k}</p>
                        <p className="text-sm  truncate">{k}</p>
                    </div>
                </li>)}
 
        </ul>
        
        <div role="status" className="space-8 animate-pulse">
        <div className="w-8 h-8 bg-gray-300 rounded-full   dark:bg-gray-700"/>


        </div>
            </div> 
      
  ) }