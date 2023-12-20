import React, { useState } from 'react'
import { BiHome } from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import { GiSoccerField } from "react-icons/gi";
import { PiVirtualRealityLight } from "react-icons/pi";
import { FaSearch,FaStar  } from "react-icons/fa";
import { IoTennisballOutline } from "react-icons/io5";
interface TabListProps {
    selectedTab: string;
    onSelectTab: (tab: string) => void;
  }
export default function MainTab_slide({selectedTab, onSelectTab}:TabListProps) {
    
  return (
    <>
      <section className="main__tab__slide">
        <ul className="nav nav-tabs" id="myTabmain" role="tablist">
            <li className="nav-item" role="presentation">
                <button className={`nav-link ${selectedTab === 'home' ? 'active' : ''}`} id="main-tab" onClick={() => onSelectTab('home')} data-bs-toggle="tab" data-bs-target="#mainTab" type="button" role="tab" 
                        aria-selected="true"><span className="icons"><BiHome/></span><span>Home</span>
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="main-tab2" data-bs-toggle="tab"
                    data-bs-target="#mainTab2" type="button" role="tab" aria-selected="false"><MdLiveTv/><span>Live</span>
                </button>
           </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="main-tab3" data-bs-toggle="tab" data-bs-target="#mainTab3" type="button" role="tab" 
                        aria-selected="false"><span className="icons"><FcCalendar /></span><span>Today</span>
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="main-tab4" data-bs-toggle="tab" data-bs-target="#mainTab4" type="button" role="tab"
                         aria-selected="false"><span className="icons"><GiSoccerField /></span><span>Football</span>
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="main-tab5" data-bs-toggle="tab" data-bs-target="#mainTab5" type="button" role="tab" 
                        aria-selected="false"><span className="icons"><IoTennisballOutline /></span><span>Tennis</span>
                </button>
           </li>
           
            <li className="nav-item" role="presentation">
                <button className={`nav-link ${selectedTab === 'virtual' ? 'active' : ''}`} id="main-tab12" onClick={() => onSelectTab('virtual')} data-bs-toggle="tab" data-bs-target="#mainTab12" type="button" role="tab" 
                        aria-selected="false"><span className="icons"><PiVirtualRealityLight /></span><span>Virtuals</span>
                </button>
            </li>
            <li className="nav-item">
                <div className="search-button">
                        <button className="nav-link"><span className="icons">
                        <FaSearch /></span><span>Search</span>
                        </button>
                    <div className="search-popup false">
                        <div className="search-bg"></div>
                        <div className="search-form true">
                            <form action="#">
                                <div className="form"><input type="text" id="searchs"
                                        placeholder="Search Your Fovatires Game" /></div>
                            </form>
                        </div>
                    </div>
                </div>
            </li>
            <li className="nav-item" role="presentation"><button className="nav-link" id="main-tab14" data-bs-toggle="tab"
                    data-bs-target="#mainTab14" type="button" role="tab" aria-selected="false"><span className="icons"><FaStar /></span><span>Favourites</span></button></li>
        </ul>
    </section>
    </>
  )
}
