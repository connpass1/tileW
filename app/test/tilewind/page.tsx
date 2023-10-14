import { Breadcrumbs } from "@/components/elements/breadcrumbs";
import { LoaderButton, PrimaryButton, SecondaryButton, SignButton } from "@/components/elements/buttons";
import Others from "@/components/elements/others";
import Alert from "@/components/elements/alert";

 
export default function Page() {
    return  <div className="grid-cols-3 text-violet-700">
    
        <PrimaryButton/>
        <SecondaryButton/>
        <SignButton/> 
        <LoaderButton/> 
        <Breadcrumbs/>
       <hr/>
       <Alert/>
 <Others/>
    </div> 
 
}