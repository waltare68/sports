"use client";
import { signOut } from 'next-auth/react'
import React, { useEffect } from 'react'

const Logout = () => {
    useEffect(() =>{
        signOut({
            callbackUrl:'/',
            redirect:true,
        });
    })
  return null
}

export default Logout
