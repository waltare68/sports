"use client";
import React, { useEffect, useState } from 'react'
import Dashboard_sidebar from '../components/Dashboard_sidebar'
import Footer_small_menu from '../components/Footer_small_menu'
import { FaCalendarAlt } from 'react-icons/fa';
import Notransactions from './Notransactions';
interface Transprops{
    userEmail:String
}
interface Transaction {
    id: number;
    email: string;
    phone?: string;
    amount:  number;
    dateTransacted :   Date
    transRef :    String;
    createdAt:   Date;
    updatedAt:   Date;
    balanceUpdated:   number
    channel?: String
  }

export default function TransactionBoby({userEmail}:Transprops) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
              const response = await fetch('/api/transactions', {
                method: 'POST', // Use POST method to send data in the request body
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: userEmail }),
              });
      
              if (!response.ok) {
                throw new Error('Failed to fetch transactions');
              }
              const data = await response.json()
              console.log()
              if (data.transactions) {

                setTransactions(data.transactions);
              } else {
                setTransactions([]); // If no transactions are returned
              }

            } catch (error) {
              console.error('Error fetching transactions:', error);
            }
          };
  
      fetchTransactions();
    }, []);

  return (
    <>
     <section className="dashboard__body mt__30 pb-60">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xxl-3 col-xl-3 col-lg-4">
                    <Dashboard_sidebar activeli='transaction' />
                    </div>
                    <div className="col-xxl-9 col-xl-9 col-lg-8">
                        <div className="dashboard__body__wrap">
                            <h3 className="account__head mb__30">Transaction History</h3>
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
                                                    placeholder="2023-2-2" ></input></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="casinoform__tabe">
                            {transactions.length > 0 ? (''):
                            <Notransactions/>}
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Transaction Ref No</th>
                                            <th>Payment Methods</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Ratio</th>
                                            <th>More</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {transactions.map((transaction:Transaction) => (
                                    <tr key={transaction.id}>
                                        <td>{transaction.transRef}</td>
                                        <td>{transaction.channel}</td>
                                        <td>${transaction.amount}</td>
                                        <td className="complate">complete</td>
                                        <td>1.00</td>
                                        <td className="bold">...</td>


                                    </tr>

                                     ))}
                                   
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer_small_menu isLoggedIn={true} userEmail={''}/>
      </section>
      
    </>
  )
}
