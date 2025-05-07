"use client"
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    
    <div>
      HomePage
      <SignedOut>
        <SignInButton />
      </SignedOut>
      
      <SignedIn>
      <SignOutButton />
      </SignedIn>
    </div>
    
  )
}

export default page