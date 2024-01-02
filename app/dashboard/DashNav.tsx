"use client"
import React, { useEffect, useState } from 'react'
import DashboardWrap from '../components/Navigation/navcomponents/DashboardWrap'
import CustomNavbarDropdown from '../components/Navigation/navcomponents/CustomNavbarDropdown';
import getUserBalance from '../api/profile/balance/getUserBalance';

interface naveProps{
  userEmail:string
}

export default function DashNav({userEmail}:naveProps) {
  
  const [showMenu, setShowMenu] = useState(false);
  const [balance, setBalance] = useState<number>(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = {userEmail}; 
        const response = await fetch('/api/profile/balance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch balance');
        }

        const data = await response.json();
        setBalance(data.balance);
        console.log('User balance:', data.balance);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <header className="header-section dashboard__header">
        <div className="container p-0">
          <div className="header-wrapper">
            <div className="menu__left__wrap">
              <div className="logo-menu px-2"><a className="logo" href="/"><img alt="logo" loading="lazy" width="144"
                height="30" decoding="async" data-nimg="1" style={{ color: 'transparent' }}
                srcSet="/logo.png"
                src="/logo.png" /></a>
              </div>
              <ul className={`main-menu ${showMenu ? 'active' : ''}`}>
                <li><a href="/"><span>Live</span></a></li>
                <li><a href="/sportsbetting"><span>Sports Betting</span></a></li>
                <li><a className="active" href="/casino"><span>Casino</span></a></li>
                <li><a href="URL:void()"><span>Lucky Drops</span></a></li>
                <li><a href="/livecasino"><span>Live Casino</span></a></li>
                <li><a href="/promotions"><span>Promotions</span></a></li>
                <li className="cmn-grp">
                  <span className="cmn--btn">
                    <span className="rela">Deposit</span></span></li>
              </ul>
            </div>
            <div className="dashboar__wrap">
              <div className="items d__text"><span className="small">Your balance</span>
                <h6>${balance}</h6>
              </div>
              <div className="items d__cmn">
                <a className="cmn--btn" href="/dashboard/deposit"><span>Deposit</span></a>
              </div>
              <div className="items dashboar__social"><a className="icons" href="URL:void()">
                <i
                className="icon-gift"></i><span className="count">2</span></a><a className="icons"
                  href="URL:void()"><i className="icon-message"></i><span className="count">2</span></a>
                <CustomNavbarDropdown />
              </div>
              <div className="lang d-flex align-items-center px-2">
                <div className="header-bar d-lg-none false" onClick={() => setShowMenu(!showMenu)}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
