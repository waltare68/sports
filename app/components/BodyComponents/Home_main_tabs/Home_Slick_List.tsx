import React from 'react'
interface slickListProps{
    children:React.ReactNode
}

export default function Home_Slick_List({children}:slickListProps) {
    return (
        <>
            <div
                className="match__fixing__wrap top__bottom__space left__right__space owl-theme owl-carousel">
                <div className="slick-slider slick-initialized" dir="ltr">
                    <div className="slick-list">
                        <div className="slick-track" style={{ width: '400%', left: '-100%' }}> 
                        <div data-index="-4" tabIndex={-1}
                                                                    className="slick-slide slick-cloned" aria-hidden="true"
                                                                    style={{ width: '6.25%' }}>
                                                                    <div>
                                                                        <div className="match__fixing__items" tabIndex={-1}
                                                                            style={{ width: '100%', display: 'inline-block' }}>
                                                                            <div className="match__head">
                                                                                <div className="match__head__left"><span
                                                                                        className="icons"><i
                                                                                            className="icon-football"></i></span><span>World
                                                                                        Cup 2022</span></div><span
                                                                                    className="today">Today / 22:00</span>
                                                                            </div>
                                                                            <div className="match__vs">
                                                                                <div className="match__vs__left">
                                                                                    <span>Mexico</span><span
                                                                                        className="flag"><img alt="flag"
                                                                                            loading="lazy" width="30"
                                                                                            height="30" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{ color: 'transparent' }}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmaxico.be78073b.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmaxico.be78073b.png&amp;w=64&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmaxico.be78073b.png&amp;w=64&amp;q=75" /></span>
                                                                                </div><span className="vs">Vs</span>
                                                                                <div className="match__vs__left"><span
                                                                                        className="flag"><img alt="flag"
                                                                                            loading="lazy" width="30"
                                                                                            height="30" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{ color: 'transparent' }}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpoland.445fe48c.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpoland.445fe48c.png&amp;w=64&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpoland.445fe48c.png&amp;w=64&amp;q=75" /></span><span>Poland</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="match__result"><span
                                                                                    className="matchborder"></span><span
                                                                                    className="match__text">Match
                                                                                    Reult</span></div>
                                                                            <ul className="match__point">
                                                                                <li><span>1</span><span>8.55</span></li>
                                                                                <li><span>X</span><span>9.50</span></li>
                                                                                <li><span>2</span><span>5.20</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-index="-3" tabIndex={-1}
                                                                    className="slick-slide slick-cloned" aria-hidden="true"
                                                                    style={{ width: '6.25%' }}>
                                                                    <div>
                                                                        <div className="match__fixing__items" tabIndex={-1}
                                                                            style={{ width: '100%', display: 'inline-block' }}>
                                                                            <div className="match__head">
                                                                                <div className="match__head__left"><span
                                                                                        className="icons"><i
                                                                                            className="icon-football"></i></span><span>WEFA</span>
                                                                                </div><span className="today">Tomorrow /
                                                                                    01:00</span>
                                                                            </div>
                                                                            <div className="match__vs">
                                                                                <div className="match__vs__left">
                                                                                    <span>Farense</span><span
                                                                                        className="flag"><img alt="flag"
                                                                                            loading="lazy" width="30"
                                                                                            height="30" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{ color: 'transparent' }}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffarense.3319fe8a.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffarense.3319fe8a.png&amp;w=64&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffarense.3319fe8a.png&amp;w=64&amp;q=75" /></span>
                                                                                </div><span className="vs">Vs</span>
                                                                                <div className="match__vs__left"><span
                                                                                        className="flag"><img alt="flag"
                                                                                            loading="lazy" width="30"
                                                                                            height="30" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{ color: 'transparent' }}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftenerif.a6e7e7f3.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftenerif.a6e7e7f3.png&amp;w=64&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftenerif.a6e7e7f3.png&amp;w=64&amp;q=75" /></span><span>Tenerife</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="match__result"><span
                                                                                    className="matchborder"></span><span
                                                                                    className="match__text">Match
                                                                                    Reult</span></div>
                                                                            <ul className="match__point">
                                                                                <li><span>1</span><span>1.55</span></li>
                                                                                <li><span>X</span><span>8.50</span></li>
                                                                                <li><span>2</span><span>3.20</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-index="-2" tabIndex={-1}
                                                                    className="slick-slide slick-cloned" aria-hidden="true"
                                                                    style={{ width: '6.25%' }}>
                                                                    <div>
                                                                        <div className="match__fixing__items" tabIndex={-1}
                                                                            style={{ width: '100%', display: 'inline-block' }}>
                                                                            <div className="match__head">
                                                                                <div className="match__head__left"><span
                                                                                        className="icons"><i
                                                                                            className="icon-football"></i></span><span>EFL
                                                                                        Trophy</span></div><span
                                                                                    className="today">Tomorrow /
                                                                                    01:00</span>
                                                                            </div>
                                                                            <div className="match__vs">
                                                                                <div className="match__vs__left">
                                                                                    <span>Tenerife</span><span
                                                                                        className="flag"><img alt="flag"
                                                                                            loading="lazy" width="30"
                                                                                            height="30" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{ color: 'transparent' }}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftenerif.a6e7e7f3.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftenerif.a6e7e7f3.png&amp;w=64&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftenerif.a6e7e7f3.png&amp;w=64&amp;q=75" /></span>
                                                                                </div><span className="vs">Vs</span>
                                                                                <div className="match__vs__left"><span
                                                                                        className="flag"><img alt="flag"
                                                                                            loading="lazy" width="30"
                                                                                            height="30" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{ color: 'transparent' }}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Foviedo.9be62b4a.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Foviedo.9be62b4a.png&amp;w=64&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Foviedo.9be62b4a.png&amp;w=64&amp;q=75" /></span><span>Real
                                                                                        Oviedo</span></div>
                                                                            </div>
                                                                            <div className="match__result"><span
                                                                                    className="matchborder"></span><span
                                                                                    className="match__text">Match
                                                                                    Reult</span></div>
                                                                            <ul className="match__point">
                                                                                <li><span>1</span><span>3.55</span></li>
                                                                                <li><span>X</span><span>9.50</span></li>
                                                                                <li><span>2</span><span>6.20</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-index="-1" tabIndex={-1}
                                                                    className="slick-slide slick-cloned" aria-hidden="true"
                                                                    style={{ width: '6.25%' }}>
                                                                    <div>
                                                                        <div className="match__fixing__items" tabIndex={-1}
                                                                            style={{ width: '100%', display: 'inline-block' }}>
                                                                            <div className="match__head">
                                                                                <div className="match__head__left"><span
                                                                                        className="icons"><i
                                                                                            className="icon-football"></i></span><span>World
                                                                                        Cup 2022</span></div><span
                                                                                    className="today">Today / 22:00</span>
                                                                            </div>
                                                                            <div className="match__vs">
                                                                                <div className="match__vs__left">
                                                                                    <span>Australia</span><span
                                                                                        className="flag"><img alt="flag"
                                                                                            loading="lazy" width="31"
                                                                                            height="30" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{ color: 'transparent' }}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faus.5461bb59.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faus.5461bb59.png&amp;w=64&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faus.5461bb59.png&amp;w=64&amp;q=75" /></span>
                                                                                </div><span className="vs">Vs</span>
                                                                                <div className="match__vs__left"><span
                                                                                        className="flag"><img alt="flag"
                                                                                            loading="lazy" width="31"
                                                                                            height="30" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{ color: 'transparent' }}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftunisia.df939fb8.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftunisia.df939fb8.png&amp;w=64&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftunisia.df939fb8.png&amp;w=64&amp;q=75" /></span><span>Tunisia</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="match__result"><span
                                                                                    className="matchborder"></span><span
                                                                                    className="match__text">Match
                                                                                    Reult</span></div>
                                                                            <ul className="match__point">
                                                                                <li><span>1</span><span>3.55</span></li>
                                                                                <li><span>X</span><span>4.50</span></li>
                                                                                <li><span>2</span><span>2.20</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-index="0"
                                                                    className="slick-slide slick-active slick-current"
                                                                    tabIndex={-1} aria-hidden="false"
                                                                    style={{ outline: 'none', width: '6.25%' }}>
                                                                    <div>
                                                                        <div className="match__fixing__items" tabIndex={-1}
                                                                            style={{ width: '100%', display: 'inline-block' }}>
                                                                            <div className="match__head">
                                                                                <div className="match__head__left"><span
                                                                                        className="icons"><i
                                                                                            className="icon-football"></i></span><span>World
                                                                                        Cup 2022</span></div><span
                                                                                    className="today">Today / 22:00</span>
                                                                            </div>
                                                                            <div className="match__vs">
                                                                                <div className="match__vs__left">
                                                                                    <span>Argentina</span><span
                                                                                        className="flag"><img alt="flag"
                                                                                            loading="lazy" width="30"
                                                                                            height="30" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{ color: 'transparent' }}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farjentina.75f83fef.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farjentina.75f83fef.png&amp;w=64&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farjentina.75f83fef.png&amp;w=64&amp;q=75" /></span>
                                                                                </div><span className="vs">Vs</span>
                                                                                <div className="match__vs__left"><span
                                                                                        className="flag"><img alt="flag"
                                                                                            loading="lazy" width="30"
                                                                                            height="30" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{ color: 'transparent' }}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffrance.007985fe.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffrance.007985fe.png&amp;w=64&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffrance.007985fe.png&amp;w=64&amp;q=75" /></span><span>France</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="match__result"><span
                                                                                    className="matchborder"></span><span
                                                                                    className="match__text">Match
                                                                                    Reult</span></div>
                                                                            <ul className="match__point">
                                                                                <li><span>1</span><span>8.55</span></li>
                                                                                <li><span>X</span><span>6.50</span></li>
                                                                                <li><span>2</span><span>3.20</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-index="1" className="slick-slide slick-active"
                                                                    tabIndex={-1} aria-hidden="false"
                                                                    style={{ outline: 'none', width: '6.25%' }}>
                                                                    <div>
                                                                        <div className="match__fixing__items" tabIndex={-1}
                                                                            style={{ width: '100%', display: 'inline-block' }}>
                                                                            <div className="match__head">
                                                                                <div className="match__head__left"><span
                                                                                        className="icons"><i
                                                                                            className="icon-football"></i></span><span>World
                                                                                        Cup 2022</span></div><span
                                                                                    className="today">Today / 2:00</span>
                                                                            </div>
                                                                            <div className="match__vs">
                                                                                <div className="match__vs__left">
                                                                                    <span>Poland</span><span
                                                                                        className="flag"><img alt="flag"
                                                                                            loading="lazy" width="30"
                                                                                            height="30" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{ color: 'transparent' }}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpoland.445fe48c.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpoland.445fe48c.png&amp;w=64&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpoland.445fe48c.png&amp;w=64&amp;q=75" /></span>
                                                                                </div><span className="vs">Vs</span>
                                                                                <div className="match__vs__left"><span
                                                                                        className="flag"><img alt="flag"
                                                                                            loading="lazy" width="30"
                                                                                            height="30" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{ color: 'transparent' }}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdenmark.95bdb15a.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdenmark.95bdb15a.png&amp;w=64&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdenmark.95bdb15a.png&amp;w=64&amp;q=75" /></span><span>Denmark</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="match__result"><span
                                                                                    className="matchborder"></span><span
                                                                                    className="match__text">Match
                                                                                    Reult</span></div>
                                                                            <ul className="match__point">
                                                                                <li><span>1</span><span>3.55</span></li>
                                                                                <li><span>X</span><span>4.50</span></li>
                                                                                <li><span>2</span><span>2.20</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-index="2" className="slick-slide slick-active"
                                                                    tabIndex={-1} aria-hidden="false"
                                                                    style={{ outline: 'none', width: '6.25%' }}>
                                                                    <div>
                                                                        <div className="match__fixing__items" tabIndex={-1}
                                                                            style={{ width: '100%', display: 'inline-block' }}>
                                                                            <div className="match__head">
                                                                                <div className="match__head__left"><span
                                                                                        className="icons"><i
                                                                                            className="icon-football"></i></span><span>World
                                                                                        Cup 2022</span></div><span
                                                                                    className="today">Today / 22:00</span>
                                                                            </div>
                                                                            <div className="match__vs">
                                                                                <div className="match__vs__left">
                                                                                    <span>Mexico</span><span
                                                                                        className="flag"><img alt="flag"
                                                                                            loading="lazy" width="30"
                                                                                            height="30" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{ color: 'transparent' }}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmaxico.be78073b.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmaxico.be78073b.png&amp;w=64&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmaxico.be78073b.png&amp;w=64&amp;q=75" /></span>
                                                                                </div><span className="vs">Vs</span>
                                                                                <div className="match__vs__left"><span
                                                                                        className="flag"><img alt="flag"
                                                                                            loading="lazy" width="30"
                                                                                            height="30" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{ color: 'transparent' }}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpoland.445fe48c.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpoland.445fe48c.png&amp;w=64&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpoland.445fe48c.png&amp;w=64&amp;q=75" /></span><span>Poland</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="match__result"><span
                                                                                    className="matchborder"></span><span
                                                                                    className="match__text">Match
                                                                                    Reult</span></div>
                                                                            <ul className="match__point">
                                                                                <li><span>1</span><span>8.55</span></li>
                                                                                <li><span>X</span><span>9.50</span></li>
                                                                                <li><span>2</span><span>5.20</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-index="3" className="slick-slide slick-active"
                                                                    tabIndex={-1} aria-hidden="false"
                                                                    style={{ outline: 'none', width: '6.25%' }}>
                                                                    <div>
                                                                        <div className="match__fixing__items" tabIndex={-1}
                                                                            style={{ width: '100%', display: 'inline-block' }}>
                                                                            <div className="match__head">
                                                                                <div className="match__head__left"><span
                                                                                        className="icons"><i
                                                                                            className="icon-football"></i></span><span>WEFA</span>
                                                                                </div><span className="today">Tomorrow /
                                                                                    01:00</span>
                                                                            </div>
                                                                            <div className="match__vs">
                                                                                <div className="match__vs__left">
                                                                                    <span>Farense</span><span
                                                                                        className="flag"><img alt="flag"
                                                                                            loading="lazy" width="30"
                                                                                            height="30" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{ color: 'transparent' }}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffarense.3319fe8a.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffarense.3319fe8a.png&amp;w=64&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffarense.3319fe8a.png&amp;w=64&amp;q=75" /></span>
                                                                                </div><span className="vs">Vs</span>
                                                                                <div className="match__vs__left"><span
                                                                                        className="flag"><img alt="flag"
                                                                                            loading="lazy" width="30"
                                                                                            height="30" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{ color: 'transparent' }}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftenerif.a6e7e7f3.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftenerif.a6e7e7f3.png&amp;w=64&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftenerif.a6e7e7f3.png&amp;w=64&amp;q=75" /></span><span>Tenerife</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="match__result"><span
                                                                                    className="matchborder"></span><span
                                                                                    className="match__text">Match
                                                                                    Reult</span></div>
                                                                            <ul className="match__point">
                                                                                <li><span>1</span><span>1.55</span></li>
                                                                                <li><span>X</span><span>8.50</span></li>
                                                                                <li><span>2</span><span>3.20</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-index="4" className="slick-slide" tabIndex={-1}
                                                                    aria-hidden="true" style={{ outline: 'none', width: '6.25%' }}>
                                                                    <div>
                                                                        <div className="match__fixing__items" tabIndex={-1}
                                                                            style={{ width: '100%', display: 'inline-block' }}>
                                                                            <div className="match__head">
                                                                                <div className="match__head__left"><span
                                                                                        className="icons"><i
                                                                                            className="icon-football"></i></span><span>EFL
                                                                                        Trophy</span></div><span
                                                                                    className="today">Tomorrow /
                                                                                    01:00</span>
                                                                            </div>
                                                                            <div className="match__vs">
                                                                                <div className="match__vs__left">
                                                                                    <span>Tenerife</span><span
                                                                                        className="flag"><img alt="flag"
                                                                                            loading="lazy" width="30"
                                                                                            height="30" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{ color: 'transparent' }}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftenerif.a6e7e7f3.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftenerif.a6e7e7f3.png&amp;w=64&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftenerif.a6e7e7f3.png&amp;w=64&amp;q=75" /></span>
                                                                                </div><span className="vs">Vs</span>
                                                                                <div className="match__vs__left"><span
                                                                                        className="flag"><img alt="flag"
                                                                                            loading="lazy" width="30"
                                                                                            height="30" decoding="async"
                                                                                            data-nimg="1"
                                                                                            style={{ color: 'transparent' }}
                                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Foviedo.9be62b4a.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Foviedo.9be62b4a.png&amp;w=64&amp;q=75 2x"
                                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Foviedo.9be62b4a.png&amp;w=64&amp;q=75" /></span><span>Real
                                                                                        Oviedo</span></div>
                                                                            </div>
                                                                            <div className="match__result"><span
                                                                                    className="matchborder"></span><span
                                                                                    className="match__text">Match
                                                                                    Reult</span></div>
                                                                            <ul className="match__point">
                                                                                <li><span>1</span><span>3.55</span></li>
                                                                                <li><span>X</span><span>9.50</span></li>
                                                                                <li><span>2</span><span>6.20</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
