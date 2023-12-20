"use client";
import React, { useEffect, useState } from 'react'
import Dashboard_sidebar from './components/Dashboard_sidebar'
import Footer_small_menu from './components/Footer_small_menu'
import { FaPen } from "react-icons/fa6";
import { FcLock } from "react-icons/fc";
import { useSession } from 'next-auth/react';
import prisma from '../lib/prisma';
import { Prisma } from '@prisma/client';
import { formatISODate } from '../components/date_converter';
interface BodyProps {
    isLoggedIn: boolean,
    userEmail: string
  }

interface UserData {
    id: String
    email: String | number | readonly string[] | undefined
    phone: String | undefined;
    hashedPassword: String;
    createdAt: Date;
    otp: String | undefined;
    lastLoginDate: Date | undefined;
    emailVerified: Boolean | undefined;
    avatarUrl: String | undefined;
    userID: String | undefined;
    accountArchived: Boolean;
    firstName: String | undefined;
    lastName: String | undefined;
    DOB: String | undefined;
    Address: String | undefined;
    AptSuite: String | undefined;
}


export default function DashboardBody({isLoggedIn,userEmail}:BodyProps) {
    const { data: session } = useSession();
    const [data, setData] = useState<UserData | null>(null);
    const [dateJoined, setdateJoined] = useState('');
    const [firstName, setFirstName] = useState('');

    if (session && session.user && session.user.email) {
      userEmail = session.user.email;
    }
    useEffect(() => {
        const fetchData = async () => {
            if (userEmail) {
                const ParamsData = {
                    email: userEmail,
                };
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(ParamsData),
                };
                fetch('http://localhost:3000/api/profile', options)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then((responseData) => {
                        //setUserEmail(responseData.email || '');
                        setdateJoined(formatISODate(responseData.createdAt || ''));
                        setFirstName(responseData.firstName)
                        setData(responseData);
                    })
                    .catch((error) => {
                        console.error("Fetch error:", error);
                    });
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <section className="dashboard__body mt__30 pb-60">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-xxl-3 col-xl-3 col-lg-4">
                            <Dashboard_sidebar activeli='dashboard' />
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-8">
                            <div className="dashboard__body__wrap">
                                <h3 className="account__head mb__30">Account Settings</h3>
                                <div className="row g-4">
                                    <div className="col-xl-4">
                                        <div className="user__box">
                                            <div className="img__change"><img alt="profile" loading="lazy" width="120"
                                                height="120" decoding="async" data-nimg="1" style={{ color: 'transparent' }}
                                                srcSet="/profile.png"
                                                src="/profile.png" />
                                                <div className="icons" id="profile-picture"><FaPen className='text-white m-2.5 font-semibold' /></div>
                                            </div>
                                            <div className="user__content">
                                                <h5 className="usertext__one">{firstName}</h5>
                                                <h6 className="usertext__two">UUID:</h6><a className="link"
                                                    href="URL:void()">ffbe99f2-7f4b-11ed-9e24-3ee8038fe302</a>
                                            </div>
                                            <div className="reset__wrap"><a className="reset" href="URL:void()">Reset Password</a><a
                                                className="change" href="URL:void()">Change Gamertag</a></div>
                                            <div className="user__dated"><span className="date">Joined {dateJoined} </span><a
                                                className="lastlogin" href="URL:void()">Last Login on </a></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8">
                                        <div className="account__body">
                                            <div className="account__strength__box mb__30">
                                                <div className="strength__box">
                                                    <div className="circle__box">
                                                        <div className="circle">
                                                            <div className="box">
                                                                <h3 className="text">70%</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h5>Account Strength</h5>
                                                </div>
                                                <div className="strength__content">
                                                    <div className="items"><input className="form-check-input" type="checkbox"
                                                        id="stre1c" checked /><label className="form-check-label"
                                                            htmlFor="stre1c">Create account</label></div>
                                                    <div className="items"><input className="form-check-input" type="checkbox"
                                                        id="stre2" checked /><label className="form-check-label"
                                                            htmlFor="stre2">Complete Account</label></div>
                                                    <div className="items"><input className="form-check-input" type="checkbox"
                                                        id="stre3" checked /><label className="form-check-label"
                                                            htmlFor="stre3">Verify Identity</label></div>
                                                    <div className="items"><span className="icons"><i
                                                        className="icon-deposit"></i></span><span>Made a Deposit</span>
                                                    </div>
                                                    <div className="items"><span className="icons"><i
                                                        className="icon-user"></i></span><span>Upload Avatar</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="account__email mb__30">
                                                <h5>Account Emails</h5><span className="subtitle">Primary Emails</span>
                                                <div className="form__wrap">
                                                    <form action="#"><input className='text-white' type="text" disabled value={userEmail}
                                                        placeholder="" /> <span style={{ position: 'absolute', top: '12px', right: '15px' }}>
                                                            <FcLock />
                                                        </span>
                                                    </form>
                                                    <div className="check__items"><input className="form-check-input"
                                                        type="checkbox" id="stre1" checked /><label
                                                            className="form-check-label" htmlFor="stre1">Verified</label></div>
                                                </div>

                                            </div>
                                            <div className="account__email enroll__box mb__30">
                                                <h5>Multi_factor Authentication</h5>
                                                <p>Add an Extra Layer of security to your SportOdds account when logging in
                                                    with Email/Passsword. A verrification code will be sent to your email
                                                    each time you loin to secrely protect your account.</p><a
                                                        className="cmn--btn" href="URL:void()"><span>Enroll</span></a>
                                            </div>
                                            <div className="account__email language__box mb__30">
                                                <h5>Language</h5><span className="slanguage">Select Language</span>
                                                <div className="language__wrap">
                                                    <div className="selector"><button
                                                        id="headlessui-listbox-button-:R37ikpmbcba:" type="button"
                                                        aria-haspopup="listbox" aria-expanded="false"
                                                        data-headlessui-state=""><span className="">English</span></button>
                                                    </div><a className="cmn--btn" href="URL:void()"><span>Save</span></a>
                                                </div>
                                            </div>
                                            <div className="account__email social__box mb__30">
                                                <h5>Social Accounts</h5><span className="slanguage">Connect your accounts htmlFor
                                                    faster login.</span>
                                                <div className="social__wrap">
                                                    <div className="social__left"><a href="URL:void()"><span><img alt="icon"
                                                        loading="lazy" width="20" height="20" decoding="async"
                                                        data-nimg="1" style={{ color: 'transparent' }}
                                                        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoggle.55134f73.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoggle.55134f73.png&amp;w=48&amp;q=75 2x"
                                                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoggle.55134f73.png&amp;w=48&amp;q=75" /></span><span>Connect
                                                            Google</span></a><a href="URL:void()"><span><img alt="icon"
                                                                loading="lazy" width="20" height="20" decoding="async"
                                                                data-nimg="1" style={{ color: 'transparent' }}
                                                                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsteam.a4787de8.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsteam.a4787de8.png&amp;w=48&amp;q=75 2x"
                                                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsteam.a4787de8.png&amp;w=48&amp;q=75" /></span><span>Connect
                                                                    steam</span></a><a href="URL:void()"><span><img alt="icon"
                                                                        loading="lazy" width="20" height="20" decoding="async"
                                                                        data-nimg="1" style={{ color: 'transparent' }}
                                                                        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwitter.8a782c92.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwitter.8a782c92.png&amp;w=48&amp;q=75 2x"
                                                                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwitter.8a782c92.png&amp;w=48&amp;q=75" /></span><span>Connect
                                                                            Twitter</span></a></div>
                                                    <div className="social__left"><a href="URL:void()"><span><img alt="icon"
                                                        loading="lazy" width="21" height="20" decoding="async"
                                                        data-nimg="1" style={{ color: 'transparent' }}
                                                        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffacebook.5e74ce57.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffacebook.5e74ce57.png&amp;w=48&amp;q=75 2x"
                                                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffacebook.5e74ce57.png&amp;w=48&amp;q=75" /></span><span>Connect
                                                            facebook</span></a><a href="URL:void()"><span><img
                                                                alt="icon" loading="lazy" width="256" height="256"
                                                                decoding="async" data-nimg="1" style={{ color: 'transparent' }}
                                                                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwitch.b4aeb0c6.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwitch.b4aeb0c6.png&amp;w=640&amp;q=75 2x"
                                                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwitch.b4aeb0c6.png&amp;w=640&amp;q=75" /></span><span>Connect
                                                                    twitch</span></a><a href="URL:void()"><span><img alt="icon"
                                                                        loading="lazy" width="21" height="20" decoding="async"
                                                                        data-nimg="1" style={{ color: 'transparent' }}
                                                                        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvkonta.78956b12.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvkonta.78956b12.png&amp;w=48&amp;q=75 2x"
                                                                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvkonta.78956b12.png&amp;w=48&amp;q=75" /></span><span>Connect
                                                                            vkontakte</span></a></div>
                                                </div>
                                            </div>
                                            <div className="account__email enroll__box">
                                                <h5>Archive Account</h5>
                                                <p>Want to temporarily close your account?</p><a className="cmn--btn"
                                                    href="URL:void()"><span>Archive Account</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer_small_menu isLoggedIn={isLoggedIn} userEmail={userEmail} />
            </section>

        </>
    )
}
