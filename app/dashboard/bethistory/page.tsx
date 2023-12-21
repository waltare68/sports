import React, { ReactElement } from 'react'
import UsersLayout from '../Userslayout'
import DashNav from '../DashNav'
import HistoryBody from './HistoryBody'

export default function BetHistory() {
  return (
    <>
    <DashNav userEmail={''}/>
    <HistoryBody/>
      
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
