import Alert from "@/components/elements/alert";
import { Breadcrumbs } from "@/components/elements/breadcrumbs";
import { PrimaryButton, SecondaryButton, SignButton } from "@/components/elements/buttons";
import Others from "@/components/elements/others";

 
export default function Page() {
    return  <div className="grid-cols-3 text-violet-700">
    
        <PrimaryButton/>
        <SecondaryButton/>
        <SignButton/> 
       
        <Breadcrumbs/>
       <hr/>
       <Alert/>
 <Others/>
    </div> 
 
}