import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faTicketAlt, faTableTennis, faGift } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { Modal, Nav } from 'react-bootstrap';
import BetslipModal from './BetslipModal';
import { signIn } from 'next-auth/react';

interface BottomNavProps {
    isLoggedIn: boolean,
    userEmail: string
}
export default function BottomNavigation({ isLoggedIn, userEmail }: BottomNavProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [show, setShow] = useState(false);
    const [isLoggSuccess, SetLogSuccess] = useState(false)
    const [showslipModal, setShowSlip] = useState(false)
    const handleSlipClose = () => setShowSlip(false);
    const handleSlipShow = () => setShowSlip(true);
    const router = useRouter();


    // Modalvariables&functions
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginTab, setLoginActivetab] = useState(true)

    const [message, setMessage] = useState('');
    const toggleActiveNav = () => {
        setLoginActivetab(!loginTab);
    }

    const handleSubmit = async () => {
        setMessage('signing in...')
        try {
            const signInResponse = await signIn('credentials', {
                email,
                password,
                redirect: false,
            })

            if (!signInResponse || signInResponse.ok !== true) {
                setMessage("Invalid credentials");
            } else {
                router.refresh();
                isLoggedIn = true
                SetLogSuccess(true);
                setMessage('Authentication Successfull...')
                router.push('/');
                handleClose();
            }
        } catch (error) {

        }

    };

    return (
        <>
            <ul className="footer__menu d-lg-none">
                <li><a className="d-grid justify-content-center" href="/"><span><FontAwesomeIcon icon={faTableTennis} /></span><span
                    className="texta">Sports</span></a></li>
                <li><a className="d-grid justify-content-center" data-bs-toggle="modal" data-bs-target="#eventsp"
                    href="URL:void(0)"><span> <FontAwesomeIcon icon={faGift} /></span><span
                        className="texta">Events</span></a></li>
                <li className="header-bartwo d-lg-none"><span className="bars"><FontAwesomeIcon icon={faBars} /></span><span
                    className="cros"><i className="fa-solid fa-xmark"></i></span></li>
                <li onClick={(e) => {
                    e.preventDefault();
                    setShowSlip(!showslipModal)

                }}><a className="d-grid justify-content-center" data-bs-toggle="modal" data-bs-target="#betsp"
                    href="#"><span ><FontAwesomeIcon icon={faTicketAlt} /></span><span className="texta">My
                        Bet</span></a></li>
                <li onClick={(e) => {
                    if (!isLoggedIn) {
                        e.preventDefault();
                        handleShow();
                    }
                }}><a className="d-grid justify-content-center" href={isLoggedIn ? '/dashboard' : '#'}
                ><span><FontAwesomeIcon icon={faUserCircle} /></span><span className="texta"> Account</span></a>

                </li>

            </ul>
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                className='register__modal backdrop-blur-sm'
                centered
                scrollable
            >
                <Modal.Header closeButton >

                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row align-items-center g-4">
                            <div className="col-lg-6">
                                <div className="modal__left"><img alt="modal" loading="lazy" width="424" height="533"
                                    decoding="async" data-nimg="1" style={{ color: 'transparent' }}
                                    srcSet="/img/modal/modal.png"
                                    src="/img/modal/modal.png" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="modal__right">
                                    <Nav variant="tabs" defaultActiveKey="#home2">
                                        <Nav.Item>
                                            <Nav.Link href="#home2" onClick={toggleActiveNav}>Sign Up</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link href='#contact2' onClick={toggleActiveNav}>Sign In</Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <div className="tab-content " id="myTabContent2">
                                        <div className={`tab-pane fade ${loginTab ? 'show active' : ''}`} id="home2 " role="tabpanel">
                                            <div className="form__tabs__wrap">

                                                <form action="#0">
                                                    <div className="form__grp"><label htmlFor="emailsign">Email</label>
                                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="emailsign" placeholder="Email Your" />
                                                    </div>
                                                    <div className="form__grp"><label
                                                        htmlFor="toggle-password3">Password</label>
                                                        <input id="toggle-password3" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" /><span id="#toggle-password3"
                                                            className="fa fa-fw fa-eye field-icon toggle-password3"></span>
                                                    </div>
                                                    <div className="login__signup">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="remem" /><label
                                                                className="form-check-label" htmlFor="remem">Remember me</label>
                                                        </div><a href="URL:void(0)">Forgot Password</a>
                                                    </div>
                                                    <div className="create__btn" onClick={handleSubmit}><a className="cmn--btn"
                                                        href="#"><span>Sign in</span></a></div>
                                                    <p>Dont you have an account?<a
                                                        href="#">Register</a></p>
                                                    <p>{message}</p>
                                                </form>
                                            </div>
                                        </div>
                                        <div className={`tab-pane fade ${!loginTab ? 'show active' : ''}`} id="contact2" role="tabpanel">
                                            <div className="form__tabs__wrap">
                                                <div className="focus__icon">
                                                    <p>or registration via social media accounts</p>
                                                    <div className="social__head">
                                                        <ul className="social">
                                                            <li><a href="URL:void(0)"><i
                                                                className="fa-brands fa-facebook-f"></i></a></li>
                                                            <li><a href="URL:void(0)"><i className="fab fa-twitter"></i></a>
                                                            </li>
                                                            <li><a href="URL:void(0)"><i
                                                                className="fa-brands fa-linkedin-in"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <form action="#0">
                                                    <div className="form__grp"><label htmlFor="email34">Email</label>
                                                        <input type="email" id="email34" placeholder="Email Your" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                                                    <div className="form__grp">
                                                        <label htmlFor="toggle-password10">Password</label>
                                                        <input id="toggle-password10" type="password" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                        <span id="#toggle-password10" className="fa fa-fw fa-eye field-icon toggle-password10"></span>
                                                    </div>
                                                    <div className="form__grp"><label
                                                        htmlFor="toggle-password9">Confrim</label><input
                                                            id="toggle-password9" type="password"
                                                            placeholder="Password" /><span id="#toggle-password9"
                                                                className="fa fa-fw fa-eye field-icon toggle-password9"></span>
                                                    </div>
                                                    <div className="create__btn" onClick={handleSubmit}><a className="cmn--btn"
                                                        href="#"><span>Sign Up</span></a></div>
                                                    <p>Do you have an account?<a href="#">Login</a>
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>


            </Modal>

            {/* mobile betsip modal */}
            <Modal show={showslipModal}
                size='lg'
                scrollable
                onHide={handleSlipClose}
                className='modal mybets__modal' id="bets">
                <Modal.Header closeButton className='mt-2'>
                </Modal.Header>
                <Modal.Body className='right__site__section'>
                    <>
                        <BetslipModal IsLoggedIn={isLoggedIn} UserEmail={userEmail} />

                    </>
                </Modal.Body>

            </Modal>
        </>
    )
}
