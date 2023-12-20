"use client"
import React, { useState } from 'react'
import { FaAngleDown,FaFutbol,FaTableTennis,FaVolleyballBall } from "react-icons/fa";
import { BiTennisBall,BiBasketball } from "react-icons/bi";
import { TbPlayHandball } from "react-icons/tb";


export default function Left_side_events() {
    const [isShown, setIsShown] = useState(true);
    const [IsShownTwo, setIsShownTwo] = useState(false);

  const toggleShowClass = () => {
    setIsShown(!isShown);
    setIsShownTwo(!IsShownTwo);
  };
   
  return (
    <>
      <div className="col-xxl-2 col-xl-3 col-lg-3">
                                           
                                            <div className="popular__events__left display991">
                                                <div className="popular__events__head">
                                                    <h5>Popular events</h5>
                                                    <ul>
                                                        <li><span><img alt="img" loading="lazy" width="30" height="30"
                                                                    decoding="async" data-nimg="1"
                                                                    style={{ color: 'transparent' }}
                                                                    srcSet="/img/epl.png"
                                                                    src="/img/epl.png" /></span><span>Premier League|England</span></li>
                                                        <li><span>
                                                            <img alt="img" loading="lazy" width="30" height="30"
                                                                    decoding="async" data-nimg="1"
                                                                    style={{ color: 'transparent' }}
                                                                    srcSet="/img/europa.png"
                                                                    src="/img/europa.png" /></span><span>UEFA Europa League</span></li>
                                                    </ul>
                                                </div>
                                                <div className="star__wrap"><span><img alt="img" loading="lazy" width="30"
                                                            height="30" decoding="async" data-nimg="1"
                                                            style={{ color: 'transparent' }}
                                                            srcSet="/start.png"
                                                            src="/start.png" /></span><span>Favorites</span>
                                                </div>
                                                <div className="prematch__wrap">
                                                    <div className="nav" id="nav-tabpre" role="tablist">
                                                        <button
                                                            className={`nav-link ${isShown ? 'active' : ''}`} id="nav-home-tabpre"
                                                            data-bs-toggle="tab" data-bs-target="#nav-homepre"
                                                            type="button" role="tab" aria-controls="nav-homepre"
                                                            aria-selected="true" onClick={toggleShowClass}>Live
                                                        </button>
                                                        <button className={`nav-link ${IsShownTwo ? 'active' : ''}`}
                                                            id="nav-profile-tabpre" data-bs-toggle="tab"
                                                            data-bs-target="#nav-profilepre" type="button" role="tab"
                                                            aria-controls="nav-profilepre"
                                                            aria-selected="false" onClick={toggleShowClass}>Prematch
                                                        </button>
                                                    </div>
                                                    <div className="tab-content" id="nav-tabContentpre"> 
                                                        <div className={`tab-pane fade text-white ${isShown ? 'show active' : ''}`}
                                                            id="nav-homepre" role="tabpanel"
                                                            aria-labelledby="nav-home-tabpre" >
                                                            <div className="prematch__scopre"><a className="prescore__items"
                                                                    href="#pre">
                                                                    <div className="prescore__left"><span><FaFutbol/></span><span
                                                                            className="score">Soccer</span></div>
                                                                    <div className="prescore__right"><span>2</span><span><FaAngleDown/></span>
                                                                    </div>
                                                                </a><a className="prescore__items" href="#pre">
                                                                    <div className="prescore__left"><span><BiTennisBall/></span><span
                                                                            className="score">Tennis</span></div>
                                                                    <div className="prescore__right"><span>4</span><span><FaAngleDown/></span>
                                                                    </div>
                                                                </a><a className="prescore__items" href="#pre">
                                                                    <div className="prescore__left"><span><BiBasketball/></span><span
                                                                            className="score">Basketball</span></div>
                                                                    <div className="prescore__right"><span>4</span><span><FaAngleDown/></span>
                                                                    </div>
                                                                </a><a className="prescore__items" href="#pre">
                                                                    <div className="prescore__left"><span><FaTableTennis/></span><span
                                                                            className="score">Table Tennis</span></div>
                                                                    <div className="prescore__right"><span>8</span><span><FaAngleDown/></span>
                                                                    </div>
                                                                </a><a className="prescore__items" href="#pre">
                                                                    <div className="prescore__left"><span><FaVolleyballBall/></span><span
                                                                            className="score">Volleyball</span></div>
                                                                    <div className="prescore__right"><span>2</span><span><FaAngleDown/></span>
                                                                    </div>
                                                                </a><a className="prescore__items" href="#pre">
                                                                    <div className="prescore__left"><span><TbPlayHandball/></span><span
                                                                            className="score">Handball</span></div>
                                                                    <div className="prescore__right"><span>1</span><span><FaAngleDown/></span>
                                                                    </div>
                                                                </a></div>
                                                        </div>
                                                        <div className={`tab-pane fade text-white ${IsShownTwo ? 'show active' : ''}`} id="nav-profilepre"
                                                            role="tabpanel" aria-labelledby="nav-profile-tabpre"
                                                            >
                                                            <div className="multiple__components">
                                                                <div className="prematch__scopre"><a className="prescore__items"
                                                                        href="#pre">
                                                                        <div className="prescore__left"><span><FaFutbol/></span><span
                                                                                className="score">Soccer</span></div>
                                                                        <div className="prescore__right">
                                                                            <span>4</span><span><FaAngleDown/></span>
                                                                        </div>
                                                                    </a><a className="prescore__items" href="#pre">
                                                                        <div className="prescore__left"><span><BiTennisBall/></span><span
                                                                                className="score">Tennis</span></div>
                                                                        <div className="prescore__right">
                                                                            <span>4</span><span><FaAngleDown/></span>
                                                                        </div>
                                                                    </a><a className="prescore__items" href="#pre">
                                                                        <div className="prescore__left"><span><BiBasketball/></span><span
                                                                                className="score">Basketball</span></div>
                                                                        <div className="prescore__right">
                                                                            <span>4</span><span><FaAngleDown/></span>
                                                                        </div>
                                                                    </a><a className="prescore__items" href="#pre">
                                                                        <div className="prescore__left"><span><FaTableTennis/></span><span
                                                                                className="score">Table Tennis</span></div>
                                                                        <div className="prescore__right">
                                                                            <span>8</span><span><FaAngleDown/></span>
                                                                        </div>
                                                                    </a><a className="prescore__items" href="#pre">
                                                                        <div className="prescore__left"><span><FaVolleyballBall/></span><span
                                                                                className="score">Volleyball</span></div>
                                                                        <div className="prescore__right">
                                                                            <span>2</span><span><FaAngleDown/></span>
                                                                        </div>
                                                                    </a><a className="prescore__items" href="#pre">
                                                                        <div className="prescore__left"><span><TbPlayHandball/></span><span
                                                                                className="score">Handball</span></div>
                                                                        <div className="prescore__right">
                                                                            <span>1</span><span><FaAngleDown/></span>
                                                                        </div>
                                                                    </a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    </>
  )
}
