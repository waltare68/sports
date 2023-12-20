import React from 'react'
import CustomNavbarDropdown from './CustomNavbarDropdown'
export default function DashboardWrap() {
  return (
    <>
    <div className="dashboar__wrap">
                        <div className="items d__text"><span className="small">Your balance</span>
                            <h6>$9.22</h6>
                        </div>
                        <div className="items d__cmn"><a className="cmn--btn" href="URL:void()"><span>Deposit</span></a></div>
                        <div className="items dashboar__social"><a className="icons" href="URL:void()"><i
                                    className="icon-gift"></i><span className="count">2</span></a><a className="icons"
                                href="URL:void()"><i className="icon-message"></i><span className="count">2</span></a>
                            <CustomNavbarDropdown/>
                        </div>
                        <div className="lang d-flex align-items-center px-2">
                            <div className="header-bar d-lg-none false">
                              <span></span>
                              <span></span>
                              <span></span>
                              </div>
                        </div>
                    </div>
      
    </>
  )
}
