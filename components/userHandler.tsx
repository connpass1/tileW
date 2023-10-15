"use client";
 
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BsFillBellFill,
  BsFillDoorOpenFill,
  BsFillPersonFill
} from "react-icons/bs";
export default function ThemeHandler() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setUser(localStorage.getItem("user") ?? "");
 console.log("user ", user);
  }, []);

  return (
    <>
      {user ? (
        <>
          
          <Link className="col-start-4  row-start-1" href="/login">
            <BsFillPersonFill className=" icon  " /> 
          </Link>
          <Link className="col-start-3 row-start-1" href="/login">
            <BsFillBellFill className=" icon  " /> 
          </Link>
        </>
      ) : (
        <Link className="col-start-4 row-start-1" href="/login">
          <BsFillDoorOpenFill className=" icon  " /> 
        </Link>
      )}
    </>
  );
}
