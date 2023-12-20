"use client"
import { SessionProvider } from 'next-auth/react';
import React from 'react'

interface providerProps{
    children:React.ReactNode | React.ReactNode[];
}
const Providert = ({children}:providerProps) => {
  return (
   <SessionProvider>
    {children}
   </SessionProvider>
  )
}

export default Providert
