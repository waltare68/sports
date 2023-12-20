import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import BetslipModal from '../BodyComponents/BetslipModal'
 interface BetslipProps{
    showSlip:boolean,
 }
const Betslip = ({showSlip}:BetslipProps) => {
  const [showslipModal,setShowSlip] = useState(showSlip)
  const handleSlipClose = () => {
    setShowSlip(!showslipModal);
    
}
  const handleSlipShow = () => setShowSlip(true);
  return (
    <>

    <Modal show={showSlip} 
            size='lg'
            scrollable
            onHide={handleSlipClose}
            className='modal mybets__modal' id="bets">
        <Modal.Header closeButton className='mt-2'>
        </Modal.Header>
        <Modal.Body className='right__site__section'>
        <BetslipModal IsLoggedIn={false} UserEmail={''}/>
        </Modal.Body>
        
      </Modal>

    
      
    </>
  )
}

export default Betslip
