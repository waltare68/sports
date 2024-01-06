"use client";
import React, { useState } from 'react'
import DashboardCards from '../components/widgets/cards'
import UsersTable from './usersTable'
import Sidebar from './sidebar/Sidebar';

export default function AdminDashbboard() {
    const [adminPassword,setAdminPassword] = useState('')
    const [adminEmail,setAdminEmail] = useState('')
    const [showContent,setShowCOntent] = useState(true);
    const [message,setMessage] =useState('')

    const LogAdmin = async () => {
        try {
            const response = await fetch('/api/auth/logAdmin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ AdminEmail:adminEmail, AdminPassword:adminPassword }),
            });

            if (response.ok) {
                const data = await response.json();
                if(data.message == "success"){
                    setShowCOntent(true)
                }
                else{
                    setMessage("Access Denied")
                }
            } else {
                setMessage("Access Denied")
            }
        } catch (error) {
            setMessage("contact developer")
        }

    }
    return (
        <>
            { showContent?(
            <div className="mt-12">
                <div className="">
                  <Sidebar/>
                <main className='flex-grow flex flex-col min-h-screen p-4 sm:ml-64'> 
                    <DashboardCards />
                    <UsersTable/>
                  </main>

                </div>
            </div>
            
            ):(
                <>
              

                 <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Zikani"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
            {message}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:text-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:text-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="button" onClick={() =>{LogAdmin()}}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
            )
            }

        </>
    )
}
