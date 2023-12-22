import React from 'react'
import DashNav from '../DashNav'
import Dashboard_sidebar from '../components/Dashboard_sidebar'
import Footer_small_menu from '../components/Footer_small_menu'

export default function Verification() {
    return (
        <>
            <DashNav  userEmail={''}/>

            <section className="dashboard__body mt__30 pb-60">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-xxl-3 col-xl-3 col-lg-4">
                            <Dashboard_sidebar activeli='verification' />
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-8">
                            <div className="dashboard__body__wrap">
                                <h3 className="account__head mb__30">Verification</h3>
                                <div className="verification__wrap">
                                    <div className="row g-4">
                                        <div className="col-xxl-6 col-xl-6 col-lg-12">
                                            <div className="verification__box">
                                                <h4 className="veri__title">ID card</h4>
                                                <div className="attach__wrap">
                                                    <div className="selector"><button
                                                        id="headlessui-listbox-button-:Rphkpmmbcba:" type="button"
                                                        aria-haspopup="listbox" aria-expanded="false"
                                                        data-headlessui-state=""><span className="">Choose document
                                                            type</span></button></div><a className="cmn--btn"
                                                                href="URL:void(0)"><span>Attach</span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-12">
                                            <div className="verification__box">
                                                <h4 className="veri__title">Passport</h4>
                                                <div className="attach__wrap">
                                                    <div className="selector"><button
                                                        id="headlessui-listbox-button-:Rpikpmmbcba:" type="button"
                                                        aria-haspopup="listbox" aria-expanded="false"
                                                        data-headlessui-state=""><span className="">Choose document
                                                            type</span></button></div><a className="cmn--btn"
                                                                href="URL:void(0)"><span>Attach</span></a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="bottom__text pt-120">
                                    <h4>Additional information</h4>
                                    <p>The verification procedure usually takes up to 48 hours from the moment of successful
                                        download and receiving of client’s data. However, we always try to process
                                        information as soon as possible. As soon as an account is verified, you will receive
                                        an email notification. You can also contact customer support (online chat or by
                                        phone) to clarify this information.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer_small_menu isLoggedIn={true} userEmail={''} />
            </section>


        </>
    )
}
