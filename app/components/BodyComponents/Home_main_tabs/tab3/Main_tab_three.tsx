import React from 'react'
interface Tabprops {
    selectedTab: string
}
export default function Main_tab_three({ selectedTab }: Tabprops) {
    const className = selectedTab === 'live' ? 'tab-pane text-white fade show active' : 'tab-pane text-white fade';

  return (
    <>
        <div className={className} id="mainTab3" role="tabpanel"
                                                >
                                                <div className="main__body__wrap left__right__space pb-60">
                                                    <div className="today__body mt__30">
                                                        <div className="tody__tab">
                                                            <ul className="nav nav-tabs" id="todaytab" role="tablist">
                                                                <li><i className="fas fa-chevron-left"></i></li>
                                                                <li className="nav-item" role="presentation"><button
                                                                        className="nav-link active" data-bs-toggle="tab"
                                                                        data-bs-target="#todaytab1" type="button"
                                                                        role="tab" aria-selected="true"><span
                                                                            className="icons"><i
                                                                                className="icon-calender"></i></span><span>Calendar</span></button>
                                                                </li>
                                                                <li className="nav-item" role="presentation"><button
                                                                        className="nav-link" data-bs-toggle="tab"
                                                                        data-bs-target="#todaytab2" type="button"
                                                                        role="tab" aria-controls="todaytab2"
                                                                        aria-selected="false"><span className="icons"><i
                                                                                className="icon-clock"></i></span><span>Today</span></button>
                                                                </li>
                                                                <li className="nav-item" role="presentation"><button
                                                                        className="nav-link" data-bs-toggle="tab"
                                                                        data-bs-target="#todaytab3" type="button"
                                                                        role="tab" aria-controls="todaytab3"
                                                                        aria-selected="false"><span className="icons"><i
                                                                                className="icon-clock"></i></span><span>Robot
                                                                            Check</span></button></li>
                                                                <li className="nav-item" role="presentation"><button
                                                                        className="nav-link" data-bs-toggle="tab"
                                                                        data-bs-target="#todaytab4" type="button"
                                                                        role="tab" aria-controls="todaytab4"
                                                                        aria-selected="false"><span className="icons"><i
                                                                                className="icon-clock"></i></span><span>Live
                                                                            Check</span></button></li>
                                                            </ul>
                                                        </div>
                                                        <div className="tab-content" id="myTabContenttoday">
                                                            <div className="tab-pane fade show active" id="todaytab1"
                                                                role="tabpanel" aria-labelledby="todaytab1"
                                                                ><a className="home__box"
                                                                    href="URL:void(0)"><span className="icons"><i
                                                                            className="icon-home"></i></span><span>Home</span></a>
                                                                <h5 className="tspot__title">Top Sports</h5>
                                                                <div className="row mb-4">
                                                                    <div className="col-xl-6 col-lg-6">
                                                                        <div className="topsport__wrap"><a
                                                                                className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-football"></i></span><span>Football</span>
                                                                                </div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-basketball"></i></span><span>Basketball</span>
                                                                                </div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-volly"></i></span><span>Vollyball</span>
                                                                                </div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a></div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6">
                                                                        <div className="topsport__wrap"><a
                                                                                className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-tennis"></i></span><span>Tennis</span>
                                                                                </div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-icehockey"></i></span><span>Ice
                                                                                        Hockey</span></div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-ttennis"></i></span><span>Table
                                                                                        Tennis</span></div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a></div>
                                                                    </div>
                                                                </div>
                                                                <h5 className="tspot__title">Sports</h5>
                                                                <div className="row">
                                                                    <div className="col-xl-6 col-lg-6">
                                                                        <div className="topsport__wrap"><a
                                                                                className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-afootball"></i></span><span>American
                                                                                        Football Virtual</span></div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-cricket"></i></span><span>Cricket</span>
                                                                                </div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-football"></i></span><span>Football
                                                                                        Virtual</span></div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-tennis"></i></span><span>Tennis
                                                                                        Virtual</span></div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a></div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6">
                                                                        <div className="topsport__wrap"><a
                                                                                className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-basketball"></i></span><span>Basketball
                                                                                        Virtual</span></div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-darts"></i></span><span>Darts</span>
                                                                                </div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-horse"></i></span><span>Horse
                                                                                        Racing</span></div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="todaytab2" role="tabpanel"
                                                                aria-labelledby="todaytab2" ><a
                                                                    className="home__box" href="URL:void(0)"><span
                                                                        className="icons"><i
                                                                            className="icon-home"></i></span><span>Home</span></a>
                                                                <h5 className="tspot__title">Top Sports</h5>
                                                                <div className="row mb-4">
                                                                    <div className="col-xl-6 col-lg-6">
                                                                        <div className="topsport__wrap"><a
                                                                                className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-football"></i></span><span>Football</span>
                                                                                </div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-basketball"></i></span><span>Basketball</span>
                                                                                </div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-volly"></i></span><span>Vollyball</span>
                                                                                </div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a></div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6">
                                                                        <div className="topsport__wrap"><a
                                                                                className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-tennis"></i></span><span>Tennis</span>
                                                                                </div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-icehockey"></i></span><span>Ice
                                                                                        Hockey</span></div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-ttennis"></i></span><span>Table
                                                                                        Tennis</span></div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a></div>
                                                                    </div>
                                                                </div>
                                                                <h5 className="tspot__title">Sports</h5>
                                                                <div className="row">
                                                                    <div className="col-xl-6 col-lg-6">
                                                                        <div className="topsport__wrap"><a
                                                                                className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-afootball"></i></span><span>American
                                                                                        Football Virtual</span></div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-cricket"></i></span><span>Cricket</span>
                                                                                </div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-football"></i></span><span>Football
                                                                                        Virtual</span></div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-tennis"></i></span><span>Tennis
                                                                                        Virtual</span></div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a></div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6">
                                                                        <div className="topsport__wrap"><a
                                                                                className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-basketball"></i></span><span>Basketball
                                                                                        Virtual</span></div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-darts"></i></span><span>Darts</span>
                                                                                </div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span
                                                                                        className="icons"><i
                                                                                            className="icon-horse"></i></span><span>Horse
                                                                                        Racing</span></div>
                                                                                <div className="ssportright"><i
                                                                                        className="fas fa-chevron-right"></i>
                                                                                </div>
                                                                            </a></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="todaytab3" role="tabpanel"
                                                                aria-labelledby="todaytab3" >
                                                                <div className="robot__wrap">
                                                                    <form
                                                                        action="https://api.form-data.com/f/bqtxth46icif4r4ot1p5qn"
                                                                        method="post">
                                                                        <div className="g-recaptcha"
                                                                            data-sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR">
                                                                        </div>
                                                                        <div className="left__capcha"><input type="number"
                                                                                placeholder="Enter your bet slip number" /><button
                                                                                className="cmn--btn"
                                                                                type="submit"><span>Check</span></button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div className="robot__content">
                                                                    <p>Bet slip number is shown in the bet history
                                                                        section of the user account.</p>
                                                                    <div className="robot__inner">
                                                                        <div className="robot__content__wrap">
                                                                            <div className="robot__content__items"><span
                                                                                    className="ttext">№ 953340653</span>
                                                                                <h6>from 01.01.2016 | 12:00</h6>
                                                                            </div>
                                                                            <div className="robot__content__items"><span
                                                                                    className="ttext">ENGLAND. PREMIER
                                                                                    LEAGUE</span>
                                                                                <h6>Burnley F.C. - Hull City A.F.C.</h6>
                                                                            </div>
                                                                            <div className="robot__content__items"><span
                                                                                    className="ttext">BET TYPE</span>
                                                                                <h6>Single bet</h6>
                                                                            </div>
                                                                            <div className="robot__content__items"><span
                                                                                    className="ttext">BET SLIP STATUS</span>
                                                                                <h6>Win</h6>
                                                                            </div>
                                                                            <div className="robot__content__items"><a
                                                                                    className="point"
                                                                                    href="URL:void(0)">8.50</a></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="todaytab4" role="tabpanel"
                                                                aria-labelledby="todaytab4" >
                                                                <div className="row mb-4">
                                                                    <div className="col-xl-6 col-lg-6">
                                                                        <div className="topsport__wrap"><a
                                                                                className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft">
                                                                                    <span>Live</span></div>
                                                                                <div className="ssportright">
                                                                                    <span>10</span><span><i
                                                                                            className="fas fa-chevron-right"></i></span>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft">
                                                                                    <span>Starting in 60&#x27;</span>
                                                                                </div>
                                                                                <div className="ssportright">
                                                                                    <span>15</span><span><i
                                                                                            className="fas fa-chevron-right"></i></span>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft">
                                                                                    <span>Today</span></div>
                                                                                <div className="ssportright">
                                                                                    <span>33</span><span><i
                                                                                            className="fas fa-chevron-right"></i></span>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft">
                                                                                    <span>08/12/2022</span></div>
                                                                                <div className="ssportright">
                                                                                    <span>20</span><span><i
                                                                                            className="fas fa-chevron-right"></i></span>
                                                                                </div>
                                                                            </a></div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6">
                                                                        <div className="topsport__wrap"><a
                                                                                className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft">
                                                                                    <span>Tennis</span></div>
                                                                                <div className="ssportright"><span>5
                                                                                    </span><span><i
                                                                                            className="fas fa-chevron-right"></i></span>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft"><span>Ice
                                                                                        Hockey</span></div>
                                                                                <div className="ssportright">
                                                                                    <span>1</span><span><i
                                                                                            className="fas fa-chevron-right"></i></span>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft">
                                                                                    <span>Table Tennis</span></div>
                                                                                <div className="ssportright">
                                                                                    <span>50</span><span><i
                                                                                            className="fas fa-chevron-right"></i></span>
                                                                                </div>
                                                                            </a><a className="tsport__items"
                                                                                href="URL:void(0)">
                                                                                <div className="tsport__itemsleft">
                                                                                    <span>Table Tennis</span></div>
                                                                                <div className="ssportright">
                                                                                    <span>60</span><span><i
                                                                                            className="fas fa-chevron-right"></i></span>
                                                                                </div>
                                                                            </a></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <footer
                                                    className="footer__section main__footer__section media991__pb60 pt-60">
                                                    <div className="container-fluid p-0">
                                                        <div className="footer__top pb-60">
                                                            <div className="row g-5">
                                                                <div className="col-xxl-2 col-xl-4 col-lg-4 col-md-4 col-sm-4 wow fadeInUp"
                                                                    data-wow-delay="0.9s">
                                                                    <div className="widget__items">
                                                                        <div className="footer-head">
                                                                            <h3 className="title">General Info</h3>
                                                                        </div>
                                                                        <div className="content-area">
                                                                            <ul className="quick-link">
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />About
                                                                                        Us</a></li>
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Contact
                                                                                        Us</a></li>
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />
                                                                                        Faq</a></li>
                                                                                <li><a href="/"><img alt="angle"
                                                                                            loading="lazy" width="17"
                                                                                            height="17" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Sports</a>
                                                                                </li>
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Sportsbook</a>
                                                                                </li>
                                                                                <li><a href="livecasino.html"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Live
                                                                                        Betting</a></li>
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Virtuals</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-2 col-xl-4 col-lg-4 col-md-4 col-sm-4 wow fadeInUp"
                                                                    data-wow-delay="0.7s">
                                                                    <div className="widget__items">
                                                                        <div className="footer-head">
                                                                            <h3 className="title">Casino</h3>
                                                                        </div>
                                                                        <div className="content-area">
                                                                            <ul className="quick-link">
                                                                                <li><a href="casino.html"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />
                                                                                        Top</a></li>
                                                                                <li><a href="casino.html"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />
                                                                                        New</a></li>
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Popular</a>
                                                                                </li>
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Slots</a>
                                                                                </li>
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Table
                                                                                        Games</a></li>
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Jackpots</a>
                                                                                </li>
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Live
                                                                                        Casino</a></li>
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />
                                                                                        All Games</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-2 col-xl-4 col-lg-4 col-md-4 col-sm-4 wow fadeInUp"
                                                                    data-wow-delay="0.5s">
                                                                    <div className="widget__items">
                                                                        <div className="footer-head">
                                                                            <h3 className="title">Live Casino</h3>
                                                                        </div>
                                                                        <div className="content-area">
                                                                            <ul className="quick-link">
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />
                                                                                        Top Reted</a></li>
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Club
                                                                                        Royale</a></li>
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Roulette</a>
                                                                                </li>
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Blackjack</a>
                                                                                </li>
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Games
                                                                                        Shows</a></li>
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Baccarat
                                                                                        &amp; Dice</a></li>
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Poker</a>
                                                                                </li>
                                                                                <li><a href="livecasino.html"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />
                                                                                        All Live Casino</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-sm-4 wow fadeInUp"
                                                                    data-wow-delay="0.2s">
                                                                    <div className="widget__items">
                                                                        <div className="footer-head">
                                                                            <h3 className="title">Promotions</h3>
                                                                        </div>
                                                                        <div className="content-area">
                                                                            <ul className="quick-link">
                                                                                <li><a href="promotions.html"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Casino
                                                                                        Promotions</a></li>
                                                                                <li><a href="/"><img alt="angle"
                                                                                            loading="lazy" width="17"
                                                                                            height="17" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Sport
                                                                                        Promotions</a></li>
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Tournaments</a>
                                                                                </li>
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Achevements</a>
                                                                                </li>
                                                                                <li><a href="bonuses.html"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Bonus
                                                                                        Shop</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-sm-4 wow fadeInUp"
                                                                    data-wow-delay="0.2s">
                                                                    <div className="widget__items">
                                                                        <div className="footer-head">
                                                                            <h3 className="title">Help</h3>
                                                                        </div>
                                                                        <div className="content-area">
                                                                            <ul className="quick-link">
                                                                                <li><a href="URL:void(0)"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Help</a>
                                                                                </li>
                                                                                <li><a href="betslipcheck.html"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />
                                                                                        Bet Slip Check</a></li>
                                                                                <li><a href="deposit.html"><img
                                                                                            alt="angle" loading="lazy"
                                                                                            width="17" height="17"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Deposites
                                                                                        / Withdrwals</a></li>
                                                                                <li><a href="/"><img alt="angle"
                                                                                            loading="lazy" width="17"
                                                                                            height="17" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Sports
                                                                                        Results</a></li>
                                                                                <li><a href="/"><img alt="angle"
                                                                                            loading="lazy" width="17"
                                                                                            height="17" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frightarrow.64019636.png&amp;w=48&amp;q=75" />Sports
                                                                                        Stats</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="footer__sponsor owl-theme owl-carousel">
                                                            <div className="slick-slider slick-initialized" dir="ltr">
                                                                <div className="slick-list">
                                                                    <div className="slick-track"
                                                                        style={{width:'322.23%',left:'-100%'}}>
                                                                        <div data-index="-9" tabIndex={-1}
                                                                            className="slick-slide slick-cloned"
                                                                            aria-hidden="true"
                                                                            style={{ width:'3.44828%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="83" height="29"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs3.6119a126.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs3.6119a126.png&amp;w=256&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs3.6119a126.png&amp;w=256&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="-8" tabIndex={-1}
                                                                            className="slick-slide slick-cloned"
                                                                            aria-hidden="true"
                                                                            style={{ width:'3.44828%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="51" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs4.8add35d1.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs4.8add35d1.png&amp;w=128&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs4.8add35d1.png&amp;w=128&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="-7" tabIndex={-1}
                                                                            className="slick-slide slick-cloned"
                                                                            aria-hidden="true"
                                                                            style={{ width:'3.44828%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="181" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs5.eec594d1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs5.eec594d1.png&amp;w=384&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs5.eec594d1.png&amp;w=384&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="-6" tabIndex={-1}
                                                                            className="slick-slide slick-cloned"
                                                                            aria-hidden="true"
                                                                            style={{ width:'3.44828%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="118" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs6.bebb56b4.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs6.bebb56b4.png&amp;w=256&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs6.bebb56b4.png&amp;w=256&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="-5" tabIndex={-1}
                                                                            className="slick-slide slick-cloned"
                                                                            aria-hidden="true"
                                                                            style={{ width:'3.44828%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="179" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs7.2787a7e0.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs7.2787a7e0.png&amp;w=384&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs7.2787a7e0.png&amp;w=384&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="-4" tabIndex={-1}
                                                                            className="slick-slide slick-cloned"
                                                                            aria-hidden="true"
                                                                            style={{ width:'3.44828%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="121" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs8.467915b4.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs8.467915b4.png&amp;w=256&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs8.467915b4.png&amp;w=256&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="-3" tabIndex={-1}
                                                                            className="slick-slide slick-cloned"
                                                                            aria-hidden="true"
                                                                            style={{ width:'3.44828%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="88" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs9.f09f7f87.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs9.f09f7f87.png&amp;w=256&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs9.f09f7f87.png&amp;w=256&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="-2" tabIndex={-1}
                                                                            className="slick-slide slick-cloned"
                                                                            aria-hidden="true"
                                                                            style={{ width:'3.44828%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="67" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs10.fdf4c581.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs10.fdf4c581.png&amp;w=256&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs10.fdf4c581.png&amp;w=256&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="-1" tabIndex={-1}
                                                                            className="slick-slide slick-cloned"
                                                                            aria-hidden="true"
                                                                            style={{ width:'3.44828%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="95" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs12.be2903b5.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs12.be2903b5.png&amp;w=256&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs12.be2903b5.png&amp;w=256&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="0"
                                                                            className="slick-slide slick-active slick-current"
                                                                            tabIndex={-1} aria-hidden="false"
                                                                            style={{outline:'none',width:'3.448276%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="105" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs1.eb5c8cd4.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs1.eb5c8cd4.png&amp;w=256&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs1.eb5c8cd4.png&amp;w=256&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="1"
                                                                            className="slick-slide slick-active"
                                                                            tabIndex={-1} aria-hidden="false"
                                                                            style={{outline:'none',width:'3.448276%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="83" height="29"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs3.6119a126.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs3.6119a126.png&amp;w=256&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs3.6119a126.png&amp;w=256&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="2"
                                                                            className="slick-slide slick-active"
                                                                            tabIndex={-1} aria-hidden="false"
                                                                            style={{outline:'none',width:'3.448276%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="51" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs4.8add35d1.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs4.8add35d1.png&amp;w=128&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs4.8add35d1.png&amp;w=128&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="3"
                                                                            className="slick-slide slick-active"
                                                                            tabIndex={-1} aria-hidden="false"
                                                                            style={{outline:'none',width:'3.448276%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="181" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs5.eec594d1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs5.eec594d1.png&amp;w=384&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs5.eec594d1.png&amp;w=384&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="4"
                                                                            className="slick-slide slick-active"
                                                                            tabIndex={-1} aria-hidden="false"
                                                                            style={{outline:'none',width:'3.448276%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="118" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs6.bebb56b4.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs6.bebb56b4.png&amp;w=256&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs6.bebb56b4.png&amp;w=256&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="5"
                                                                            className="slick-slide slick-active"
                                                                            tabIndex={-1} aria-hidden="false"
                                                                            style={{outline:'none',width:'3.448276%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="179" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs7.2787a7e0.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs7.2787a7e0.png&amp;w=384&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs7.2787a7e0.png&amp;w=384&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="6"
                                                                            className="slick-slide slick-active"
                                                                            tabIndex={-1} aria-hidden="false"
                                                                            style={{outline:'none',width:'3.448276%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="121" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs8.467915b4.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs8.467915b4.png&amp;w=256&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs8.467915b4.png&amp;w=256&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="7"
                                                                            className="slick-slide slick-active"
                                                                            tabIndex={-1} aria-hidden="false"
                                                                            style={{outline:'none',width:'3.448276%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="88" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs9.f09f7f87.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs9.f09f7f87.png&amp;w=256&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs9.f09f7f87.png&amp;w=256&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="8"
                                                                            className="slick-slide slick-active"
                                                                            tabIndex={-1} aria-hidden="false"
                                                                            style={{outline:'none',width:'3.448276%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="67" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs10.fdf4c581.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs10.fdf4c581.png&amp;w=256&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs10.fdf4c581.png&amp;w=256&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="9" className="slick-slide"
                                                                            tabIndex={-1} aria-hidden="true"
                                                                            style={{outline:'none',width:'3.448276%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="95" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs12.be2903b5.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs12.be2903b5.png&amp;w=256&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs12.be2903b5.png&amp;w=256&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="10" tabIndex={-1}
                                                                            className="slick-slide slick-cloned"
                                                                            aria-hidden="true"
                                                                            style={{ width:'3.44828%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="105" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs1.eb5c8cd4.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs1.eb5c8cd4.png&amp;w=256&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs1.eb5c8cd4.png&amp;w=256&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="11" tabIndex={-1}
                                                                            className="slick-slide slick-cloned"
                                                                            aria-hidden="true"
                                                                            style={{ width:'3.44828%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="83" height="29"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs3.6119a126.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs3.6119a126.png&amp;w=256&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs3.6119a126.png&amp;w=256&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="12" tabIndex={-1}
                                                                            className="slick-slide slick-cloned"
                                                                            aria-hidden="true"
                                                                            style={{ width:'3.44828%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="51" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs4.8add35d1.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs4.8add35d1.png&amp;w=128&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs4.8add35d1.png&amp;w=128&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="13" tabIndex={-1}
                                                                            className="slick-slide slick-cloned"
                                                                            aria-hidden="true"
                                                                            style={{ width:'3.44828%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="181" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs5.eec594d1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs5.eec594d1.png&amp;w=384&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs5.eec594d1.png&amp;w=384&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="14" tabIndex={-1}
                                                                            className="slick-slide slick-cloned"
                                                                            aria-hidden="true"
                                                                            style={{ width:'3.44828%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="118" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs6.bebb56b4.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs6.bebb56b4.png&amp;w=256&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs6.bebb56b4.png&amp;w=256&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="15" tabIndex={-1}
                                                                            className="slick-slide slick-cloned"
                                                                            aria-hidden="true"
                                                                            style={{ width:'3.44828%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="179" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs7.2787a7e0.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs7.2787a7e0.png&amp;w=384&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs7.2787a7e0.png&amp;w=384&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="16" tabIndex={-1}
                                                                            className="slick-slide slick-cloned"
                                                                            aria-hidden="true"
                                                                            style={{ width:'3.44828%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="121" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs8.467915b4.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs8.467915b4.png&amp;w=256&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs8.467915b4.png&amp;w=256&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="17" tabIndex={-1}
                                                                            className="slick-slide slick-cloned"
                                                                            aria-hidden="true"
                                                                            style={{ width:'3.44828%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="88" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs9.f09f7f87.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs9.f09f7f87.png&amp;w=256&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs9.f09f7f87.png&amp;w=256&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="18" tabIndex={-1}
                                                                            className="slick-slide slick-cloned"
                                                                            aria-hidden="true"
                                                                            style={{ width:'3.44828%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="67" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs10.fdf4c581.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs10.fdf4c581.png&amp;w=256&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs10.fdf4c581.png&amp;w=256&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div data-index="19" tabIndex={-1}
                                                                            className="slick-slide slick-cloned"
                                                                            aria-hidden="true"
                                                                            style={{ width:'3.44828%'}}>
                                                                            <div>
                                                                                <div className="footer__sponsor__items"
                                                                                    tabIndex={-1}
                                                                                    style={{ width:'100%',display:'inline-block'}}>
                                                                                    <a href="URL:void(0)"><img
                                                                                            alt="simg" loading="lazy"
                                                                                            width="95" height="31"
                                                                                            decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{color:'transparent'}}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs12.be2903b5.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs12.be2903b5.png&amp;w=256&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs12.be2903b5.png&amp;w=256&amp;q=75" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="footer__bottom">
                                                            <p>Copyright © 2023<a className="text--base" href="URL:void(0)">
                                                                    SportOdds</a> - All Right Reserved
                                                            </p>
                                                            <ul className="bottom__ling">
                                                                <li><a href="URL:void(0)">Affiliate program</a></li>
                                                                <li><a href="URL:void(0)">Terms &amp; conditions</a>
                                                                </li>
                                                                <li><a href="URL:void(0)">Bonus terms &amp;
                                                                        conditions</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </footer>
                                            </div>
      
    </>
  )
}
