import React from 'react'
import MainTab_slide from './MainTab_slide'
import Header from './header'
import Main_body_wrapper from '../BodyComponents/Main_body_wrapper'

export default function CustomPageLayout() {
  return (
      <>
      <Header userEmail={''}/>
      <MainTab_slide selectedTab={''} onSelectTab={function (tab: string): void {
        throw new Error('Function not implemented.')
      } }/>
      

    </>
  )
}
