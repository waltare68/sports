"use client"
import React, { useEffect, useState } from 'react'
import Countrylist from './navcomponents/countrylist'
import SignUpModal from '../Modals/signupModal'
import LoginModal from '../Modals/LoginModal'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getSession, useSession } from 'next-auth/react'
import CustomNavbarDropdown from './navcomponents/CustomNavbarDropdown'
import Spinner from '../spinner'

interface headerProps {
    userEmail: string;
}
const Header = ({ userEmail }: headerProps) => {

    const { data: session, status } = useSession()
    const [isOpen, setIsOpen] = useState(false)
    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };
    const [balance, setBalance] = useState<number>(0);
    const [loadingBalance,setLoadingBalance] =useState(true);
   // useEffect(() => {
        const fetchData = async () => {
            try {
                const email = { userEmail };
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
                setLoadingBalance(false);
            } catch (error) {
                console.error('Error fetching balance:', error);
            }
        };

        fetchData();
    //}, []);
    return (
        <>
            <header className="header-section py-1 py-lg-3">
                <div className="container-fluid p-0">
                    <div className="header-wrapper">
                        <div className="menu__left__wrap">
                            <div className="logo-menu px-2"><a className="logo" href="/"><img alt="logo" loading="lazy" width="144"
                                height="30" decoding="async" data-nimg="1" style={{ color: 'transparent' }}
                                srcSet="/logo.png"
                                src="/logo.png" /></a>
                            </div>
                            <div className="lang d-flex align-items-center px-2">

                                <div className="language__wrap">

                                    <div className="flag"><img alt="flag" loading="lazy" width="32" height="24" decoding="async"
                                        data-nimg="1" style={{ color: 'transparent' }}
                                        srcSet="/flag1.png"
                                        src="/flag1.png" />
                                    </div>
                                    <div className="selector"><button id="headlessui-listbox-button-:R1kpbdcba:" type="button"
                                        aria-haspopup="listbox" aria-expanded="false" data-headlessui-state=""><span
                                            className="">En</span></button></div>
                                </div>
                                <div className={`header-bar d-lg-none ${isOpen ? 'active' : ''}`} onClick={handleMenuToggle}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <ul className={`main-menu ${isOpen ? 'active' : ''}`}>
                                <li><a href="/"><span>Live</span></a></li>
                                <li><a href="/"><span>Sports Betting</span></a></li>
                                <li><a href="/casino"><span>Casino</span></a></li>
                                <li><a href="URL:void(0)"><span>Lucky Drops</span></a></li>
                                <li><a href="/livecasino"><span>Live Casino</span></a></li>
                                <li><a href="/promotions"><span>Promotions</span></a></li>
                                <li className="cmn-grp">
                                    {session && session.user?.email ? (
                                        <>
                                            <CustomNavbarDropdown />

                                        </>
                                    ) : (
                                        <>
                                            <LoginModal />
                                            <SignUpModal />
                                        </>
                                    )}

                                </li>
                            </ul>
                        </div>
                        <div className="mneu-btn-grp">
                            <Countrylist />
                            {session && session.user?.email ? (
                                <>
                                    <div className='text-white'>{loadingBalance ? <Spinner /> : `Balance $${balance}`}</div>
                                    <CustomNavbarDropdown />

                                </>
                            ) : (
                                <>
                                    <LoginModal />
                                    <SignUpModal />
                                </>
                            )}


                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header