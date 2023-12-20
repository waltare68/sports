"use client"
import { useState } from 'react'

import { FaUser } from 'react-icons/fa';


function CustomDrop() {
 const [isOpen, setIsOpen] = useState(false)


 return (
   <div className="custom-dropdown">
     <button
       type="button"
       className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm text-gray-700 hover:bg-gray-50"
       onClick={() => setIsOpen(!isOpen)}
     >
       <FaUser/>
     </button>
     {isOpen && (
       <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ">
         <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
           <a href="/account-settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Account settings</a>
           <a href="../api/auth/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Logout</a>
           <span className="block px-4 py-2 text-sm text-gray-700 opacity-50" role="menuitem">Invite a friend (coming soon!)</span>
         </div>
       </div>
     )}
   </div>
 )
}


export default  CustomDrop
