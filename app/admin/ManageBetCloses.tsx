"use client"
import React, { ChangeEvent, useEffect, useState } from 'react'
import Image from 'next/image'

interface Game {
    id: string;
    homeTeam: string;
    awayTeam: string;
    result?: string;
    pick: String
}

interface UserBet {
    id: string;
    email: string;
    betAmount: number;
    Status?: string;
    games: Game[];
    DatePlaced:string
    possiblePayout:number
}

const ManageBetCloses = () => {
    const [userBets, setUserBets] = useState<UserBet[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/games/getUnprocessedGames');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data: { Userbets: UserBet[] } = await response.json();
                setUserBets(data.Userbets);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleStatusChange = (event: ChangeEvent<HTMLInputElement>, userBetId: string) => {
        setUserBets(prevUserBets => prevUserBets.map(userBet => {
            if (userBet.id === userBetId) {
                return { ...userBet, Status: event.target.value };
            }
            return userBet;
        }));
    };

    const handleResultChange = (event: ChangeEvent<HTMLInputElement>, userBetId: string,index:number) => {
        setUserBets(prevUserBets => prevUserBets.map(userBet => {
            if (userBet.id === userBetId) {
                return {
                    ...userBet,
                    games: userBet.games.map(game => ({ ...game, result: event.target.value })),
                };
            }
            return userBet;
        }));
    };
    const handleGameResultChange = (event: ChangeEvent<HTMLInputElement>, userBetId: string, gameIndex: number) => {
        setUserBets(prevUserBets => prevUserBets.map(userBet => {
          if (userBet.id === userBetId) {
            return {
              ...userBet,
              games: userBet.games.map((game, index) => {
                if (index === gameIndex) {
                  return { ...game, result: event.target.value };
                }
                return game;
              }),
            };
          }
          return userBet;
        }));
      };

    const handleSave = async () => {
        try {
            const response = await fetch('/api/games/processBets', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ userBets }),
            });
      
            if (!response.ok) {
              throw new Error('Failed to save changes');
            }
      
            console.log('Changes saved successfully');
          } catch (error) {
            console.error('Error saving changes:', error);
          }
    };

    return (
        <div className='bg-gray-100 flex '>
            <aside className='bg-white w-64 min-h-screen flex flex-col fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'>

                <a href="#">

                    <Image src="https://merakiui.com/images/logo.svg"
                        className="w-auto h-6 sm:h-7 m-2" alt="logo"
                        width={100}
                        height={40}
                    />

                </a>

                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                            </svg>
                            <span className="ms-3">Manage  Balances</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">close Bets</span>
                            <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                        </a>
                    </li>
                </ul>

            </aside>
            <main className='flex-grow flex flex-col min-h-screen p-4 sm:ml-64'>
                <header className='bg-white border-b h-10 flex items-center justify-center'>

                </header>
                <h1>Process User Bets</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Date Placed</th>
                            <th>Bet Amount</th>
                            <th>Status</th>
                            <th>Games - result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userBets?.map(userBet => (
                            <tr key={userBet.id} className='bg-b1acad m-12 border-2 border-solid'>
                                <td>{userBet.email}</td>
                                <td>{userBet.DatePlaced}</td>
                                <td>{userBet.betAmount}</td>
                                <td>
                                    <input
                                        type="text"
                                        className='text-black'
                                        value={userBet.Status || ''}
                                        onChange={(e) => handleStatusChange(e, userBet.id)}
                                    />
                                </td>
                                <td>
                                    <ul>
                                        {userBet.games.map((game,index) => (
                                            <li key={game.id}>{index + 1}. {game.homeTeam} vs {game.awayTeam}
                                                <span className='text-blue-600/100 p-1'>pick {game.pick} </span>
                                               
                                                <input
                                                    type="text" className='p-2 m-1 text-black'
                                                    value={game.result || ''}
                                                    onChange={(e) => handleGameResultChange(e, userBet.id,index)}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <hr></hr>
                <button onClick={handleSave} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button">
            Save Changes
            </button>


            </main>

        </div>
    )
}

export default ManageBetCloses
