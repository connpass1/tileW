"use client"
export default function Test() {
    // eslint-disable-next-line @next/next/no-img-element
    const onClick1 = ( ) => {
        
        fetch("/api/x/login", {
         method: "POST", // *GET, POST, PUT, DELETE, etc.
         mode: "cors", // no-cors, *cors, same-origin
         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
         credentials: "same-origin", // include, *same-origin, omit
         headers: {
           "Content-Type": "application/json",
           // 'Content-Type': 'application/x-www-form-urlencoded',
          },  
          body: JSON.stringify({output:"test"})
        }).then(res => res.json().then((json) => {
         
          console.log("json");
        }))
          .catch(e => {console.log(e);
          })
   }
    const onClick = ( ) => {
        
        fetch("/api/x/token", {
         method: "POST", // *GET, POST, PUT, DELETE, etc.
         mode: "cors", // no-cors, *cors, same-origin
         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
         credentials: "same-origin", // include, *same-origin, omit
         headers: {
           "Content-Type": "application/json",
           // 'Content-Type': 'application/x-www-form-urlencoded',
          },  
          body: JSON.stringify({output:"test"})
        }).then(res => res.json().then((json) => {
         
          console.log("json");
        }))
          .catch(e => {console.log(e);
          })
   }
    return <div className="h-16 w-16 bg-slate-700"  >
<button  onClick={onClick}> token</button>
<button  onClick={onClick1}> login</button>

    </div>;
  }
  