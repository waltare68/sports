import React, { useEffect, useState } from 'react'
import { CiTrash, CiSettings } from 'react-icons/ci';
import { FaFutbol } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

interface BetslipProps {
    IsLoggedIn: boolean,
    UserEmail: string
}

interface SelectedEvent {
    [x: string]: any
    parentMatchId: string;
    event: string;
    home_team: string;
    away_team: string;
    odds: number;
    
}

interface virtualEventData {
    parent_virtual_id: string;
    event: string;
    home_team: string;
    away_team: string;
    odds: string;
}
interface EventData {
    parentMatchId: string;
    event: string;
    home_team: string;
    away_team: string;
    odds: string;
    index: string;
}
const calculateTotalOdds = (odds: number[]): number => {
    return odds.reduce((total, odd) => total * odd, 1);
};
export default function BetslipModal({ IsLoggedIn, UserEmail }: BetslipProps) {
    // State to hold the selected events from localStorage
    const [selectedEvents, setSelectedEvents] = useState(() => {
        const storedData = localStorage.getItem('selectedVirtualEventData');
        return storedData ? JSON.parse(storedData) : {};
    });
    const [totalOdds, setTotalOdds] = useState("");
    const [totalvirtualOdds, setTotalirtualVOdds] = useState("");
    const [stake, setStake] = useState(20)
    const [virtualstake, setvirtualStake] = useState(20)
    const [selectedTab, setSelectedTab] = useState("multiple");
    const [totalPayout, setTotalPayout] = useState(stake);
    const [totalvirtualPayout, setTotalVirtualPayout] = useState(stake);

    const [message, setMessage] = useState<string>('');
    const handleTabClick = (tabName: string) => {
        setSelectedTab(tabName);
    };
    useEffect(() => {
        const storedData = localStorage.getItem('selectedVirtualEventData');
        if (storedData) {
            setSelectedVirtualEvents(JSON.parse(storedData));
        }
    }, []); // Empty dependency array means this effect runs once on mount

    const [selectedvirtualEvents, setSelectedVirtualEvents] = useState<{ [key: string]: SelectedEvent }>(() => {
        const storedData = localStorage.getItem('selectedVirtualEventData');
        return storedData ? JSON.parse(storedData) : {};
    });
    const handleStakeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newStake = parseInt(e.target.value)
        setStake(newStake);
        calculateTotalPayout(newStake, totalOdds);
    };

    const calculateTotalPayout = (newStake: number, newOdds: string) => {
        const parsedStake = newStake;
        const parsedOdds = parseFloat(newOdds);

        if (!isNaN(parsedStake) && !isNaN(parsedOdds) && parsedStake >= 0 && parsedOdds > 1) {
            const payout = parsedStake * parsedOdds;
            setTotalPayout(payout);
        } else {
            setTotalPayout(stake);
        }
    };
    const updateStake = (amount: number) => {
        const currentStake = stake + amount;
        setStake(currentStake);
        calculateTotalPayout(currentStake, totalOdds);
    };

    const calculatevirtualTotalPayout = (newStake: number, newOdds: string) => {
        const parsedStake = newStake;
        const parsedOdds = parseFloat(newOdds);

        if (!isNaN(parsedStake) && !isNaN(parsedOdds) && parsedStake >= 0 && parsedOdds > 1) {
            const payout = parsedStake * parsedOdds;
            setTotalVirtualPayout(payout);
        } else {
            setTotalVirtualPayout(virtualstake);
        }
    };
    const updatevirtualStake = (amount: number) => {
        let currentStake = virtualstake + amount;
        if (currentStake < 20) {
            currentStake = 20
        }
        setvirtualStake(currentStake);
        calculatevirtualTotalPayout(currentStake, totalvirtualOdds);
    };

    useEffect(() => {
        // Function to handle changes to localStorage
        const handleStorageChange = () => {
            const storedEventDataString = localStorage.getItem('selectedEventData');
            const storedvirtualEventDataString = localStorage.getItem('selectedVirtualEventData');

            /////////////////////////
            if (storedEventDataString) {
                try {
                    const storedEventData = JSON.parse(storedEventDataString);
                    if (typeof storedEventData === 'object' && !Array.isArray(storedEventData)) {
                        const oddsValues = Object.values(storedEventData).map((event: any) => parseFloat(event.odds) || 0);
                        var totalodds = oddsValues.reduce((total, odd) => total * odd, 1);
                        setTotalOdds(totalodds.toFixed(2));
                        calculateTotalPayout(stake, totalOdds);
                    } else {
                        console.error('Data in localStorage is not an object.');
                    }
                } catch (error) {
                    console.error('Error parsing stored data:', error);
                }
            } else {
                console.error('No data found in localStorage.');
            }


            const storedEventData: Record<string, SelectedEvent> = storedEventDataString
                ? JSON.parse(storedEventDataString)
                : {};

            const eventsArray = Object.values(storedEventData).map((event) => ({
                ...event,
                index: event.parentMatchId,
            }));

            setSelectedEvents(eventsArray);
            ///////////////////////
            if (storedvirtualEventDataString) {
                try {
                    const storedvirtualEventData = JSON.parse(storedvirtualEventDataString);
                    if (typeof storedvirtualEventData === 'object' && !Array.isArray(storedvirtualEventData)) {
                        const oddsValues = Object.values(storedvirtualEventData).map((event: any) => parseFloat(event.odds) || 0);
                        var totalodds = oddsValues.reduce((total, odd) => total * odd, 1);
                        setTotalirtualVOdds(totalodds.toFixed(2));
                        calculatevirtualTotalPayout(virtualstake, totalOdds)

                    } else {
                        console.error('Data in localStorage is not an object.');
                    }
                } catch (error) {
                    console.error('Error parsing stored data:', error);
                }
            } else {
                console.error('No data found in localStorage.');
            }

            const storedvirtualEventData: Record<string, SelectedEvent> = storedvirtualEventDataString
                ? JSON.parse(storedvirtualEventDataString)
                : {};

            const eventsvirtualArray: any = Object.values(storedvirtualEventData).map((event) => ({
                ...event,
                index: event.parent_virtual_id,
            }));


            setSelectedVirtualEvents(eventsvirtualArray);
            /////////////

        };

        window.addEventListener('storage', handleStorageChange);
        handleStorageChange();
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handlePlaceBet = async () => {
        try {
            const games = selectedEvents
            const email = UserEmail;
            let betData = {}
            if (selectedTab === 'system') {
                betData = {
                    email,
                    betAmount: virtualstake,
                    possiblePayout: totalvirtualPayout,
                    totalOdds: totalvirtualOdds,
                    betType: 'virtual',
                    games: selectedvirtualEvents.map((event: { parent_virtual_id: string; home_team: string; away_team: string; event: string;odds:string }) => {
                      // Find the corresponding game in the "games" array
                      const correspondingGame = games.find((game: { parent_virtual_id: string; }) => game.parent_virtual_id === event.parent_virtual_id);
                
                      // Create a new object with the desired structure
                      return {
                        parent_virtual_id: event.parent_virtual_id,
                        hometeam: event.home_team,
                        awayteam: event.away_team,
                        pick: event.event,
                        odds: event.odds , 
                        // Add other properties as needed
                      };
                    }),
                  };
            }
            else {
                betData = {
                    email,
                    betAmount: stake,
                    possiblePayout: totalPayout,
                    totalOdds: totalOdds,
                    betType: 'multiple',
                    games: selectedEvents.map((event: { parentMatchId: string; home_team: string; away_team: string; event: string; }) => ({
                        parent_virtual_id: event.parentMatchId,
                        hometeam: event.home_team,
                        awayteam: event.away_team,
                        pick: event.event,
                    })),
                };

            }
            if (IsLoggedIn) {
                const response = await fetch('/api/games/processbetslip', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(betData),
                });

                if (!response.ok) {
                    throw new Error('Failed to place bet');
                }
                const errorResponse = await response.json();
                if (errorResponse.error === 'Insufficient balance') {
                    setMessage('Insufficient balance. Please add funds before placing a bet.');
                } else {
                    setMessage('Bet placed successfully!');
                }

            } else {
                setMessage('Please sign in to place a bet.');
            }
        } catch (error) {
            console.error('Error placing bet:', error);
        }
    };
    const handleDeleteBetslipItem = (parentMatchId: string) => {
        setSelectedEvents((prevSelectedEvents: any) => {
            const updatedEvents: { [key: string]: EventData } = { ...prevSelectedEvents };
            delete updatedEvents[parentMatchId];
            const indexToDelete = Object.keys(updatedEvents).findIndex(
                (key) => updatedEvents[key].parentMatchId === parentMatchId
            );
            // Remove the selected event
            console.log(updatedEvents[0])
            if (indexToDelete !== -1) {
                delete updatedEvents[Object.keys(updatedEvents)[indexToDelete]];
                localStorage.setItem('selectedEventData', JSON.stringify(updatedEvents));
            }

            return updatedEvents;
        });
    };
    const handleDeleteVirtualBetslipItem = (parent_virtual_id: string) => {
        setSelectedVirtualEvents((prevSelectedEvents: { [key: string]: SelectedEvent }) => {
            const updatedEvents = { ...prevSelectedEvents };

            const indexToDelete = Object.keys(updatedEvents).findIndex(
                (key) => updatedEvents[key].parent_virtual_id === parent_virtual_id
            );

            if (indexToDelete !== -1) {
                delete updatedEvents[Object.keys(updatedEvents)[indexToDelete]];

                // Update local storage with the new state
                localStorage.setItem('selectedVirtualEventData', JSON.stringify(updatedEvents));
                window.dispatchEvent(new Event("storage"));
            }

            return updatedEvents;
        });
    };
    return (
        <>
            <div className="betslip__wrap">
                <h5 className="betslip__title">Betslip</h5>
                <div className="nav" id="nav-taboo" role="tablist">
                    <button className={`nav-link ${selectedTab === 'single' ? 'active' : ''}`} id="nav-home-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-home" onClick={() => handleTabClick('single')} type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                        Single
                    </button>
                    <button className={`nav-link ${selectedTab === 'multiple' ? 'active' : ''}`} onClick={() => handleTabClick('multiple')} id="nav-profile-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                        aria-selected="false">
                        Multiple
                    </button>
                    <button className={`nav-link ${selectedTab === 'system' ? 'active' : ''}`} id="nav-contact-tab" onClick={() => handleTabClick('system')} data-bs-toggle="tab" data-bs-target="#nav-contact"
                        type="button" role="tab" aria-selected="false">System
                    </button>
                </div>
                <div className="tab-content" id="nav-tabContent">
                    <div className={`tab-pane fade text-white ${selectedTab === 'single' ? 'show active' : ''}`} id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" >
                        <div className="multiple__components">
                            {Object.values(selectedEvents).map((event: any) => (
                                <>
                                    <div key={event.parentMatchId} className="multiple__items">
                                        <div className="multiple__head">
                                            <div className="multiple__left">
                                                <span className="icons"><FaFutbol /></span>
                                                <span> {event.home_team} vs {event.away_team}</span>
                                            </div>
                                            <a className="cros" onClick={() => handleDeleteBetslipItem(event.parentMatchId)} href="#"><RxCross2 /></a>
                                        </div>
                                        <div className="multiple__point">
                                            <span className="pbox">{event.odds}</span>
                                            <span className="rightname">
                                                <span className="fc">{event.event}</span>
                                                <span className="point">Winner</span>
                                            </span>
                                        </div>
                                    </div>
                                </>
                            ))}
                            <div className="total__odds">
                                <div className="total__head">
                                    <h6 className="odd">Total Odds</h6><span>25</span>
                                </div>
                                <div className="wrapper">
                                    <div className="result"><span>Stake amount, $</span><span
                                        className="result">0.00 $</span></div>
                                    <div className="buttons"><button type="button">5</button><button
                                        type="button">10</button><button type="button">50</button></div>
                                </div>
                            </div>
                            <div className="possible__pay"><span>Possible Payout</span><span>0.00$</span></div>
                            <a className="cmn--btn2" href="URL:void(0)"><span>Sign In &amp; Bet</span></a>
                        </div>
                        <div className="setting__area">
                            <div className="tab-content show active" id="nav-tabContentsetting">
                                <div className="tab-pane fade text-white" id="nav-homesett" role="tabpanel"
                                    aria-labelledby="nav-home-tabsetting" >
                                    <div className="sign__bets__wrap">
                                        <h5 className="betslip__title">Betslip</h5>
                                        <div className="sign__boxes">
                                            <div className="content">
                                                <h6>Erase Betslip</h6>
                                                <p>Are you sure you want to erase Betslip?</p>
                                                <div className="btn__grp"><a className="cmn--btn"
                                                    href="URL:void(0)"><span>No</span></a><a
                                                        className="cmn--btn2"
                                                        href="URL:void(0)"><span>Accept</span></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade text-white" id="nav-homeett2" role="tabpanel"
                                    aria-labelledby="nav-home-tabsetting2" >
                                    <div className="sign__bets__wrap">
                                        <h5 className="betslip__title">Betslip</h5>
                                        <div className="setting__boxes">
                                            <div className="setting__boxes__head"><span>Accept Changes
                                                automatically?</span><a href="URL:void(0)"><i
                                                    className="icon-cross"></i></a></div>
                                            <div className="check__wrap">
                                                <div className="form-check"><input className="form-check-input"
                                                    type="checkbox" id="check1a" /><label
                                                        className="form-check-label" htmlFor="check1a">Accept any
                                                        odds changes</label></div>
                                                <div className="form-check"><input className="form-check-input"
                                                    type="checkbox" id="check2o" /><label
                                                        className="form-check-label" htmlFor="check2o">Only accept
                                                        increased odds</label></div>
                                                <div className="form-check"><input className="form-check-input"
                                                    type="checkbox" id="check3" /><label
                                                        className="form-check-label" htmlFor="check3">Always
                                                        ask</label></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nav" id="nav-tabseting" role="tablist">
                                <button className="nav-link" id="nav-home-tabsetting" data-bs-toggle="tab" data-bs-target="#nav-homesett" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                    <span className="icons"><CiTrash /></span>
                                    <span className="text">Sign IN &amp;
                                        Bet</span>
                                </button>
                                <button className="nav-link" id="nav-home-tabsetting2" data-bs-toggle="tab" data-bs-target="#nav-homeett2" type="button" role="tab"
                                    aria-controls="nav-profile" aria-selected="false">
                                    <span className="icons"><CiSettings /></span>
                                    <span className="text">Settings</span></button>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-pane fade ${selectedTab === 'multiple' ? 'show active' : ''}`} id="nav-profile" role="tabpanel"
                        aria-labelledby="nav-profile-tab" >
                        <div className="multiple__components">


                            {Object.values(selectedEvents).map((event: any) => (
                                <>
                                    <div key={event.parentMatchId} className="multiple__items">
                                        <div className="multiple__head">
                                            <div className="multiple__left">
                                                <span className="icons"><FaFutbol /></span>
                                                <span> {event.home_team} vs {event.away_team}</span>
                                            </div>
                                            <a className="cros" href="#"><RxCross2 /></a>
                                        </div>
                                        <div className="multiple__point">
                                            <span className="pbox">{event.odds}</span>
                                            <span className="rightname">
                                                <span className="fc">{event.event}</span>
                                                <span className="point">Winner</span>
                                            </span>
                                        </div>
                                    </div>
                                </>
                            ))}
                            <div className="total__odds">
                                <div className="total__head">
                                    <h6 className="odd text-white">Total Odds</h6><span className='text-white'>{totalOdds}</span>
                                </div>
                                <div className="wrapper">
                                    <div className="result">
                                        <span>Stake amount $ {stake}</span>
                                        <span className="result">

                                        </span>
                                        <span>Payout: {totalPayout}</span>

                                    </div>
                                    <div className="buttons">
                                        <button type="button" onClick={() => updateStake(5)}>5</button>
                                        <button type="button" onClick={() => updateStake(10)}>10</button>
                                        <button type="button" onClick={() => updateStake(-10)}>-10</button>
                                        <button type="button" onClick={() => updateStake(50)}>50</button>
                                        <button type="button" onClick={() => updateStake(-50)}>-50</button>
                                    </div>
                                </div>
                            </div>
                            <a className="cmn--btn2" href="#" onClick={handlePlaceBet}><span>{IsLoggedIn ? 'Place Bet' : 'Sign In & Bet'} </span></a>
                            {message && <div className='text-white'>{message}</div>}
                        </div>
                    </div>
                    <div className={`tab-pane fade text-white ${selectedTab === 'system' ? 'show active' : ''}`} id="nav-contact" role="tabpanel"
                        aria-labelledby="nav-contact-tab" >
                        <div className="multiple__components">

                            {Object.values(selectedvirtualEvents).map((event: any) => (
                                <>
                                    <div key={event.parent_virtual_id} className="multiple__items">
                                        <div className="multiple__head">
                                            <div className="multiple__left">
                                                <span className="icons"><FaFutbol /></span>
                                                <span> {event.home_team} vs {event.away_team}</span>
                                            </div>
                                            <a className="cros" onClick={() => handleDeleteVirtualBetslipItem(event.parent_virtual_id)} href="#"  ><RxCross2 /></a>
                                        </div>
                                        <div className="multiple__point">
                                            <span className="pbox">{event.odds}</span>
                                            <span className="rightname">
                                                <span className="fc">{event.event}</span>
                                                <span className="point">Winner</span>
                                            </span>
                                        </div>
                                    </div>
                                </>
                            ))}

                            <div className="total__odds">
                                <div className="total__head">
                                    <h6 className="odd text-white">Total Odds</h6><span className='text-white'>{totalvirtualOdds}</span>
                                </div>
                                <div className="wrapper">
                                    <div className="result">
                                        <span>Stake amount $ {virtualstake}</span>
                                        <span className="result">

                                        </span>
                                        <span>Payout: {totalvirtualPayout}</span>

                                    </div>
                                    <div className="buttons">
                                        <button type="button" onClick={() => updatevirtualStake(5)}>5</button>
                                        <button type="button" onClick={() => updatevirtualStake(10)}>10</button>
                                        <button type="button" onClick={() => updatevirtualStake(-10)}>-10</button>
                                        <button type="button" onClick={() => updatevirtualStake(50)}>50</button>
                                        <button type="button" onClick={() => updatevirtualStake(-50)}>-50</button>
                                    </div>
                                </div>
                            </div>

                            <a className="cmn--btn2" href="#" onClick={handlePlaceBet}><span>{IsLoggedIn ? 'Place Bet' : 'Sign In & Bet'}</span></a>
                            {message && <div>{message}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
