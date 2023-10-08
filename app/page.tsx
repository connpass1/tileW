import { FaSpinner } from "react-icons/fa6";
import Template from "./components/template";
export default function Home() {
 

  return <Template>
  <button>
  <FaSpinner className="animate-spin h-5 w-5 mr-3 "  />

  Processing...
</button>
</Template>;
}
