"use client"
import Image from 'next/image'
import Header from './components/Navigation/header'
import MainTab_slide from './components/Navigation/MainTab_slide'
import Left_site_section from './components/BodyComponents/left__site__section'
import Left_side_events from './components/BodyComponents/Left_side_events'
import Tab_wrapper from './components/BodyComponents/Home_main_tabs/Tab_wrapper'
import Betslip_wrap from './components/BodyComponents/Betslip_wrap'
import MainTabtwo from './components/BodyComponents/Home_main_tabs/tab2/mainTabtwo'
import Main_tab_three from './components/BodyComponents/Home_main_tabs/tab3/Main_tab_three'
import Tabone from './components/BodyComponents/Home_main_tabs/tab1/Tabone'

import Main_body_wrapper from './components/BodyComponents/Main_body_wrapper'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import BarLoader from 'react-spinners/BarLoader'
import Virtualtab from './components/BodyComponents/Home_main_tabs/virtualTab/Virtualtab'

export default function  Home() {
  const { data: session, status } = useSession()
  const [selectedTab, setSelectedTab] = useState('home');

  
  const showLoading = status === 'loading' ? true : false;
  const isAuthenticated = status === 'authenticated' ? true : false;
  const isunAuthenticated = status === 'unauthenticated' ? true : false;
  const isLoggedIn = !showLoading && status === 'unauthenticated';
  const userEmail = isLoggedIn ? session?.user?.email : null;
  
  const handleSelectTab = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <>
    {(showLoading) ? (
    <>
      <div className='full-screen-centered'>
            <div className='text-white flex items-center m-1'>loading...
            </div>
            <BarLoader color="#36d7b7" />
          </div>
    </>
    ):(
    <>
      <Header userEmail={(session && session.user?.email)? session.user.email : ''}/>
      <MainTab_slide selectedTab={selectedTab} onSelectTab={handleSelectTab}/>
      <Main_body_wrapper isLoggedIn={(session && session.user?.email) ? true : false} userEmail={(session && session.user?.email)? session.user.email : ''}>
        <Left_site_section>
          <Left_side_events />
          <Tab_wrapper>
            <Tabone selectedTab={selectedTab} />
            <MainTabtwo selectedTab={selectedTab}/>
            <Main_tab_three selectedTab={selectedTab}/>
            <Virtualtab selectedTab={selectedTab}/>
          </Tab_wrapper>
        </Left_site_section>
        <Betslip_wrap IsLoggedIn={session && session.user?.email ? true:false} UserEmail={(session && session.user?.email)? session.user.email : ''} />
        </Main_body_wrapper>
    </>
    )}

    </>
  )
}
