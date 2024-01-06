"use client";
import React from 'react'
import DashNav from '../DashNav'
import TransactionBoby from './TransactionBoby'
import { useSession } from 'next-auth/react'

export default function TransactionHistory() {
  const { data: session } = useSession()
  return (
    <>
      <DashNav userEmail={''}/>
      <TransactionBoby userEmail={(session && session.user?.email) ? session.user.email : ''}/>
    </>
  )
}
