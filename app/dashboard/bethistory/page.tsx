"use client";
import React, { ReactElement } from 'react'
import UsersLayout from '../Userslayout'
import DashNav from '../DashNav'
import HistoryBody from './HistoryBody'
import { useSession } from 'next-auth/react'


export default function BetHistory() {
  const { data: session } = useSession()
  return (
    <>
    <DashNav userEmail={''}/>
    <HistoryBody userEmail={(session && session.user?.email) ? session.user.email : ''} />
      
    </>
  )
}
BetHistory.getLayout  = function getLayout(page: ReactElement){
    return (
        <UsersLayout>
            {page}
        </UsersLayout>
    )
    
}
