import { Metadata } from "next";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_SITE_NAME} | login`,
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
};

export default function RootLayout({
  switchLink: switchLink,
  header,
  loginForm,
}: {
  loginForm: React.ReactNode;
  switchLink: React.ReactNode;
  header: React.ReactNode;
}) {
  return (
  
      <div className="grid min-h-[240px] min-w-[240px]  dark:border-0   gap-4 rounded-lg bg-base-200 p-8 shadow sm:max-w-md md:mt-0">
        {header} 
       {switchLink}
       {loginForm}
       <div className="divider">OR</div>
      
        <Link
          className="col-span-full inline-flex items-center justify-center gap-2 text-lg  hover:text-primary"
          href="/login/google"
        > 
          <FcGoogle /> Sign in with Google
        </Link>
      </div>
 
  );
}
