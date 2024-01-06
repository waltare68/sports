"use client"
import GameItemInfo from '@/app/components/gameinfo'
import React, { useState } from 'react'
import Link from 'next/link'

import gamesData from '../../../../data/games2023nov19.json';
import { FaLock, FaStar,FaBasketballBall } from "react-icons/fa";
import { IoFootball,IoTennisball,IoGolfSharp } from "react-icons/io5";
import { FcNext } from "react-icons/fc";
export default function TrendingNow() {
    const [activeTrendingtab,setActiveTrendingTab] = useState('football')
    const [selectedEvents, setSelectedEvents] = useState<{ [key: string]: string }>({});
    const storedEventsString = localStorage.getItem('selectedEvents');
    const storedEvents = storedEventsString ? JSON.parse(storedEventsString) : {};

    const handleEventClick = (parentMatchId: string,
        event: string,
        home_team: string,
        away_team: string,
        odds: string) => {
        setSelectedEvents((prevSelectedEvents) => ({
            ...prevSelectedEvents,
            [parentMatchId]: prevSelectedEvents[parentMatchId] === event ? '' : event,
        }));
        const storedEventDataString = localStorage.getItem('selectedEventData');
        const storedEventData = storedEventDataString ? JSON.parse(storedEventDataString) : {};
        
        
        if (storedEventData[parentMatchId] && storedEventData[parentMatchId].event === event) {
            delete storedEventData[parentMatchId];
            localStorage.setItem('selectedEventData', JSON.stringify(storedEventData));
        }
        else if(storedEventData[parentMatchId] && storedEventData[parentMatchId].event != event){
            storedEventData[parentMatchId] = {
                parentMatchId,
                event,
                home_team,
                away_team,
                odds,
              };
        }
        else{
            storedEventData[parentMatchId] = {
                parentMatchId,
                event,
                home_team,
                away_team,
                odds,
              };
        }
        
        localStorage.setItem('selectedEventData', JSON.stringify(storedEventData));
        window.dispatchEvent(new Event("storage"));

    };

    return (
        <>
            <div className="live__heightlight trending__now">
                <div className="section__title">
                    <h4>Trending Now</h4>
                </div>
                <div className="heightlight__tab">
                    <div className="nav b__bottom" id="nav-tabheighttrending" role="tablist">
                        <button onClick={() => setActiveTrendingTab('football')} className={`nav-link ${activeTrendingtab === 'football' ? 'active' : ''}`} id="lightlighttabtrend" data-bs-toggle="tab" 
                             data-bs-target="#height1trend" type="button" role="tab" aria-selected="true">
                            <span className="icons"><IoFootball/></span><span>Football</span>
                        </button>
                        <button onClick={() => setActiveTrendingTab('tennis')} className={`nav-link ${activeTrendingtab === 'tennis' ? 'active' : ''}`} id="treading1" data-bs-toggle="tab" data-bs-target="#treand2" type="button" role="tab" aria-selected="false">
                            <span className="icons"><IoTennisball/></span>
                            <span>Tennis</span></button>
                        <button onClick={() => setActiveTrendingTab('basketball')} className={`nav-link ${activeTrendingtab === 'basketball' ? 'active' : ''}`}id="treading2" data-bs-toggle="tab" data-bs-target="#treand3" type="button" role="tab" aria-selected="false">
                            <span className="icons"><FaBasketballBall/></span><span>Basketball</span></button>
                       
                        <button onClick={() => setActiveTrendingTab('golf')} className={`nav-link ${activeTrendingtab === 'golf' ? 'active' : ''}`} id="treading7" data-bs-toggle="tab" data-bs-target="#treand7" type="button" role="tab" aria-selected="false">
                            <span className="icons"><IoGolfSharp/></span><span>Golf</span></button>
                        
                    </div>
                </div>
                <div className="height__table">
                    <div className="tab-content" id="nav-tabContentheighttrending">
                        <div className={`tab-pane fade text-white ${activeTrendingtab === 'football' ? 'show active' : ''}`} id="height1trend" role="tabpanel" aria-labelledby="nav-home-tabpre">
                            <div className="main__table larg__width treanding__table">
                                <div className="section__head b__bottom">
                                    <div className="left__head">
                                        <span className="icons">
                                        <IoFootball/>
                                        </span>
                                        <span>Football</span>
                                    </div>
                                    <div className="right__catagoris">
                                        <div className="right__cate__items">
                                            <div className="selector">
                                                <button id="headlessui-listbox-button-:R368qe35rdcba:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="">
                                                    <span className="">Result 1X2</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="right__cate__items">
                                            <div className="selector">
                                                <button id="headlessui-listbox-button-:R3a8qe35rdcba:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="">
                                                    <span className="">Over/Under</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="right__cate__items">
                                            <div className="selector">
                                                <button id="headlessui-listbox-button-:R3e8qe35rdcba:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="">
                                                    <span className="">Both teams to score?</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table__wrap">
                                    <div className="table__items table__pointnone__items">
                                        <div className="t__items">
                                            <div className="t__items__left"></div>
                                        </div>
                                        <div className="mart__point__items">
                                            <a className="twing twing__right opo" href="#">
                                                <i className="icon-twer"></i>
                                            </a>
                                            <a className="mart opo" href="#">
                                                <i className="icon-pmart"></i>
                                            </a>
                                            <a className="point__box bg__none" href="#0box">1</a>
                                            <a className="point__box bg__none" href="#0box">X</a>
                                            <a className="point__box bg__none" href="#0box">2</a>
                                        </div>
                                        
                                        <div className="mart__point__two">
                                            <div className="mart__point__left">
                                                <a className="point__box bg__none" href="#">Over</a>
                                                <a className="point__box bg__none" href="#">Under</a>
                                            </div>
                                            <div className="mart__point__right">
                                                <a className="point__box bg__none" href="#">Yes</a>
                                                <a className="point__box bg__none" href="#">No</a>
                                                <a className="point__box bg__none" href="#">Fav</a>
                                            </div>
                                        </div>
                                        <div className="cart__point cart__point__two">
                                            More
                                        </div>
                                    </div>
                                    {/* <GameItemInfo /> */}
                                    {gamesData.data.competitions &&
                                        gamesData.data.competitions.map((competition) =>
                                            competition.matches &&
                                            competition.matches.map((match) => (
                                                <>
                                                   
                                                  <div key={match.parent_match_id}  className="table__items b__bottom">
                                                        <div className="t__items">
                                                            <div className="t__items__left">
                                                                <h6>{match.home_team}</h6>
                                                                <span className="text">{match.away_team}</span>
                                                                <p>
                                                                    <a className="today" href="#">{formatDateTime(match.start_time)}</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="mart__point__items">
                                                            <a className="twing twing__right" href="#">
                                                                <i className="icon-twer"></i>
                                                            </a>
                                                            <a className={`point__box ${selectedEvents[match.parent_match_id] === 'home' ? 'pointBoxSelected' : ''}`}
                                                                onClick={() => handleEventClick(match.parent_match_id, 'home', match.home_team, match.away_team, getOddsForHomeTeam(match))} href="#0box">{getOddsForHomeTeam(match)}</a>
                                                            <a className={`point__box ${selectedEvents[match.parent_match_id] === 'draw' ? 'pointBoxSelected' : ''}`}
                                                                onClick={() => handleEventClick(match.parent_match_id, 'draw', match.home_team, match.away_team, getOddsForDraw(match))} href="#0box">{getOddsForDraw(match)}</a>
                                                            <a className={`point__box ${selectedEvents[match.parent_match_id] === 'away' ? 'pointBoxSelected' : ''}`}
                                                                onClick={() => handleEventClick(match.parent_match_id, 'away', match.home_team, match.away_team, getOddsForAwayTeam(match))} href="#0box">{getOddsForAwayTeam(match)}</a>
                                                        </div>
                                                        
                                                        <div className="mart__point__two">
                                                            <div className="mart__point__left">
                                                                <a className="point__box" href="URL:void(0)">
                                                                    <FaLock />
                                                                </a>
                                                                <a className="point__box" href="URL:void(0)"><FaLock /></a>
                                                            </div>
                                                            <div className="mart__point__right">
                                                                <a className="point__box" href="URL:void(0)"><FaLock /></a>
                                                                <a className="point__box" href="URL:void(0)"><FaLock /></a>
                                                                <a className="point__box bg__none" href="URL:void(0)">
                                                                    <FaStar />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="cart__point cart__point__two">
                                                            <Link href={`/games/${match.parent_match_id}`}> <FcNext/></Link>
                                                        </div>
                                                    </div>

                                                </>
                                            ))
                                        )}

                                    <div className="table__footer"><a
                                        className="lobby text__opa"
                                        href="URL:void(0)">Open Football
                                        lobby</a><a className="footerpoing"
                                            href="URL:void(0)"><span>790</span><span><i
                                                className="fas fa-angle-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade text-white ${activeTrendingtab === 'tennis' ? 'show active' : ''}`} id="treand2"
                            role="tabpanel">
                            <div
                                className="main__table larg__width2 treanding__table main__tabletennis">
                                
                                <div className="table__wrap">
                                    <div className="table__items b__bottom">
                                        <div className="t__items">
                                            <div className="t__items__left">
                                                <h6>Unavailable at the moment</h6>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                   
                                </div>
                            </div>
                        </div>

                        <div className={`tab-pane fade text-white ${activeTrendingtab === 'basketball' ? 'show active' : ''}`} id="treand3"
                            role="tabpanel" aria-labelledby="nav-home-tabpre">
                            <div className="main__table larg__width4 treanding__table main__basketballtable">
                                
                                <div className="table__wrap">
                                    
                                    <div className="table__items b__bottom">
                                        <div className="t__items">
                                            <div className="t__items__left">
                                                <h6>Unavailable at the moment</h6>
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade text-white ${activeTrendingtab === 'golf' ? 'show active' : ''}`} id="treand7"
                            role="tabpanel" aria-labelledby="nav-home-tabpre">
                            <div
                                className="main__table larg__width6 treanding__table main__basketballtable">
                                
                                
                                <div className="table__wrap">
                                    <div className="table__items b__bottom">
                                        <div className="t__items">
                                            <div className="t__items__left">
                                                <h6>Unavailable at the moment</h6>
                                                
                                            </div>
                                        </div>
                                        
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

interface Outcome {
    sub_type_id: string;
    odd_type: string;
    outcome_id: string;
    outcome_key: string;
    outcome_name: string;
    odd_value: string;
    // ... other outcome properties
}

interface Market {
    sub_type_id: string;
    odd_type: string;
    status: string;
    outcomes: Outcome[];
}

interface Match {
    parent_match_id: string;
    home_team: string;
    away_team: string;
    start_time: string;
    markets?: Market[];
    // ... other match properties
}

interface Competition {
    competition_id: string;
    competition_name: string;
    c_binomen: string;
    match_count: string;
    country_id: string;
    country_name: string;
    sport_id: string;
    sport_name: string;
    matches?: Match[];
    // ... other competition properties
}
const getOddsForHomeTeam = (match: Match): string => {
    const homeTeamOutcome = match.markets?.[0]?.outcomes?.find(
        (outcome) => outcome.outcome_name === match.home_team
    );

    return homeTeamOutcome?.odd_value || "N/A";
};
const getOddsForDraw = (match: Match): string => {
    const drawOutcome = match.markets?.[0]?.outcomes?.find(
        (outcome) => outcome.outcome_key === "X"
    );

    return drawOutcome?.odd_value || "N/A";
};
const getOddsForAwayTeam = (match: Match): string => {
    const homeTeamOutcome = match.markets?.[0]?.outcomes?.find(
        (outcome) => outcome.outcome_name === match.away_team
    );

    return homeTeamOutcome?.odd_value || "N/A";
};

function formatDateTime(dateTimeString: string) {
    const dateTime = new Date(dateTimeString);

    // Get current date
    const currentDate = new Date();
    const isToday =
        currentDate.getDate() === dateTime.getDate() &&
        currentDate.getMonth() === dateTime.getMonth() &&
        currentDate.getFullYear() === dateTime.getFullYear();

    // Format time as HH:mm
    const formattedTime = dateTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });

    // If the date is today, display "Today", otherwise, display the date with month abbreviation
    const formattedDate = isToday
        ? 'Today'
        : `${dateTime.toLocaleString('en-US', { month: 'short' })} ${dateTime.getDate()}`;

    return `${formattedDate} / ${formattedTime}`;
}
const calculateTotalOdds = (odds: number[]): number => {
    return odds.reduce((total, odd) => total * odd, 1);
};