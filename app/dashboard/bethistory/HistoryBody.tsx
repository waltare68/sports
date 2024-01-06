"use client"
import React, { useEffect, useState } from 'react'
import Dashboard_sidebar from '../components/Dashboard_sidebar'

interface UserBet {
    id: string;
    email: string;
    betAmount: number;
    possiblePayout: number;
    totalOdds: number;
    betType: string;
    DatePlaced: string; // Assuming DatePlaced is a string, adjust accordingly
    Status?: string;
    games: {
        id: string;
        homeTeam: string;
        awayTeam: string;
        pick: string;
        result:string;
    }[];
}
interface historyProps {
    userEmail: String
}
export default function HistoryBody({ userEmail }: historyProps) {
    const [userBets, setUserBets] = useState<UserBet[]>([]);
    const email = userEmail
    useEffect(() => {
        const fetchData = async () => {
            if (email == "") {
                return
            }
            try {
                const response = await fetch('/api/games/getBets', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                if (Array.isArray(data)) {
                    setUserBets(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [email]);

    return (
        <>
            <section className="dashboard__body mt__30 pb-60">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-xxl-3 col-xl-3 col-lg-4">
                            <Dashboard_sidebar activeli='bethistory' />
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-8">
                            <div className="dashboard__body__wrap">
                                <h3 className="account__head mb__30">Bet History</h3>
                                <div className="cainoform__wrap">
                                    <div className="row g-4">
                                        <div className="col-xl-6">
                                            <div className="casino__date">
                                                <h4 className="f__title">From</h4>
                                                <div className="calender-bar"><input type="date" className="datepicker"
                                                    placeholder="2023-2-2" /></div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="casino__date">
                                                <h4 className="f__title">Until</h4>
                                                <div className="calender-bar"><input type="date" className="datepicker"
                                                    placeholder="2023-2-2" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="casinoform__tabe bethistory__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Game</th>
                                                <th>Payment Methods</th>
                                                <th>Amount</th>
                                                <th>Possible Payout</th>
                                                <th>Total Odds</th>
                                                <th>Status</th>
                                                <th>Result</th>
                                                <th>games</th>
                                                <th>More</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {userBets.map((userBet) => (
                                                <>
                                                    <tr key={userBet.id}>
                                                        <td>Football</td>
                                                        <td>Mpesa </td>
                                                        <td>{userBet.betAmount}</td>
                                                        <td>{userBet.possiblePayout}</td>
                                                        <td>{userBet.totalOdds}</td>
                                                        <td className={userBet.Status !== null ? "complate" : "pending"}>{userBet.Status !== null ? "Complete" : "Pending"}</td>
                                                    
                                                        <td>{userBet.Status}</td>
                                                        <td>
                                                            <ul>
                                                                {userBet.games.map((game) => (
                                                                    <li key={game.id} className="bg-gray-300">
                                                                        {game.homeTeam} vs {game.awayTeam}
                                                                        <span className="cancel"> Pick: {game.pick} result {game.result}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </td>
                                                        <td className="bold">...</td>

                                                    </tr>
                                                </>


                                            ))}



                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="footer__menu d-lg-none">
                    <li><a className="d-grid justify-content-center" href="/"><span><i
                        className="fas fa-table-tennis"></i></span><span className="texta">Sports</span></a></li>
                    <li><a className="d-grid justify-content-center" data-bs-toggle="modal" data-bs-target="#eventsp"
                        href="URL:void(0)"><span><i className="fa-solid fa-gift"></i></span><span
                            className="texta">Events</span></a></li>
                    <li className="header-bartwo d-lg-none"><span className="bars"><i className="fas fa-bars"></i></span><span
                        className="cros"><i className="fa-solid fa-xmark"></i></span></li>
                    <li><a className="d-grid justify-content-center" data-bs-toggle="modal" data-bs-target="#betsp"
                        href="URL:void(0)"><span><i className="fas fa-ticket-alt"></i></span><span className="texta">My
                            Bet</span></a></li>
                    <li><a className="d-grid justify-content-center" href="/dashboard"><span><i
                        className="far fa-user-circle"></i></span><span className="texta"> Account</span></a></li>
                </ul>
            </section>

        </>
    )
}
