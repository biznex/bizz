import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

function DashboardHeader() {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <header className="p-4 border-b border-gray-400 flex justify-end items-center text-[#2F2F2F] relative">
      <h1 className="mr-2">Hey, Alex!</h1>
      <div className="relative">
        <FaUserCircle 
          className="text-2xl cursor-pointer" 
          onClick={() => setShowLogout(!showLogout)} 
        />
        
        {showLogout && (
          <button 
            className="absolute right-0 mt-2 bg-white text-black px-4 py-2 rounded shadow-md border border-gray-300"
            onClick={() => console.log('Logging out...')}
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
}

export default DashboardHeader;
