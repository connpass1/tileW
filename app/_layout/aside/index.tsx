import { mainMenu } from "@/app/api/_data/menu";
import Link from "next/link";

export default function Aside( ) {
  return (
    <aside >
          {mainMenu.map((l, i) => (
            <Link href={l[1]} key={i}>
              {l[0]}
            </Link>
          ))}
        </aside>
  );
}
