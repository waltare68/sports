import React from 'react'
import DashNav from '../DashNav'
import Dashboard_sidebar from '../components/Dashboard_sidebar'
import Footer_small_menu from '../components/Footer_small_menu'

const Notifications = () => {
    return (
        <>
            <DashNav />
            <section className="dashboard__body mt__30 pb-60">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-xxl-3 col-xl-3 col-lg-4">
                            <Dashboard_sidebar activeli='notification' />


                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-8">
                            <div className="dashboard__body__wrap">
                                <h3 className="account__head mb__30">Notifications</h3>
                                <div className="notification__wrap">
                                    <h4>Notifications</h4>
                                    <div className="notification__items">
                                        <div className="left">
                                            <h5>Announcements</h5>
                                            <p>Occasional announcements of new features</p>
                                        </div>
                                        <div className="right form-switch"><input className="form-check-input" type="checkbox"
                                            role="switch" id="downs" checked /></div>
                                    </div>
                                    <div className="notification__items">
                                        <div className="left">
                                            <h5>Feedback requests</h5>
                                            <p>Occasional requests for feedback</p>
                                        </div>
                                        <div className="right form-switch"><input className="form-check-input" type="checkbox"
                                            role="switch" id="downs1" checked /></div>
                                    </div>
                                    <div className="notification__items">
                                        <div className="left">
                                            <h5>Billing and account</h5>
                                            <p>Transactional emails and account notifications</p>
                                        </div>
                                        <div className="right"><a href="URL:void(0)">Legally obligated</a></div>
                                    </div>
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

export default Notifications
