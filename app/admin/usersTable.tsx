"use client"
import React, { useEffect, useState } from 'react'
import AddTransactionModal from './AddTransaction'
type User = {
    email: string;
    firstName: string;
    lastName: string;
    UserBalance: number
};

export default function UsersTable() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/users');
                const data = await response.json();
                const usersData: User[] = data.users || [];
                setUsers(usersData);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-lg -mt-6 mb-8 p-6">
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
                    Users Table</h6>
            </div>
            <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                    <thead>
                        <tr><th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                            <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">UserName</p>
                        </th>
                            <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Balance</p>
                            </th>
                            <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">status</p>
                            </th>
                            <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Date Joined</p>
                            </th>
                            <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Actions</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user) => (
                            <tr key={user.email}>
                                <td className="py-3 px-5 border-b border-blue-gray-50">
                                    <div className="flex items-center gap-4">
                                        <img src="/profile.png" alt="John Michael" className="inline-block relative object-cover object-center w-9 h-9 rounded-md" />
                                        <div>
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">{user.firstName} {user.lastName}</p>
                                            <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 px-5 border-b border-blue-gray-50">
                                    <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                                        ${user.UserBalance}</p>
                                </td>
                                <td className="py-3 px-5 border-b border-blue-gray-50">
                                    <div className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-green-600 to-green-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit" style={{ opacity: '1' }}>
                                        <span className="">online</span>
                                    </div></td><td className="py-3 px-5 border-b border-blue-gray-50">
                                    <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">N/a</p>
                                </td>
                                <td className="py-3 px-5 border-b border-blue-gray-50">
                                    <a href="#" className="block antialiased font-sans text-xs font-semibold text-blue-gray-600"><AddTransactionModal userEmail={user.email} /></a></td>
                            </tr>

                        ))}

                    </tbody>
                </table></div>
        </div>
    )
}
