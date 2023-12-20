"use client";
import React, { useEffect, useRef, useState } from 'react'
import DashNav from '../DashNav'
import Dashboard_sidebar from '../components/Dashboard_sidebar'
import Footer_small_menu from '../components/Footer_small_menu'
import { useSession } from 'next-auth/react';
import { useUser } from '@/app/api/auth/data/userContext';
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


export default function Identity() {
    const { data: session } = useSession();

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [avatar, setavatarUrl] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [dob, setDob] = useState('')
    const [address, setAddress] = useState('')
    const [aptSuite, setaptSuite] = useState('')
    const [city, setcity] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [postalcode, setPostalCode] = useState('')
    let userEmail = '';

    if (session && session.user && session.user.email) {
        userEmail = session.user.email;
    }
    
    const handleSubmit = async () => {
        if (session && session.user && session.user.email) {
            userEmail = session.user.email;
        }else
        {return}
        const body = {
            email: userEmail,
            firstName: firstName,
            lastname: lastname,
            phone: phone,
            dob: dob,
            address: address,
            aptSuite: aptSuite,
            city,
            country,
            state,
            postalcode
        };
        try {
            const response = await fetch('http://localhost:3000/api/profile/profileupdate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                console.log('Profile updated successfully.');
            } else {
                console.error('Failed to update the profile.');
            }
        } catch (error) {
            console.error('API request error:', error);
        }
    }



    useEffect(() => {
        if (userEmail) {
            const fetchData = async () => {
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
                        console.log(responseData);
                        setEmail(responseData.email || '');
                        setFirstName(responseData.firstName || '');
                        setLastName(responseData.lastName || '');
                        setavatarUrl(responseData.avatarUrl || '');
                        setDob(responseData.DOB || '');
                        setAddress(responseData.Address || '')
                        setaptSuite(responseData.AptSuite || '')
                        setcity(responseData.city || '')
                        setCountry(responseData.country || '')
                        setState(responseData.State || '')
                        setPostalCode(responseData.postalcode || '')
                        setPhone(responseData.phone || '')
                    })
                    .catch((error) => {
                        console.error("Fetch error:", error);
                    });
            };

            fetchData();
        }
    }, []);
    return (
        <>
            <DashNav userEmail={(session && session.user?.email)? session.user.email : ''} />
            <section className="dashboard__body mt__30 pb-60">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-xxl-3 col-xl-3 col-lg-4">
                            <Dashboard_sidebar activeli='identity' />
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-8">
                            <div className="dashboard__body__wrap">
                                <h3 className="account__head mb__30">Identity Details</h3>
                                <div className="identity__details bgbox">
                                    <h5 className="identity__title">About You</h5>
                                    <div className="identity__left mb-5">
                                        <form action="#">
                                            <div className="row g-2 mb-3">
                                                <div className="col-lg-6">
                                                    <div className="form__box"><label htmlFor="name">First Name (Given
                                                        Name)</label><input type="text" id="name" value={firstName}
                                                            placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} /></div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form__box"><label htmlFor="lastName">Last Name (Surname / Family
                                                        Name)</label><input type="text" id="lastName" value={lastname} onChange={(e) => setLastName(e.target.value)}
                                                            placeholder="Last Name" /></div>
                                                </div>
                                            </div>
                                            <div className="row g-2">
                                                <div className="col-lg-6"><label htmlFor="dob">Date Of Birth</label>
                                                    <div className="row g-2">
                                                        <div className="col-lg-10">
                                                            <div className="form__box"><input type="date" id="dob"
                                                                placeholder="XX" value={dob} onChange={(e) => setDob(e.target.value)} /></div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-lg-6"><label htmlFor="dob">Phone Number</label>
                                                    <div className="row g-2">
                                                        <div className="col-lg-4">
                                                            <div className="form__box"><input type="text" placeholder="+254" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div className="form__box"><input type="number"
                                                                placeholder="XXXXXXXX" value={phone} onChange={(e) => setPhone(e.target.value)} /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <h5 className="identity__title">Address </h5>
                                    <div className="identity__left mb-3">
                                        <form action="#">
                                            <div className="row g-3">
                                                <div className="col-lg-6">
                                                    <div className="form__box"><label htmlFor="add1">Address</label>
                                                        <input type="text" id="add1" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="XXXXX" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form__box"><label htmlFor="add2">Apt, Suite, etc</label>
                                                        <input type="text" id="add2" placeholder="XXXXX" value={aptSuite} onChange={(e) => setaptSuite(e.target.value)} /></div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form__box"><label htmlFor="add3">City / Region</label>
                                                        <input type="text" id="add3" placeholder="XXXXX" value={city} onChange={(e) => setcity(e.target.value)} /></div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form__box"><label htmlFor="add4">Country</label><input
                                                        type="text" id="add4" placeholder="United Kingdom" value={country} onChange={(e) => setCountry(e.target.value)} /></div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form__box"><label htmlFor="add5">State / Province</label>
                                                        <input type="text" id="add5" placeholder="XXXXX" value={state} onChange={(e) => setState(e.target.value)} /></div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form__box"><label htmlFor="add6">Postal Code</label>
                                                        <input type="text" id="add6" placeholder="XXXX" value={postalcode} onChange={(e) => setPostalCode(e.target.value)} /></div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="authorize__wrap"><input className="form-check-input" type="checkbox" id="aut1"
                                        value="" /><label className="form-check-label" htmlFor="aut1">I authorize Zikani to
                                            collect and transmit my personal information htmlFor identity verification
                                            or <span>similar uses as defined</span> in order to confirm my ability
                                            to use the website.</label></div>
                                    <div onClick={handleSubmit} className="save__btn mt-3 d-flex"><a className="cmn--btn"
                                        href="#"><span>Save</span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer_small_menu />
            </section>
        </>
    )
}
