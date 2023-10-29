 
export interface IItem {
    title : string | undefined;
    description: string | undefined; 
    uid: string ; 
    quantity: number | undefined;
    rate: number | undefined;
    images: string[]  | undefined;
    price:number | undefined;
    created:any;
    updated: any;
   
 }
 export class Item implements IItem{
     title="";
     description=""; 
     uid: string ;
     quantity=0;
     rate=0;
     images=[""];
     price = 0; 
     created: any=null;
     updated: any=null;
    constructor(item: IItem  ) {
        const { title,
            description ,
            uid ,
            quantity,
            rate,
            images,
            price,created }=item; 
   
    this.title =  title??""
    this.description =  description??  ""  
    this.uid =  uid 
    this.quantity =  quantity??0
    this.rate = rate??0
    this.images =  images??[""]
    this.price =  price??0;
    this.created =  created ??  null;
     
   }
   
}
 