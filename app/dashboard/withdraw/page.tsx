import React from 'react'
import DashNav from '../DashNav'
import Dashboard_sidebar from '../components/Dashboard_sidebar'
import Footer_small_menu from '../components/Footer_small_menu'

export default function Withdraw() {
  return (
    <>
    <DashNav userEmail={''} />
            <section className="dashboard__body mt__30 pb-60">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-xxl-3 col-xl-3 col-lg-4">
                            <Dashboard_sidebar activeli='withdraw' />
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-8">
                        <div className="dashboard__body__wrap">
                            <h3 className="account__head mb__30">Withdraw</h3>
                            <div className="payment__cart__check">
                                <h3 className="balance">Balance: € 0.00</h3>
                                <div className="row g-4">
                                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                        <div className="payment__cart__items"><input className="form-check-input"
                                                type="checkbox" id="deposit0" /><label className="form-check-label"
                                                htmlFor="deposit0"><img alt="visa" loading="lazy" width="134" height="46"
                                                    decoding="async" data-nimg="1" style={{color:'transparent'}}
                                                    srcSet="/visa.png"
                                                    src="/visa.png" /></label>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                        <div className="payment__cart__items"><input className="form-check-input"
                                                type="checkbox" id="deposit1" /><label className="form-check-label"
                                                htmlFor="deposit1"><img alt="visa" loading="lazy" width="134" height="46"
                                                    decoding="async" data-nimg="1" style={{color:'transparent'}}
                                                    srcSet="/webpay.png"
                                                    src="/webpay.png" /></label>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                        <div className="payment__cart__items"><input className="form-check-input"
                                                type="checkbox" id="deposit2" /><label className="form-check-label"
                                                htmlFor="deposit2"><img alt="visa" loading="lazy" width="134" height="46"
                                                    decoding="async" data-nimg="1" style={{color:'transparent'}}
                                                    srcSet="/skrill.png"
                                                    src="/skrill.png" /></label>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                        <div className="payment__cart__items"><input className="form-check-input"
                                                type="checkbox" id="deposit3" /><label className="form-check-label"
                                                htmlFor="deposit3"><img alt="visa" loading="lazy" width="134" height="47"
                                                    decoding="async" data-nimg="1" style={{color:'transparent'}}
                                                    srcSet="/Finovarav.png"
                                                    src="/Fivovarav.png" /></label>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                        <div className="payment__cart__items"><input className="form-check-input"
                                                type="checkbox" id="deposit4" /><label className="form-check-label"
                                                htmlFor="deposit4"><img alt="visa" loading="lazy" width="134" height="47"
                                                    decoding="async" data-nimg="1" style={{color:'transparent'}}
                                                    srcSet="/bitcoin.png"
                                                    src="/bitcoin.png" /></label>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                        <div className="payment__cart__items"><input className="form-check-input"
                                                type="checkbox" id="deposit5" /><label className="form-check-label"
                                                htmlFor="deposit5"><img alt="visa" loading="lazy" width="134" height="47"
                                                    decoding="async" data-nimg="1" style={{color:'transparent'}}
                                                    srcSet="/paypal.png"
                                                    src="/paypal.png" /></label>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                        <div className="payment__cart__items"><input className="form-check-input"
                                                type="checkbox" id="deposit6" /><label className="form-check-label"
                                                htmlFor="deposit6"><img alt="visa" loading="lazy" width="134" height="46"
                                                    decoding="async" data-nimg="1" style={{color:'transparent'}}
                                                    srcSet="/much.png"
                                                    src="/much.png" /></label>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                        <div className="payment__cart__items"><input className="form-check-input"
                                                type="checkbox" id="deposit7" /><label className="form-check-label"
                                                htmlFor="deposit7"><img alt="visa" loading="lazy" width="134" height="46"
                                                    decoding="async" data-nimg="1" style={{color:'transparent'}}
                                                    srcSet="/visa.png"
                                                    src="/visa.png" /></label>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                        <div className="payment__cart__items"><input className="form-check-input"
                                                type="checkbox" id="deposit8" /><label className="form-check-label"
                                                htmlFor="deposit8"><img alt="visa" loading="lazy" width="134" height="46"
                                                    decoding="async" data-nimg="1" style={{color:'transparent'}}
                                                    srcSet="/yandex.png"
                                                    src="/yandex.png" /></label>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                        <div className="payment__cart__items"><input className="form-check-input"
                                                type="checkbox" id="deposit9" /><label className="form-check-label"
                                                htmlFor="deposit9"><img alt="visa" loading="lazy" width="134" height="46"
                                                    decoding="async" data-nimg="1" style={{color:'transparent'}}
                                                    srcSet="/coins.png"
                                                    src="/coins.png" /></label>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                        <div className="payment__cart__items"><input className="form-check-input"
                                                type="checkbox" id="deposit10" /><label className="form-check-label"
                                                htmlFor="deposit10"><img alt="visa" loading="lazy" width="134" height="46"
                                                    decoding="async" data-nimg="1" style={{color:'transparent'}}
                                                    srcSet="/phonerpe.png"
                                                    src="/phonerpe.png" /></label>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                        <div className="payment__cart__items"><input className="form-check-input"
                                                type="checkbox" id="deposit11" /><label className="form-check-label"
                                                htmlFor="deposit11"><img alt="visa" loading="lazy" width="134" height="47"
                                                    decoding="async" data-nimg="1" style={{color:'transparent'}}
                                                    srcSet="/neteller.png"
                                                    src="/neteller.png" /></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="deposit__complate">
                                <h3>Complete Your Withdraw</h3>
                                <div className="deposit__wallet">
                                    <div className="deopsit__wallet__items">
                                        <p>Deposit to Wallet</p>
                                        <div className="usd__chacnge"><span>USD</span>
                                            <div className="icons" id="profile-picture"><i className="fas fa-pen"></i></div>
                                        </div>
                                    </div>
                                    <div className="deopsit__wallet__items">
                                        <p>Payment Provider</p>
                                        <div className="usd__chacnge"><span><img alt="vissa" loading="lazy" width="44"
                                                    height="17" decoding="async" data-nimg="1" style={{color:'transparent'}}
                                                    srcSet="/visa.png"
                                                    src="/visa.png" /></span>
                                            <div className="icons" id="profile-picture2"><i className="fas fa-pen"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="promo__code"><span className="promo">Promo Code</span><a
                                        href="URL:void()"><span>Enter Code</span><span><i
                                                className="fas fa-plus"></i></span></a></div><a className="visa__card"
                                    href="URL:void()"><img alt="visa" loading="lazy" width="82" height="31"
                                        decoding="async" data-nimg="1" style={{color:'transparent'}}
                                        srcSet="/visa.png"
                                        src="/visa.png" /></a>
                                <ul className="quick-value">
                                    <li>
                                        <h5 className="active">20</h5>
                                    </li>
                                    <li>
                                        <h5 className="">30</h5>
                                    </li>
                                    <li>
                                        <h5 className="">200</h5>
                                    </li>
                                    <li><a href="URL:void()">Custom</a></li>
                                </ul>
                                <form action="#">
                                    <div className="single-input mb__20"><input type="text" id="dAmount"
                                            placeholder="Enter Amount" value="$20" /></div>
                                    <div className="single-input"><input type="text" id="eemail" placeholder="Email" />
                                    </div>
                                    <div className="total__amount">
                                        <div className="items"><span>Amount Fee</span><span>$20</span></div>
                                        <div className="items"><span>Total</span><span>$20</span></div>
                                    </div>
                                    <div className="btn-area"><button className="cmn--btn"><span>Withdraw</span></button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                        
                    </div>
                </div>
                <Footer_small_menu isLoggedIn={false} userEmail={''} />
            </section>
      
    </>
  )
}
