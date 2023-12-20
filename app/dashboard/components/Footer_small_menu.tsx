"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faUserCircle,faTicketAlt,faTableTennis,faGift } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import BetslipModal from '@/app/components/BodyComponents/BetslipModal';
interface BottomNavProps {
  isLoggedIn: boolean,
  userEmail: string
}

export default function Footer_small_menu({isLoggedIn,userEmail}:BottomNavProps) {
  const [showslipModal, setShowSlip] = useState(false)
  const handleSlipClose = () => setShowSlip(false);
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
          <li ><a className="d-grid justify-content-center" href='/dashboard'>
            <span><FontAwesomeIcon icon={faUserCircle} /></span>
            <span className="texta"> Account</span></a>

          </li>

        </ul>
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
