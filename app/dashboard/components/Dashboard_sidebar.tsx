import React from 'react'
import { FaUser } from 'react-icons/fa';
//FiLogOut
import { FiLogOut } from "react-icons/fi";
interface dashsidebarprops{
    activeli:string
}


const Dashboard_sidebar = ({activeli}:dashsidebarprops) => {
    return (
        <>
            <div className="dashboard__side__bar">
                <ul className="account__menu">
                    <li>
                        <a className={activeli === 'dashboard' ? 'active' : 'false'} href="/dashboard"><span className="icons"><FaUser /></span><span>Account Settings</span></a>
                    </li>
                    <li>
                        <a className={activeli === 'contact' ? 'active' : 'false'} href="/dashboard/contact-preference"><span className="icons"><FaUser /></span><span>Contact Preferences</span></a>
                    </li>
                    <li>
                        <a className={activeli === 'identity' ? 'active' : 'false'} href="/dashboard/identity"><span className="icons"><FaUser /></span><span>Identity Details</span></a>
                    </li>
                    <li>
                        <a className={activeli === 'verification' ? 'active' : 'false'} href="/dashboard/verification"><span className="icons"><FaUser /></span><span>Verify</span></a>
                    </li>
                    <li>
                        <a className={activeli === 'casinobet' ? 'active' : 'false'} href="/dashboard/casinobet"><span className="icons"><FaUser /></span><span>Casino bets</span></a>
                    </li>
                    <li>
                        <a className={activeli === 'mypromo' ? 'active' : 'false'} href="/dashboard/mypromo"><span className="icons"><FaUser /></span><span>My Promos</span></a>
                    </li>
                    <li>
                        <a className={activeli === 'deposit' ? 'active' : 'false'} href="/dashboard/deposit"><span className="icons"><FaUser /></span><span>Deposit</span></a>
                    </li>
                    <li>
                        <a className={activeli === 'withdraw' ? 'active' : 'false'} href="/dashboard/withdraw"><span className="icons"><FaUser /></span><span>Withdraw</span></a>
                    </li>
                    <li>
                        <a className={activeli === 'transaction' ? 'active' : 'false'} href="/dashboard/transaction"><span className="icons"><FaUser /></span><span>Transction History</span></a>
                    </li>
                    <li>
                        <a className={activeli === 'notification' ? 'active' : 'false'} href="/dashboard/notification"><span className="icons"><FaUser /></span><span>Notifications</span></a>
                    </li>
                    <li>
                        <a className={activeli === 'bethistory' ? 'active' : 'false'} href="/dashboard/bethistory"><span className="icons"><FaUser /></span><span>Bet History</span></a>
                    </li>
                    <li>
                        <a className={activeli === 'bonuses' ? 'active' : 'false'} href="/dashboard/bonuses"><span className="icons"><FaUser /></span><span>Bonuses</span></a>
                    </li>
                    <li>
                        <a href="URL:void()"><span className="icons"><FiLogOut /></span><span>Logout</span></a>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Dashboard_sidebar
