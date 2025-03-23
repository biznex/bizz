"use client";

import React, { useState } from 'react';
import DashboardHeader from './dashboardheader';
import DashboardSidebar from './dashboardsidebar';
import { AiOutlineMenu } from 'react-icons/ai';

function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen w-full bg-[url('/bg.png')] bg-cover bg-no-repeat bg-center">
      {/* Hamburger Menu (Mobile View) */}
      <button
        className="absolute top-4 left-4 text-white md:hidden z-50"
        onClick={toggleSidebar}
      >
        <AiOutlineMenu size={24} />
      </button>

      {/* Floating Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-48 text-left text-white p-4 transition-transform duration-300 transform z-40 ${
          isSidebarOpen
            ? 'translate-x-0 backdrop-filter backdrop-blur-lg bg-opacity-20 bg-black'
            : '-translate-x-full'
        } md:static md:translate-x-0 md:border-r md:border-white md:bg-opacity-0`}
      >
        <DashboardSidebar />
      </div>

      {/* Main Content (Header and Content) */}
      <div className="flex-1 flex flex-col">
        <div className="bg-opacity-0">
          <DashboardHeader />
        </div>
        <main className="flex-1 p-4 bg-opacity-0">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;