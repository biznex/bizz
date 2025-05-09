import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';

function DashboardHeader() {
  const [showLogout, setShowLogout] = useState(false);
  const [dateTime, setDateTime] = useState(null); //initial state null

  useEffect(() => {
    setDateTime(new Date());//set date time on client side.
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    if(!date) return ''; //handle initial null value;
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  const formattedDateTime = formatDate(dateTime);

  return (
    <header className="p-4 border-b border-gray-400 flex justify-between items-center text-[#2F2F2F] relative">
      <div className="flex items-center">
        <span className="mr-4">{formattedDateTime}</span>
      </div>
      <div className="flex items-center">
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
      </div>
    </header>
  );
}

export default DashboardHeader;