"use client"
import GameItemInfo from '@/app/components/gameinfo'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import gamesData from '../../../../data/games2023nov19.json';
import { GiSoccerField } from "react-icons/gi";
import virtualLeague from '../../../../data/virtual1.json';
import timeline from '../../../../data/fixtures.json';
import { FaLock, FaStar, FaBasketballBall } from "react-icons/fa";
import { IoFootball, IoTennisball, IoGolfSharp } from "react-icons/io5";
import { FcNext } from "react-icons/fc";
import CountdownTimer from './Countdown';
interface SelectedEvent {
    parent_virtual_id: string;
    event: string;
    home_team: string;
    away_team: string;
    odds: string;
}



interface Countdown {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface GameDay {
    date: string;
    startTime: string;
    event: string;
    gameweek: string;
}

interface CountdownTimerProps {
    startTime: string;
}
export default function VirtualLeague() {
    //const [selectedEvents, setSelectedEvents] = useState<{ [key: string]: string }>({});
    const [selectedEvents, setSelectedEvents] = useState(() => {
        const storedData = localStorage.getItem('selectedVirtualEventData');
        return storedData ? JSON.parse(storedData) : {};
    });
    const [selectedEventClasses, setSelectedEventClasses] = useState(() => {
        const storedData = localStorage.getItem('selectedEventClasses');
        return storedData ? Object.values(JSON.parse(storedData)) : [];
    });

    const storedEventsString = localStorage.getItem('selectedvirtualEvents');
    const storedEvents = storedEventsString ? JSON.parse(storedEventsString) : {};

    function calculateCountdown(targetTime: string): Countdown {
        const targetDate = new Date(targetTime).getTime();
        const now = new Date().getTime();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            // Event has already started or passed
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }
    const getCurrentGameWeek = () => {
        const currentDate = new Intl.DateTimeFormat('en-US', {
            timeZone: 'Africa/Nairobi', // EAT timezone
        }).format(new Date());

        for (const gameDay of timeline.gameDayTimeline) {
            const gameDate = gameDay.date;
            if (formatDate(currentDate) == gameDate) {
                return gameDay.gameweek;
            }
        }
        return "1";
    };

    const currentDateInEAT = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Nairobi', // EAT timezone
    }).format(new Date());

    let gameweek = getCurrentGameWeek().toString();
    const gameDay = gameweek;
    const getGamesForGameweek = (gameweek: string) => {
        switch (gameweek) {
            case '1':
                return virtualLeague["1"];
            case '2':
                return virtualLeague["2"];
            case '3':
                return virtualLeague["3"];
            case '4':
                return virtualLeague["4"];
            case '5':
                return virtualLeague["5"];
            case '6':
                return virtualLeague["6"];
            case '7':
                return virtualLeague["7"];
            case '8':
                return virtualLeague["8"];
            case '9':
                return virtualLeague["9"];
            case '10':
                return virtualLeague["10"];
            case '11':
                return virtualLeague["11"];
            case '12':
                return virtualLeague["12"];
            case '13':
                return virtualLeague["13"];
            case '14':
                return virtualLeague["14"];
            case '15':
                return virtualLeague["15"];
            case '16':
                return virtualLeague["15"];
            case '17':
                return virtualLeague["15"];
            case '18':
                return virtualLeague["18"];
            case '19':
                return virtualLeague["19"];
            case '20':
                return virtualLeague["19"];
            case '21':
                return virtualLeague["21"];
            case '22':
                return virtualLeague["22"];
            case '23':
                return virtualLeague["23"];
            case '24':
                return virtualLeague["23"];
            case '25':
                return virtualLeague["26"];
            case '26':
                return virtualLeague["26"];
            
            default:
                return virtualLeague["1"];
        }
    };
    const games = getGamesForGameweek(gameweek);
    
    // games = virtualLeague[gameweek];
    const handleEventClick = (parent_virtual_id: string,
        event: string,
        home_team: string,
        away_team: string,
        odds: string) => {

        const storedEventDataString = localStorage.getItem('selectedVirtualEventData');
        const storedEventData = storedEventDataString ? JSON.parse(storedEventDataString) : {};


        if (storedEventData[parent_virtual_id] && storedEventData[parent_virtual_id].event === event) {
            delete storedEventData[parent_virtual_id];
            localStorage.setItem('selectedVirtualEventData', JSON.stringify(storedEventData));
        }
        else if (storedEventData[parent_virtual_id] && storedEventData[parent_virtual_id].event != event) {
            storedEventData[parent_virtual_id] = {
                parent_virtual_id,
                event,
                home_team,
                away_team,
                odds,
            };
        }
        else {
            storedEventData[parent_virtual_id] = {
                parent_virtual_id,
                event,
                home_team,
                away_team,
                odds,
            };
        }
        setSelectedEvents(storedEventData);

        localStorage.setItem('selectedVirtualEventData', JSON.stringify(storedEventData));
        window.dispatchEvent(new Event("storage"));

    }
    useEffect(() => {
        // Save to localStorage whenever selectedEventClass changes
        localStorage.setItem('selectedEventClasses', JSON.stringify(selectedEventClasses));
    }, [selectedEventClasses]);

    return (
        <>
            <div className="live__heightlight trending__now">
                <div className="section__title">
                    <h4>Game week {gameDay}</h4>
                    <h6>Starting in <span><CountdownTimer startTime={parseDateMMDDYYYY(currentDateInEAT)} /></span></h6>
                </div>

                <div className="height__table">
                    <div className="tab-content" id="nav-tabContentheighttrending">
                        <div className="tab-pane fade text-white show active" id="height1trend" role="tabpanel" aria-labelledby="nav-home-tabpre">
                            <div className="main__table larg__width treanding__table">

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
                                                <a className="point__box bg__none" href="#">1/X</a>
                                                <a className="point__box bg__none" href="#">1/2</a>
                                                <a className="point__box bg__none" href="#">X/2</a>
                                            </div>
                                        </div>

                                    </div>

                                    {games.map((game: any, index: any) => (
                                        <>
                                            <div key={index}
                                                className="table__items b__bottom">
                                                <div className="t__items">
                                                    <div className="t__items__left">
                                                        <h6>{game.home_team}</h6><span className="text">{game.away_team}</span>
                                                        <p><a href="URL:void(0)">Today / 21:00</a><a className="today" href="URL:void(0)">Today / 21:00</a></p>
                                                    </div>
                                                </div>
                                                <div className="mart__point__items">
                                                    <a className="twing twing__right" href="URL:void(0)">
                                                        <GiSoccerField /></a>
                                                    <a className="mart opo" href="URL:void(0)">
                                                        <i className="icon-pmart"></i>
                                                    </a>
                                                    <a className={`point__box ${selectedEvents?.[game.parent_virtual_id]?.event === 'home' ? 'pointBoxSelected' : ''}`}
                                                        onClick={() => handleEventClick(game.parent_virtual_id, 'home', game.home_team, game.away_team, game.markets[1].odds[0].odd_value)} href="#0box">
                                                        {game.markets[1].odds[0].odd_value}</a>
                                                    <a className={`point__box ${selectedEvents?.[game.parent_virtual_id]?.event === 'draw' ? 'pointBoxSelected' : ''}`}
                                                        onClick={() => handleEventClick(game.parent_virtual_id, 'draw', game.home_team, game.away_team, game.markets[1].odds[1].odd_value)} href="#0box">
                                                        {game.markets[1].odds[1].odd_value}
                                                    </a>
                                                    <a className={`point__box ${selectedEvents?.[game.parent_virtual_id]?.event === 'away' ? 'pointBoxSelected' : ''}`}
                                                        onClick={() => handleEventClick(game.parent_virtual_id, 'away', game.home_team, game.away_team, game.markets[1].odds[2].odd_value)} href="#0box">
                                                        {game.markets[1].odds[2].odd_value}</a>
                                                </div>

                                                <div className="mart__point__two">
                                                    <div className="mart__point__left"><a
                                                        className={`point__box ${selectedEvents?.[game.parent_virtual_id]?.event === 'over' ? 'pointBoxSelected' : ''}`}
                                                        onClick={() => handleEventClick(game.parent_virtual_id, 'over', game.home_team, game.away_team, game.markets[0].odds[0].odd_value)} href="URL:void(0)">
                                                        {game.markets[0].odds[0].odd_value}</a>
                                                        <a className={`point__box ${selectedEvents[game.parent_virtual_id]?.event === 'under' ? 'pointBoxSelected' : ''}`}
                                                            onClick={() => handleEventClick(game.parent_virtual_id, 'under', game.home_team, game.away_team, game.markets[0].odds[1].odd_value)} href="URL:void(0)">
                                                            {game.markets[0].odds[1].odd_value}
                                                        </a>
                                                    </div>
                                                    <div className="mart__point__right">
                                                        <a className={`point__box ${selectedEvents?.[game.parent_virtual_id]?.event === '1/x' ? 'pointBoxSelected' : ''}`}
                                                            onClick={() => handleEventClick(game.parent_virtual_id, '1/x', game.home_team, game.away_team, game.markets[2].odds[0].odd_value)} href="URL:void(0)">
                                                            {game.markets[2].odds[0].odd_value}
                                                        </a>
                                                        <a className={`point__box ${selectedEvents?.[game.parent_virtual_id]?.event === '1/2' ? 'pointBoxSelected' : ''}`}
                                                            onClick={() => handleEventClick(game.parent_virtual_id, '1/2', game.home_team, game.away_team, game.markets[2].odds[1].odd_value)} href="URL:void(0)">
                                                            {game.markets[2].odds[1].odd_value}
                                                        </a>
                                                        <a className={`point__box ${selectedEvents?.[game.parent_virtual_id]?.event === 'x/2' ? 'pointBoxSelected' : ''}`}
                                                            onClick={() => handleEventClick(game.parent_virtual_id, 'x/2', game.home_team, game.away_team, game.markets[2].odds[2].odd_value)} href="URL:void(0)">
                                                            {game.markets[2].odds[2].odd_value}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </>

                                    ))}



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

function parseDateMMDDYYYY(dateString: string) {
    const [month, day, year] = dateString.split('/');
    const formattedDate = new Date(`${year}-${month}-${day} 16:00:00`).toISOString();
    return formattedDate.substring(0, 19).replace('T', ' ');
}

function formatDate(dateString: string) {
    // Parse the date string
    const dateObj = new Date(dateString);

    // Format the date in the desired format
    const formattedDate = dateObj.toISOString().slice(0, 10);

    return formattedDate;
}