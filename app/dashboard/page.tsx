"use client"
import React, { ReactElement, useState } from 'react'
import DashNav from './DashNav'
import DashboardBody from './DashboardBody'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import BarLoader from 'react-spinners/BarLoader'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const [isnotAuthenticated,setIsNotAuthenticated] =useState(false)
  let [loading, setLoading] = useState(true);
  const [loadingUser, setLoadingUser] = useState(true)
  const showLoading = status === 'loading' ? true : false;
  const isAuthenticated = status === 'authenticated' ? true : false;
  const isunAuthenticated = status === 'unauthenticated' ? true : false;

  if(isnotAuthenticated){

   
  } 
  return (
    <>

      {(showLoading) ? (
        <>
          <div className='full-screen-centered'>
            <div className='text-white flex items-center m-1'>loading
            </div>
            <BarLoader color="#36d7b7" />
          </div>
        </>
      ) : (
        <>
          <DashNav userEmail={(session && session.user?.email)? session.user.email : ''} />
          <DashboardBody isLoggedIn={session && session.user?.email ? true : false} userEmail={(session && session.user?.email) ? session.user.email : ''}  />
        </>
      )
      }


    </>
  )
}


