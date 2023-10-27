"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BsFillBellFill,
  BsFillDoorOpenFill,
  BsFillPersonFill,
} from "react-icons/bs";
export default function UserHandler() {
  const [user, setUser] = useState<any>(null); 
  useEffect(() => {
    setUser(  "");  
  }, [user]);

  return (
    <>
      {user ? (
        <>
          <Link className="col-start-4 icon" href="/login">
            <BsFillPersonFill/>
          </Link>
          <Link className="col-start-3 icon" href="/login">
            <BsFillBellFill/>
          </Link>
        </>
      ) : (
        <Link className="col-start-4 icon" href="/login">
          <BsFillDoorOpenFill />
        </Link>
      )}
    </>
  );
}
