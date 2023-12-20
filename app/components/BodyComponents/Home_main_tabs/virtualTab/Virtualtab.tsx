import React, { useState } from 'react'
import { FaLock, FaStar, FaBasketballBall } from "react-icons/fa";
import { IoFootball, IoTennisball, IoGolfSharp } from "react-icons/io5";
import TrendingNow from '../tab1/trendingNow';
import VirtualLeague from './virtualLeague';
import Ongoing from './ongoing';
import VirtualResults from './virtualResults';
interface Virtualtabprops {
    selectedTab: string
}
export default function Virtualtab({ selectedTab }: Virtualtabprops) {
    const [virtualSelectedTab, setVirtualSelectedTab] = useState('matches');
    const [mainSelectedTabs, setMainSelectedTabs] = useState("football");
    const handlevirtualTabClick = (tabName: string) => {
        setVirtualSelectedTab(tabName);
    };

    const handleMainvirtualTabClick = (tabName: string) => {
        setMainSelectedTabs(tabName);
    };
    const className = selectedTab === 'virtual' ? 'tab-pane mt__30 text-white fade show active' : 'tab-pane text-white fade';
    return (
        <>
            <div className={className} id="mainTab12" role="tabpanel" >
                <div className="main__body__wrap left__right__space pb-60">
                    <div className="virtual__tabs">
                        <ul className="nav nav-pills mb-3" id="pills-tabsports"
                            role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className={`nav-link ${mainSelectedTabs === 'football' ? 'active' : ''}`} onClick={() => handleMainvirtualTabClick('football')} data-bs-toggle="pill"
                                    data-bs-target="#virtualfoot1" type="button" role="tab" aria-selected="true">
                                    <span className="icon"><IoFootball /></span><span>Football</span>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className={`nav-link ${mainSelectedTabs === 'basketball' ? 'active' : ''}`}
                                    onClick={() => handleMainvirtualTabClick('basketball')} data-bs-toggle="pill"
                                    data-bs-target="#virtualfoot2" type="button" role="tab" aria-selected="false">
                                    <span className="icon"><FaBasketballBall /></span><span>Basketball</span>
                                </button>
                            </li>

                        </ul>
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                        <div className={`tab-pane fade ${mainSelectedTabs === 'football' ? 'active show' : ''}`} id="virtualfoot1" role="tabpanel" aria-labelledby="virtualfoot1">
                            <div className="world__cup__area">
                                <div className="world__tabs">
                                    <ul className="nav nav-pills mb-3" id="pills-tabworld"
                                        role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className={`nav-link ${virtualSelectedTab === 'matches' ? 'active' : ''}`} onClick={() => handlevirtualTabClick('matches')} data-bs-toggle="pill" data-bs-target="#worlds1" type="button"
                                                role="tab" aria-selected="true"><span>Sports Virtual League

                                                </span>
                                            </button></li>
                                        <li className="nav-item" role="presentation">
                                            <button className={`nav-link ${virtualSelectedTab === 'inplay' ? 'active' : ''}`} onClick={() => handlevirtualTabClick('inplay')} data-bs-toggle="pill" data-bs-target="#worlds2" type="button"
                                                role="tab" aria-selected="false"><span>In Play Games</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className={`nav-link ${virtualSelectedTab === 'results' ? 'active' : ''}`} onClick={() => handlevirtualTabClick('results')} data-bs-toggle="pill" data-bs-target="#worlds3" type="button"
                                                role="tab" aria-selected="false"><span>Results</span>
                                            </button>
                                        </li>

                                    </ul>
                                </div>
                                <div className="tab-content" id="pills-tabContentworldsss100">
                                    <div className={`tab-pane fade ${virtualSelectedTab === 'matches' ? 'active show' : ''}`} id="worlds1"
                                        role="tabpanel" aria-labelledby="worlds1"
                                    >
                                        <VirtualLeague />
                                    </div>

                                </div>
                                <div className={`tab-pane fade ${virtualSelectedTab === 'inplay' ? 'active show' : ''}`} id="worlds2" role="tabpanel" aria-labelledby="worlds2"
                                >
                                    <Ongoing />
                                </div>
                                <div className={`tab-pane fade ${virtualSelectedTab === 'results' ? 'active show' : ''}`} id="worlds3"
                                    role="tabpanel" aria-labelledby="worlds3" >
                                    <VirtualResults />
                                </div>
                            </div>

                        </div>
                        <div className={`tab-pane fade ${mainSelectedTabs === 'basketball' ? 'active show' : ''}`} id="virtualfoot1" role="tabpanel" aria-labelledby="virtualfoot1">
                            <div className="virtuals__ongoing__empty empty">
                                <span className="empty__message">Season Basketball is not yet available, please come back later</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
