import Link from "next/link";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Logo from "./logo";
import { Button } from "../ui/button";


const Navbar = () => {

  return (
    <div className="h-16 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="from-accent-foreground text-xl text-white">
            <Logo/>
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        {/* LINKS */}
        <div className="flex gap-6 text-white ">
          <Link href="/mission" className="flex items-center gap-2">
            <span className="font-mono text-lg ">Mission</span>
          </Link>
          <Link href="/analytics" className="flex items-center gap-2">
            <span className="font-mono text-lg ">Analytics</span>
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              People
            </div>
            <div className="cursor-pointer">
              Message
            </div>
            <div className="cursor-pointer">
              notifications
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
            <Button variant={"ghost"} asChild  className="rounded font-mono mt-3">
              <Link className="border px-4 py-1 rounded-md text-lg font-bold" href="/sign-in">Login</Link>
                </Button>
             
            <Button variant={"ghost"} asChild  className="rounded font-mono mt-3">
              <Link className="border px-4 py-1 rounded-md text-lg font-bold" href="/sign-up">Register</Link>
                </Button>
             
             
            </div>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Navbar;