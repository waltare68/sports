import React from 'react'
import MainTab_slide from './MainTab_slide'
import Header from './header'
import Main_body_wrapper from '../BodyComponents/Main_body_wrapper'

export default function CustomPageLayout() {
  return (
      <>
      <Header/>
      <MainTab_slide/>
      <Main_body_wrapper>
        
      </Main_body_wrapper>

    </>
  )
}
