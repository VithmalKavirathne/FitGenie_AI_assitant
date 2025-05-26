"use client"
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import { DumbbellIcon, HomeIcon, UserIcon, ZapIcon } from 'lucide-react'
import React from 'react'
import { Button } from "./ui/button";
import Link from "next/link";


const Navbar = () => {
  const {isSignedIn} = useUser()
  return (
    <header className="fixed top-o left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
    <div className="container mx auto flex items-center justify-between">
      
      {/* Logo */}

<Link href='/' className="flex items-center gap-5">
        <span className="text-xl font-bold font-mono pl-15">
        Fit<span className="text-primary">Genie</span>.io
        </span>
</Link>

    {/* Navigation */}

    <nav className='flex items-center gap-5'>
      {isSignedIn ? (
        <>
        <Link href='/' className='flex items-center gap-1.5 text-sm hover:text-primary transition-colors'>
        <HomeIcon size={16}/>
         <span>Home</span> 
        </Link>

        <Link href="/generate-program" className='flex items-center gap-1.5 text-sm hover:text-primary transition-colors'>
        <DumbbellIcon size={16}/>
         <span>Generate</span>
        </Link>

        <Link href="/profile" className='flex items-center gap-1.5 text-sm hover:text-primary transition-colors'>
        <UserIcon size={16}/>
         <span>Profile</span>
        </Link>

        <Button asChild variant="outline" className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10">
          <Link href="/generate-program">Get Started</Link>
        </Button>
        
        <header className="px-5">
      <div className="flex items-center justify-start gap-4">
         <UserButton />
       </div>
      </header>

        </>
      ) : (
        <>
        
        <SignInButton>
          <Button variant={"outline"} className="border-primary/50 text-primary hover:text-white hover:bg-primary/10">
            Sign In
          </Button>
        </SignInButton>
        
<header className="px-6">
        <SignUpButton>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Sign Up
          </Button>
        </SignUpButton>
      </header>
        </>
      )}

    </nav>


      </div>
    </header>
  );
};
export default Navbar;