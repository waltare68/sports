"use client"
import React, { useState } from 'react'
import DashNav from '../DashNav'
import Dashboard_sidebar from '../components/Dashboard_sidebar'
import Footer_small_menu from '../components/Footer_small_menu'
import Image from 'next/image'
import { Button, Modal } from 'react-bootstrap'
import InfoText from '@/app/components/widgets/infoText'

export default function Deposit() {
    const [amount, setAmount] = useState("20");
    const [activeItem, setActiveItem] = useState('20');
    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = useState(showModal);
    const [showMpesaModal, setShowMpesaModal] = useState(false)
    const [showPaymentModal, setShowPaymentModal] = useState(false)

    const handleClose = () => setShow(false);
    const handleMpesaClose = () => setShowMpesaModal(false);
    const handlePaymentClose = () => setShowPaymentModal(false);
    const handleShow = () => setShow(true)
    const handlePaymentShow = () => setShowPaymentModal(true)

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    };

    const handleSetAmount = (newAmount: string = '20') => {
        setAmount(newAmount);
        setActiveItem(newAmount);
    };
    const handleShowMpesa = () => setShow(true);
    const handleDepositNow = () => {
        setShow(false);
        setShowMpesaModal(true);
    }
    
    return (
        <>
            <DashNav userEmail={''} />
            <section className="dashboard__body mt__30 pb-60">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-xxl-3 col-xl-3 col-lg-4">
                            <Dashboard_sidebar activeli='deposit' />
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-8">
                            <div className="dashboard__body__wrap">
                                <h3 className="account__head mb__30">Deposit</h3>
                                <div className="payment__cart__check">
                                    <div className="row g-4">
                                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="payment__cart__items" onClick={handlePaymentShow}>
                                                <input className="form-check-input" type="checkbox" id="deposit0" />
                                                <label className="form-check-label" htmlFor="deposit0">
                                                    <Image
                                                        src="/visa.png"
                                                        width={134}
                                                        height={46}
                                                        alt="Visa"
                                                        style={{ color: 'transparent' }}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="payment__cart__items" onClick={handleShowMpesa}>
                                                <input className="form-check-input" type="checkbox" id="deposit0" />
                                                <label className="form-check-label"
                                                    htmlFor="deposit1">
                                                    <Image
                                                        src="/img/mpesa.png"
                                                        width={94}
                                                        height={30}
                                                        alt="Mpesa"
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="payment__cart__items" onClick={handlePaymentShow}>
                                                <input className="form-check-input" type="checkbox" id="deposit2" />
                                                <label className="form-check-label"
                                                    htmlFor="deposit2">
                                                    <Image
                                                        src="/skrill.png"
                                                        width={134}
                                                        height={46}
                                                        alt="Skrill"
                                                        style={{ color: 'transparent' }}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="payment__cart__items" onClick={handlePaymentShow}>
                                                <input className="form-check-input" type="checkbox" id="deposit3" />
                                                <label className="form-check-label" htmlFor="deposit3">
                                                    <Image
                                                        src="/Finovarav.png"
                                                        width={134}
                                                        height={46}
                                                        alt="Finovarav"
                                                        style={{ color: 'transparent' }}
                                                    />

                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="payment__cart__items" onClick={handlePaymentShow}>
                                                <input className="form-check-input" type="checkbox" id="deposit4" />
                                                <label className="form-check-label" htmlFor="deposit4">
                                                    <Image
                                                        src="/bitcoin.png"
                                                        width={134}
                                                        height={46}
                                                        alt="Bitcoin"
                                                        style={{ color: 'transparent' }}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="payment__cart__items" onClick={handlePaymentShow}>
                                                <input className="form-check-input" type="checkbox" id="deposit5" />
                                                <label className="form-check-label" htmlFor="deposit5">
                                                    <Image
                                                        src="/paypal.png"
                                                        width={134}
                                                        height={46}
                                                        alt="Paypal"
                                                        style={{ color: 'transparent' }}
                                                    />
                                                </label>

                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="payment__cart__items" onClick={handlePaymentShow}>
                                                <input className="form-check-input" type="checkbox" id="deposit6" />
                                                <label className="form-check-label" htmlFor="deposit6">
                                                    <Image
                                                        src="/much.png"
                                                        width={134}
                                                        height={46}
                                                        alt="Much"
                                                        style={{ color: 'transparent' }}
                                                    />

                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="payment__cart__items" onClick={handlePaymentShow}>
                                                <input className="form-check-input" type="checkbox" id="deposit7" />
                                                <label className="form-check-label" htmlFor="deposit7">
                                                     <Image
                                                        src="/visa.png"
                                                        width={134}
                                                        height={46}
                                                        alt="visa"
                                                        style={{ color: 'transparent' }}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="payment__cart__items" onClick={handlePaymentShow}>
                                                <input className="form-check-input" type="checkbox" id="deposit8" />
                                                <label className="form-check-label" htmlFor="deposit8">
                                                        <Image
                                                        src="/yandex.png"
                                                        width={134}
                                                        height={46}
                                                        alt="yandex"
                                                        style={{ color: 'transparent' }}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="payment__cart__items" onClick={handlePaymentShow}>
                                                <input className="form-check-input" type="checkbox" id="deposit9" />
                                                <label className="form-check-label" htmlFor="deposit9">
                                                        
                                                        <Image
                                                        src="/coins.png"
                                                        width={134}
                                                        height={46}
                                                        alt="coins"
                                                        style={{ color: 'transparent' }}
                                                    />
                                                 </label>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="payment__cart__items" onClick={handlePaymentShow}>
                                                <input className="form-check-input"type="checkbox" id="deposit10" />
                                                <label className="form-check-label" htmlFor="deposit10">
                                                        <Image
                                                        src="/phonerpe.png"
                                                        width={134}
                                                        height={46}
                                                        alt="Phonerpe"
                                                        style={{ color: 'transparent' }}
                                                    />
                                                     </label>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="payment__cart__items" onClick={handlePaymentShow}>
                                                <input className="form-check-input" type="checkbox" id="deposit11" />
                                                <label className="form-check-label" htmlFor="deposit11">
                                                     <Image
                                                        src="/neteller.png"
                                                        width={134}
                                                        height={46}
                                                        alt="neteller"
                                                        style={{ color: 'transparent' }}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Footer_small_menu isLoggedIn={false} userEmail={''} />
            </section>

            <>
                <Modal
                    show={show} onHide={handleClose}
                    size="lg"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title >Deposit Amount</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >

                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                        <input type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                        dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:text-black"
                            placeholder="20" required />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleDepositNow}>
                            Deposit Now
                        </Button>
                    </Modal.Footer>
                </Modal>

            </>
            <>
                <Modal
                    show={showMpesaModal} onHide={handleMpesaClose}
                    size="lg"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title >Mpesa Payment Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >

                        <div className='flex'>
                            <span className="text-slate-400 font-semibold text-xl">Method Currency </span>
                            <span>USD</span>
                        </div>
                        <p className=" text-gray-600">Follow the Instructions Below to Deposit Money using Mpesa </p>

                        <p>Use the Mpesa Paybill </p>
                        <h3>247247</h3>
                        <p>Followed by Account Number</p>
                        <h3>8943333333</h3>
                        <p>Then amount </p>


                        <InfoText Message='Note the minimum deposit is 20 USD' />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleMpesaClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleMpesaClose}>
                            Confirm Payment
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            {/* method not available modal */}
            <>
                <>
                    <Modal
                        show={showPaymentModal} onHide={handlePaymentClose}
                        size="lg"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title >Payment Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >


                            <p className=" text-gray-600">Payment Method not Available at your Region</p>
                            <p className=" text-gray-600">Kindly select another payment method to Deposit</p>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={handlePaymentClose}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>
                </>
            </>

        </>
    )
}
