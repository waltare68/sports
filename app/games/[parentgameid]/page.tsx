import React from 'react'

export default function page() {
    return (
        <>
            <div className="main__body__wrap left__right__space pb-60">
                <div className="virtual__tabs">
                    <ul className="nav nav-pills mb-3" id="pills-tabsports"
                        role="tablist">
                        <li className="nav-item" role="presentation"><button
                            className="nav-link active" data-bs-toggle="pill"
                            data-bs-target="#virtualfoot1" type="button"
                            role="tab" aria-selected="true"><span
                                className="icon"><i
                                    className="icon-football"></i></span><span>Football</span></button>
                        </li>
                        <li className="nav-item" role="presentation"><button
                            className="nav-link" data-bs-toggle="pill"
                            data-bs-target="#virtualfoot2" type="button"
                            role="tab" aria-selected="false"><span
                                className="icon"><i
                                    className="icon-basketball"></i></span><span>Basketball</span></button>
                        </li>
                        <li className="nav-item" role="presentation"><button
                            className="nav-link" data-bs-toggle="pill"
                            data-bs-target="#virtualfoot3" type="button"
                            role="tab" aria-selected="false"><span
                                className="icon"><i
                                    className="icon-afootball"></i></span><span>American
                                        Foot..</span></button></li>
                        <li className="nav-item" role="presentation"><button
                            className="nav-link" data-bs-toggle="pill"
                            data-bs-target="#virtualfoot4" type="button"
                            role="tab" aria-selected="false"><span
                                className="icon"><i
                                    className="icon-live"></i></span></button></li>
                    </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="virtualfoot1"
                        role="tabpanel" aria-labelledby="virtualfoot1" >
                        <div className="world__cup__area">
                            <div className="world__tabs">
                                <ul className="nav nav-pills mb-3" id="pills-tabworld"
                                    role="tablist">
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link active"
                                        data-bs-toggle="pill"
                                        data-bs-target="#worlds1" type="button"
                                        role="tab"
                                        aria-selected="true"><span>World
                                            Cup</span></button></li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#worlds2" type="button"
                                        role="tab"
                                        aria-selected="false"><span>Champions
                                            Cup</span></button></li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#worlds3" type="button"
                                        role="tab"
                                        aria-selected="false"><span>Permiership</span></button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content"
                                id="pills-tabContentworldsss100">
                                <div className="tab-pane fade active show" id="worlds1"
                                    role="tabpanel" aria-labelledby="worlds1"
                                    >
                                    <div className="world__thumb__wrap">
                                        <div className="thumb"><img alt="virtuals"
                                            loading="lazy" width="925"
                                            height="500" decoding="async"
                                            data-nimg="1"
                                            style={{color: 'transparent'}}
                                            srcSet="/Fworld.jpg"
                                            src="/Fworld.jpg" /><button
                                                className="play-btn bg-transparent border-0"><img
                                                    alt="img" loading="lazy"
                                                    width="80" height="80"
                                                    decoding="async" data-nimg="1"
                                                    style={{ color: 'transparent' }}
                                                    srcSet="/Fplay.png"
                                                    src="/Fplay.png" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="worlds2"
                                    role="tabpanel" aria-labelledby="worlds2"
                                    >
                                    <div className="world__thumb__wrap">
                                        <div className="thumb"><img alt="virtuals"
                                            loading="lazy" width="915"
                                            height="500" decoding="async"
                                            data-nimg="1"
                                            style={{ color: 'transparent' }}
                                            srcSet="/Fvirtual2.jpg"
                                            src="/Fvirtual2.jpg" /><button
                                                className="play-btn bg-transparent border-0"><img
                                                    alt="img" loading="lazy"
                                                    width="80" height="80"
                                                    decoding="async" data-nimg="1"
                                                    style={{ color: 'transparent' }}
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="worlds3"
                                    role="tabpanel" aria-labelledby="worlds3"
                                    >
                                    <div className="world__thumb__wrap">
                                        <div className="thumb"><img alt="virtuals"
                                            loading="lazy" width="898"
                                            height="500" decoding="async"
                                            data-nimg="1"
                                            style={{ color: 'transparent' }}
                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual3.1d19fb52.jpg&amp;w=1080&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual3.1d19fb52.jpg&amp;w=1920&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual3.1d19fb52.jpg&amp;w=1920&amp;q=75" /><button
                                                className="play-btn bg-transparent border-0"><img
                                                    alt="img" loading="lazy"
                                                    width="80" height="80"
                                                    decoding="async" data-nimg="1"
                                                    style={{ color: 'transparent' }}
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="world__point__table">
                            <div className="world__point__tab">
                                <ul className="nav nav-pills" id="pills-pints104"
                                    role="tablist">
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pointw1104"
                                        type="button" role="tab"
                                        aria-selected="true"><span>10:44</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link active" data-bs-toggle="pill"
                                        data-bs-target="#pointw2104"
                                        type="button" role="tab"
                                        aria-selected="false"><span>10:47</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw3104"
                                        type="button" role="tab"
                                        aria-selected="false"><span>10:50</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw4104"
                                        type="button" role="tab"
                                        aria-selected="false"><span>10:53</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw5104"
                                        type="button" role="tab"
                                        aria-selected="false"><span>10:56</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw6104"
                                        type="button" role="tab"
                                        aria-selected="false"><span>10:59</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw7104"
                                        type="button" role="tab"
                                        aria-selected="false"><span>11:02</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw8104"
                                        type="button" role="tab"
                                        aria-selected="false"><span>11:05</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw9104"
                                        type="button" role="tab"
                                        aria-selected="false"><span>11:08</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw10104"
                                        type="button" role="tab"
                                        aria-selected="false"><span>11:11</span></button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="pills-tabContentpoint104">
                                <div className="tab-pane fade"
                                    id="pointw1104" role="tabpanel"
                                    aria-labelledby="pointw1104" >
                                    <div className="world__point__text"><span>United
                                        States - Wales</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                </div>
                                <div className="tab-pane fade active show" id="pointw2104"
                                    role="tabpanel" aria-labelledby="pointw2104"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Tunisia -
                                            France</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw3104"
                                    role="tabpanel" aria-labelledby="pointw3104"
                                    >
                                    <div className="world__point__text"><span>Ecuador -
                                        Senegal</span><a href="URL:void(0)">Bets
                                            closing in 3:08</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Ecuador -
                                            Senegal</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                2.40</a><a
                                                                    href="URL:void(0)">X
                                                                3.20</a><a
                                                                    href="URL:void(0)">Senegal
                                                                2.75</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                2.40</a><a
                                                                    href="URL:void(0)">4
                                                                6.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.75</a></div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Half
                                                            Time/Full Time</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a href="URL:void(0)">Ecuador
                                                                / Ecuador 3.50</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                / Draw 15.00</a><a
                                                                    href="URL:void(0)">Ecuador/Senegal
                                                                67.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">Draw
                                                                / Ecuador 6.50</a><a
                                                                    href="URL:void(0)">Draw
                                                                / Senegal 7.00</a><a
                                                                    href="URL:void(0)">Draw
                                                                / Draw 4.50</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Senegal
                                                                / Ecuador
                                                                51.00</a><a
                                                                    href="URL:void(0)">Senegal
                                                                / Draw 15.00</a><a
                                                                    href="URL:void(0)">Senegal
                                                                / Senegal 4.00</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw4104"
                                    role="tabpanel" aria-labelledby="pointw4104"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Qatar -
                                            Ecuador</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw5104"
                                    role="tabpanel" aria-labelledby="pointw5104"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Portugal -
                                            Uruguay</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw6104"
                                    role="tabpanel" aria-labelledby="pointw6104"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Netherlands
                                            - Qatar</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw104"
                                    role="tabpanel" aria-labelledby="pointw104"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Ecuador -
                                            Senegal</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw8104"
                                    role="tabpanel" aria-labelledby="pointw8104"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Wales -
                                            England</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw9104"
                                    role="tabpanel" aria-labelledby="pointw9104"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Iran -
                                            United States</span><span>Bets
                                                closing in 3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw10104"
                                    role="tabpanel" aria-labelledby="pointw10104"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Tunisia -
                                            France</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="virtualfoot2" role="tabpanel"
                        aria-labelledby="virtualfoot2" >
                        <div className="world__cup__area">
                            <div className="world__tabs">
                                <ul className="nav nav-pills mb-3" id="pills-tabbas"
                                    role="tablist">
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link active"
                                        data-bs-toggle="pill"
                                        data-bs-target="#worlds1bas"
                                        type="button" role="tab"
                                        aria-selected="true"><span>World
                                            Cup</span></button></li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#worlds2bas"
                                        type="button" role="tab"
                                        aria-selected="false"><span>Champions
                                            Cup</span></button></li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#worlds3bas"
                                        type="button" role="tab"
                                        aria-selected="false"><span>Permiership</span></button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content"
                                id="pills-tabContentworldsss101">
                                <div className="tab-pane fade active show"
                                    id="worlds1bas" role="tabpanel"
                                    aria-labelledby="worlds1bas" >
                                    <div className="world__thumb__wrap">
                                        <div className="thumb"><img alt="virtuals"
                                            loading="lazy" width="898"
                                            height="500" decoding="async"
                                            data-nimg="1"
                                            style={{ color: 'transparent' }}
                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual3.1d19fb52.jpg&amp;w=1080&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual3.1d19fb52.jpg&amp;w=1920&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual3.1d19fb52.jpg&amp;w=1920&amp;q=75" /><button
                                                className="play-btn bg-transparent border-0"><img
                                                    alt="img" loading="lazy"
                                                    width="80" height="80"
                                                    decoding="async" data-nimg="1"
                                                    style={{ color: 'transparent' }}
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="worlds2bas"
                                    role="tabpanel" aria-labelledby="worlds2bas"
                                    >
                                    <div className="world__thumb__wrap">
                                        <div className="thumb"><img alt="virtuals"
                                            loading="lazy" width="915"
                                            height="500" decoding="async"
                                            data-nimg="1"
                                            style={{ color: 'transparent' }}
                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual2.227ecd3b.jpg&amp;w=1080&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual2.227ecd3b.jpg&amp;w=1920&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual2.227ecd3b.jpg&amp;w=1920&amp;q=75" /><button
                                                className="play-btn bg-transparent border-0"><img
                                                    alt="img" loading="lazy"
                                                    width="80" height="80"
                                                    decoding="async" data-nimg="1"
                                                    style={{ color: 'transparent' }}
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="worlds3bas"
                                    role="tabpanel" aria-labelledby="worlds3bas"
                                    >
                                    <div className="world__thumb__wrap">
                                        <div className="thumb"><img alt="virtuals"
                                            loading="lazy" width="898"
                                            height="500" decoding="async"
                                            data-nimg="1"
                                            style={{ color: 'transparent' }}
                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual3.1d19fb52.jpg&amp;w=1080&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual3.1d19fb52.jpg&amp;w=1920&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual3.1d19fb52.jpg&amp;w=1920&amp;q=75" /><button
                                                className="play-btn bg-transparent border-0"><img
                                                    alt="img" loading="lazy"
                                                    width="80" height="80"
                                                    decoding="async" data-nimg="1"
                                                    style={{ color: 'transparent' }}
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="world__point__table">
                            <div className="world__point__tab">
                                <ul className="nav nav-pills" id="pills-pints101"
                                    role="tablist">
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link active"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pointw1101"
                                        type="button" role="tab"
                                        aria-selected="true"><span>10:44</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw2101"
                                        type="button" role="tab"
                                        aria-selected="false"><span>10:47</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw3101"
                                        type="button" role="tab"
                                        aria-selected="false"><span>10:50</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw4101"
                                        type="button" role="tab"
                                        aria-selected="false"><span>10:53</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw5101"
                                        type="button" role="tab"
                                        aria-selected="false"><span>10:56</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw6101"
                                        type="button" role="tab"
                                        aria-selected="false"><span>10:59</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw7101"
                                        type="button" role="tab"
                                        aria-selected="false"><span>11:02</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw8101"
                                        type="button" role="tab"
                                        aria-selected="false"><span>11:05</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw9101"
                                        type="button" role="tab"
                                        aria-selected="false"><span>11:08</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw10101"
                                        type="button" role="tab"
                                        aria-selected="false"><span>11:11</span></button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="pills-tabContentpoint101">
                                <div className="tab-pane fade active show"
                                    id="pointw1101" role="tabpanel"
                                    aria-labelledby="pointw1101" >
                                    <div className="world__point__text"><span>United
                                        States - Wales</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                </div>
                                <div className="tab-pane fade" id="pointw2101"
                                    role="tabpanel" aria-labelledby="pointw2101"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Tunisia -
                                            France</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw3101"
                                    role="tabpanel" aria-labelledby="pointw3101"
                                    >
                                    <div className="world__point__text"><span>Ecuador -
                                        Senegal</span><a href="URL:void(0)">Bets
                                            closing in 3:08</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Ecuador -
                                            Senegal</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                2.40</a><a
                                                                    href="URL:void(0)">X
                                                                3.20</a><a
                                                                    href="URL:void(0)">Senegal
                                                                2.75</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                2.40</a><a
                                                                    href="URL:void(0)">4
                                                                6.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.75</a></div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Half
                                                            Time/Full Time</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a href="URL:void(0)">Ecuador
                                                                / Ecuador 3.50</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                / Draw 15.00</a><a
                                                                    href="URL:void(0)">Ecuador/Senegal
                                                                67.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">Draw
                                                                / Ecuador 6.50</a><a
                                                                    href="URL:void(0)">Draw
                                                                / Senegal 7.00</a><a
                                                                    href="URL:void(0)">Draw
                                                                / Draw 4.50</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Senegal
                                                                / Ecuador
                                                                51.00</a><a
                                                                    href="URL:void(0)">Senegal
                                                                / Draw 15.00</a><a
                                                                    href="URL:void(0)">Senegal
                                                                / Senegal 4.00</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw4101"
                                    role="tabpanel" aria-labelledby="pointw4101"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Qatar -
                                            Ecuador</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw5101"
                                    role="tabpanel" aria-labelledby="pointw5101"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Portugal -
                                            Uruguay</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw6101"
                                    role="tabpanel" aria-labelledby="pointw6101"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Netherlands
                                            - Qatar</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw101"
                                    role="tabpanel" aria-labelledby="pointw101"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Ecuador -
                                            Senegal</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw8101"
                                    role="tabpanel" aria-labelledby="pointw8101"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Wales -
                                            England</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw9101"
                                    role="tabpanel" aria-labelledby="pointw9101"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Iran -
                                            United States</span><span>Bets
                                                closing in 3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw10101"
                                    role="tabpanel" aria-labelledby="pointw10101"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Tunisia -
                                            France</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="virtualfoot3" role="tabpanel"
                        aria-labelledby="virtualfoot3" >
                        <div className="world__cup__area">
                            <div className="world__tabs">
                                <ul className="nav nav-pills mb-3" id="pills-tabaffot"
                                    role="tablist">
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link active"
                                        data-bs-toggle="pill"
                                        data-bs-target="#worlds1afoot"
                                        type="button" role="tab"
                                        aria-selected="true"><span>World
                                            Cup</span></button></li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#worlds2afoot"
                                        type="button" role="tab"
                                        aria-selected="false"><span>Champions
                                            Cup</span></button></li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#worlds3afoot"
                                        type="button" role="tab"
                                        aria-selected="false"><span>Permiership</span></button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content"
                                id="pills-tabContentworldsss102">
                                <div className="tab-pane fade active show"
                                    id="worlds1afoot" role="tabpanel"
                                    aria-labelledby="worlds1afoot" >
                                    <div className="world__thumb__wrap">
                                        <div className="thumb"><img alt="virtuals"
                                            loading="lazy" width="915"
                                            height="500" decoding="async"
                                            data-nimg="1"
                                            style={{ color: 'transparent' }}
                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual2.227ecd3b.jpg&amp;w=1080&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual2.227ecd3b.jpg&amp;w=1920&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual2.227ecd3b.jpg&amp;w=1920&amp;q=75" /><button
                                                className="play-btn bg-transparent border-0"><img
                                                    alt="img" loading="lazy"
                                                    width="80" height="80"
                                                    decoding="async" data-nimg="1"
                                                    style={{ color: 'transparent' }}
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="worlds2afoot"
                                    role="tabpanel" aria-labelledby="worlds2afoot"
                                    >
                                    <div className="world__thumb__wrap">
                                        <div className="thumb"><img alt="virtuals"
                                            loading="lazy" width="915"
                                            height="500" decoding="async"
                                            data-nimg="1"
                                            style={{ color: 'transparent' }}
                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual2.227ecd3b.jpg&amp;w=1080&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual2.227ecd3b.jpg&amp;w=1920&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual2.227ecd3b.jpg&amp;w=1920&amp;q=75" /><button
                                                className="play-btn bg-transparent border-0"><img
                                                    alt="img" loading="lazy"
                                                    width="80" height="80"
                                                    decoding="async" data-nimg="1"
                                                    style={{ color: 'transparent' }}
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="worlds3afoot"
                                    role="tabpanel" aria-labelledby="worlds3afoot"
                                    >
                                    <div className="world__thumb__wrap">
                                        <div className="thumb"><img alt="virtuals"
                                            loading="lazy" width="898"
                                            height="500" decoding="async"
                                            data-nimg="1"
                                            style={{ color: 'transparent' }}
                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual3.1d19fb52.jpg&amp;w=1080&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual3.1d19fb52.jpg&amp;w=1920&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual3.1d19fb52.jpg&amp;w=1920&amp;q=75" /><button
                                                className="play-btn bg-transparent border-0"><img
                                                    alt="img" loading="lazy"
                                                    width="80" height="80"
                                                    decoding="async" data-nimg="1"
                                                    style={{ color: 'transparent' }}
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="world__point__table">
                            <div className="world__point__tab">
                                <ul className="nav nav-pills" id="pills-pints103"
                                    role="tablist">
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link active"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pointw1103"
                                        type="button" role="tab"
                                        aria-selected="true"><span>10:44</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw2103"
                                        type="button" role="tab"
                                        aria-selected="false"><span>10:47</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw3103"
                                        type="button" role="tab"
                                        aria-selected="false"><span>10:50</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw4103"
                                        type="button" role="tab"
                                        aria-selected="false"><span>10:53</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw5103"
                                        type="button" role="tab"
                                        aria-selected="false"><span>10:56</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw6103"
                                        type="button" role="tab"
                                        aria-selected="false"><span>10:59</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw7103"
                                        type="button" role="tab"
                                        aria-selected="false"><span>11:02</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw8103"
                                        type="button" role="tab"
                                        aria-selected="false"><span>11:05</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw9103"
                                        type="button" role="tab"
                                        aria-selected="false"><span>11:08</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation"><button
                                        className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#pointw10103"
                                        type="button" role="tab"
                                        aria-selected="false"><span>11:11</span></button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="pills-tabContentpoint103">
                                <div className="tab-pane fade active show"
                                    id="pointw1103" role="tabpanel"
                                    aria-labelledby="pointw1103" >
                                    <div className="world__point__text"><span>United
                                        States - Wales</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                </div>
                                <div className="tab-pane fade" id="pointw2103"
                                    role="tabpanel" aria-labelledby="pointw2103"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Tunisia -
                                            France</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw3103"
                                    role="tabpanel" aria-labelledby="pointw3103"
                                    >
                                    <div className="world__point__text"><span>Ecuador -
                                        Senegal</span><a href="URL:void(0)">Bets
                                            closing in 3:08</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Ecuador -
                                            Senegal</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                2.40</a><a
                                                                    href="URL:void(0)">X
                                                                3.20</a><a
                                                                    href="URL:void(0)">Senegal
                                                                2.75</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                2.40</a><a
                                                                    href="URL:void(0)">4
                                                                6.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.75</a></div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Half
                                                            Time/Full Time</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a href="URL:void(0)">Ecuador
                                                                / Ecuador 3.50</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                / Draw 15.00</a><a
                                                                    href="URL:void(0)">Ecuador/Senegal
                                                                67.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">Draw
                                                                / Ecuador 6.50</a><a
                                                                    href="URL:void(0)">Draw
                                                                / Senegal 7.00</a><a
                                                                    href="URL:void(0)">Draw
                                                                / Draw 4.50</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Senegal
                                                                / Ecuador
                                                                51.00</a><a
                                                                    href="URL:void(0)">Senegal
                                                                / Draw 15.00</a><a
                                                                    href="URL:void(0)">Senegal
                                                                / Senegal 4.00</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw4103"
                                    role="tabpanel" aria-labelledby="pointw4103"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Qatar -
                                            Ecuador</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw5103"
                                    role="tabpanel" aria-labelledby="pointw5103"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Portugal -
                                            Uruguay</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw6103"
                                    role="tabpanel" aria-labelledby="pointw6103"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Netherlands
                                            - Qatar</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw103"
                                    role="tabpanel" aria-labelledby="pointw103"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Ecuador -
                                            Senegal</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw8103"
                                    role="tabpanel" aria-labelledby="pointw8103"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Wales -
                                            England</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw9103"
                                    role="tabpanel" aria-labelledby="pointw9103"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Iran -
                                            United States</span><span>Bets
                                                closing in 3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pointw10103"
                                    role="tabpanel" aria-labelledby="pointw10103"
                                    >
                                    <div className="world__point__text">
                                        <span>Portugal-Uruguay</span><a
                                            href="URL:void(0)">Bets closed</a></div>
                                    <div className="ecuador__match__fixing">
                                        <div className="equador__head"><span>Tunisia -
                                            France</span><span>Bets closing in
                                                3:08</span></div>
                                        <div className="row g-4">
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span className="title">Match
                                                            Result</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Qatar
                                                                2.38</a><a
                                                                    href="URL:void(0)">X
                                                                3.25</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                2.80</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Total
                                                            Goals</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">0
                                                                12.00</a><a
                                                                    href="URL:void(0)">1
                                                                4.33</a><a
                                                                    href="URL:void(0)">2
                                                                3.20</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3
                                                                3.40</a><a
                                                                    href="URL:void(0)">4
                                                                5.00</a><a
                                                                    href="URL:void(0)"></a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box"><span
                                                        className="title mb__1">Match
                                                        Result and Both Teams to
                                                        Score</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">6.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Ecuador
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">3.75</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams to score
                                                                    and the match to
                                                                    end in a
                                                                    draw</span><span
                                                                        className="poin">4.50</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Both
                                                                    teams not to
                                                                    score</span><span
                                                                        className="poin">10.00</span></a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win and both
                                                                    teams to
                                                                    score</span><span
                                                                        className="poin">7.50</span></a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a className="d__box"
                                                                href="URL:void(0)"><span>Senegal
                                                                    to win to
                                                                    nil</span><span
                                                                        className="poin">4.33</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="equator__match__result">
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Correct
                                                            Score</span>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">1</a><a
                                                                    href="URL:void(0)">2</a><a
                                                                        href="URL:void(0)">3</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">1-0
                                                                7.00</a><a
                                                                    href="URL:void(0)">0-0
                                                                10.00</a><a
                                                                    href="URL:void(0)">0-1
                                                                8.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-0
                                                                11.00</a><a
                                                                    href="URL:void(0)">1-1
                                                                6.00</a><a
                                                                    href="URL:void(0)">0-2
                                                                13.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">2-1
                                                                9.00</a><a
                                                                    href="URL:void(0)">1-2
                                                                10.00</a><a
                                                                    href="URL:void(0)">2-2
                                                                15.00</a></div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a href="URL:void(0)">3-0
                                                                26.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">0-3
                                                                34.00</a></div>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">3-1
                                                                21.00</a><a
                                                                    href="URL:void(0)"></a><a
                                                                        href="URL:void(0)">1-3
                                                                26.00</a></div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span className="title">Double
                                                            Chance</span>
                                                        <div className="devaided__box">
                                                            <a href="URL:void(0)">Ecuador
                                                                or X 1.33</a><a
                                                                    href="URL:void(0)">X
                                                                or Senegal
                                                                1.44</a><a
                                                                    href="URL:void(0)">Ecuador
                                                                or Senegal 1.25</a>
                                                        </div>
                                                    </div>
                                                    <div className="match__box mb__30">
                                                        <span
                                                            className="title mb__1">Over/Under
                                                            - Total Goals</span>
                                                        <div
                                                            className="devaided__box mb__1 ">
                                                            <a
                                                                href="URL:void(0)"></a><a
                                                                    href="URL:void(0)">Over</a><a
                                                                        href="URL:void(0)">Under</a>
                                                        </div>
                                                        <div
                                                            className="devaided__box mb__1">
                                                            <a
                                                                href="URL:void(0)">0.5</a><a
                                                                    href="URL:void(0)">1.01</a><a
                                                                        href="URL:void(0)">12.00</a>
                                                        </div>
                                                        <div className="devaided__box">
                                                            <a
                                                                href="URL:void(0)">1.5</a><a
                                                                    href="URL:void(0)">1.29</a><a
                                                                        href="URL:void(0)">3.25</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="virtualfoot4" role="tabpanel"
                        aria-labelledby="virtualfoot4" >
                        <div className="virtual__video__wrap">
                            <div className="items">
                                <div className="thumb"><img alt="vrimg" loading="lazy"
                                    width="112" height="80" decoding="async"
                                    data-nimg="1" style={{ color: 'transparent' }}
                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr1.637cc95f.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr1.637cc95f.jpg&amp;w=256&amp;q=75 2x"
                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr1.637cc95f.jpg&amp;w=256&amp;q=75" /><button
                                        className="play-btn bg-transparent border-0"><img
                                            alt="img" loading="lazy" width="80"
                                            height="80" decoding="async"
                                            data-nimg="1" style={{ color: 'transparent' }}
                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75" /></button>
                                </div><span>Instant Football</span>
                            </div>
                            <div className="items">
                                <div className="thumb"><img alt="vrimg" loading="lazy"
                                    width="112" height="80" decoding="async"
                                    data-nimg="1" style={{ color: 'transparent' }}
                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr2.1a1572ae.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr2.1a1572ae.jpg&amp;w=256&amp;q=75 2x"
                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr2.1a1572ae.jpg&amp;w=256&amp;q=75" /><button
                                        className="play-btn bg-transparent border-0"><img
                                            alt="img" loading="lazy" width="80"
                                            height="80" decoding="async"
                                            data-nimg="1" style={{ color: 'transparent' }}
                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75" /></button>
                                </div><span>Instant Football</span>
                            </div>
                            <div className="items">
                                <div className="thumb"><img alt="vrimg" loading="lazy"
                                    width="112" height="80" decoding="async"
                                    data-nimg="1" style={{ color: 'transparent' }}
                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr3.2f0ee07f.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr3.2f0ee07f.jpg&amp;w=256&amp;q=75 2x"
                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr3.2f0ee07f.jpg&amp;w=256&amp;q=75" /><button
                                        className="play-btn bg-transparent border-0"><img
                                            alt="img" loading="lazy" width="80"
                                            height="80" decoding="async"
                                            data-nimg="1" style={{ color: 'transparent' }}
                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75" /></button>
                                </div><span>Instant Football</span>
                            </div>
                            <div className="items">
                                <div className="thumb"><img alt="vrimg" loading="lazy"
                                    width="112" height="80" decoding="async"
                                    data-nimg="1" style={{ color: 'transparent' }}
                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr4.a37cb1a6.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr4.a37cb1a6.jpg&amp;w=256&amp;q=75 2x"
                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr4.a37cb1a6.jpg&amp;w=256&amp;q=75" /><button
                                        className="play-btn bg-transparent border-0"><img
                                            alt="img" loading="lazy" width="80"
                                            height="80" decoding="async"
                                            data-nimg="1" style={{ color: 'transparent' }}
                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75" /></button>
                                </div><span>Instant Football</span>
                            </div>
                            <div className="items">
                                <div className="thumb"><img alt="vrimg" loading="lazy"
                                    width="112" height="80" decoding="async"
                                    data-nimg="1" style={{ color: 'transparent' }}
                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr5.b02c37e0.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr5.b02c37e0.jpg&amp;w=256&amp;q=75 2x"
                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr5.b02c37e0.jpg&amp;w=256&amp;q=75" /><button
                                        className="play-btn bg-transparent border-0"><img
                                            alt="img" loading="lazy" width="80"
                                            height="80" decoding="async"
                                            data-nimg="1" style={{ color: 'transparent' }}
                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75" /></button>
                                </div><span>Instant Football</span>
                            </div>
                            <div className="items">
                                <div className="thumb"><img alt="vrimg" loading="lazy"
                                    width="112" height="80" decoding="async"
                                    data-nimg="1" style={{ color: 'transparent' }}
                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr6.a84008e2.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr6.a84008e2.jpg&amp;w=256&amp;q=75 2x"
                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr6.a84008e2.jpg&amp;w=256&amp;q=75" /><button
                                        className="play-btn bg-transparent border-0"><img
                                            alt="img" loading="lazy" width="80"
                                            height="80" decoding="async"
                                            data-nimg="1" style={{ color: 'transparent' }}
                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75" /></button>
                                </div><span>Instant Football</span>
                            </div>
                            <div className="items">
                                <div className="thumb"><img alt="vrimg" loading="lazy"
                                    width="112" height="80" decoding="async"
                                    data-nimg="1" style={{ color: 'transparent' }}
                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr7.f7ea801a.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr7.f7ea801a.jpg&amp;w=256&amp;q=75 2x"
                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr7.f7ea801a.jpg&amp;w=256&amp;q=75" /><button
                                        className="play-btn bg-transparent border-0"><img
                                            alt="img" loading="lazy" width="80"
                                            height="80" decoding="async"
                                            data-nimg="1" style={{ color: 'transparent' }}
                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75" /></button>
                                </div><span>Instant Football</span>
                            </div>
                            <div className="items">
                                <div className="thumb"><img alt="vrimg" loading="lazy"
                                    width="112" height="80" decoding="async"
                                    data-nimg="1" style={{ color: 'transparent' }}
                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr8.eb15740d.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr8.eb15740d.jpg&amp;w=256&amp;q=75 2x"
                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr8.eb15740d.jpg&amp;w=256&amp;q=75" /><button
                                        className="play-btn bg-transparent border-0"><img
                                            alt="img" loading="lazy" width="80"
                                            height="80" decoding="async"
                                            data-nimg="1" style={{ color: 'transparent' }}
                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75" /></button>
                                </div><span>Instant Football</span>
                            </div>
                            <div className="items">
                                <div className="thumb"><img alt="vrimg" loading="lazy"
                                    width="112" height="80" decoding="async"
                                    data-nimg="1" style={{ color: 'transparent' }}
                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr9.23dd3848.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr9.23dd3848.jpg&amp;w=256&amp;q=75 2x"
                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr9.23dd3848.jpg&amp;w=256&amp;q=75" /><button
                                        className="play-btn bg-transparent border-0"><img
                                            alt="img" loading="lazy" width="80"
                                            height="80" decoding="async"
                                            data-nimg="1" style={{ color: 'transparent' }}
                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4d8d3357.png&amp;w=256&amp;q=75" /></button>
                                </div><span>Instant Football</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
