// src/app/dashboard/components/dashboardsidebar.jsx

import React, { useState } from 'react';
import Link from 'next/link';
import { Home, FileText, CreditCard, Boxes, LogOut, Banknote, ArrowLeftRight, IndianRupee, ChevronDown,Package } from 'lucide-react';

function DashboardSidebar() {
  const [showFinanceSubMenu, setShowFinanceSubMenu] = useState(false);
  const [showInventorySubMenu, setShowInventorySubMenu] = useState(false); // New state for inventory submenu

  return (
    <div className="flex flex-col h-full font-sans">
      <ul className="flex-grow">
        <li>
          <Link href="/dashboard">
            <div className="flex items-center space-x-3 p-2 rounded hover:bg-[#F0F0F0] text-inherit mt-12 md:mt-4">
              <Home size={18} className="shrink-0" />
              <span>Home</span>
            </div>
          </Link>
        </li>
        <li>
          <div
            className="flex items-center space-x-3 p-2 rounded cursor-pointer hover:bg-[#F0F0F0] text-inherit"
            onClick={() => setShowFinanceSubMenu(!showFinanceSubMenu)}
          >
            <FileText size={18} className="shrink-0" />
            <span>Finance</span>
            <ChevronDown size={18} className="shrink-0" />
          </div>
          {showFinanceSubMenu && (
            <ul className="pl-6">
              <li>
                <Link href="/dashboard/finance/overview">
                  <div className="flex items-center space-x-3 p-2 rounded hover:bg-[#F0F0F0] text-inherit">
                    <CreditCard size={18} className="shrink-0" />
                    <span>Overview</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/finance/payments">
                  <div className="flex items-center space-x-3 p-2 rounded hover:bg-[#F0F0F0] text-inherit">
                    <Banknote size={18} className="shrink-0" />
                    <span>Payments</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/finance/transactions">
                  <div className="flex items-center space-x-3 p-2 rounded hover:bg-[#F0F0F0] text-inherit">
                    <ArrowLeftRight size={18} className="shrink-0" />
                    <span>Transactions</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/finance/salary">
                  <div className="flex items-center space-x-3 p-2 rounded hover:bg-[#F0F0F0] text-inherit">
                    <IndianRupee size={18} className="shrink-0" />
                    <span>Salary</span>
                  </div>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div
            className="flex items-center space-x-3 p-2 rounded cursor-pointer hover:bg-[#F0F0F0] text-inherit"
            onClick={() => setShowInventorySubMenu(!showInventorySubMenu)}
          >
            <Boxes size={18} className="shrink-0" />
            <span>Inventory</span>
            <ChevronDown size={18} className="shrink-0" />
          </div>
          {showInventorySubMenu && (
            <ul className="pl-6">
              <li>
                <Link href="/dashboard/inventory/products">
                  <div className="flex items-center space-x-3 p-2 rounded hover:bg-[#F0F0F0] text-inherit">
                    <Package size={18} className="shrink-0" />
                    <span>Products</span>
                  </div>
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <div className="mb-4">
        <Link href="/">
          <div className="flex items-center space-x-3 p-2 rounded hover:bg-[#F0F0F0] text-inherit">
            <LogOut size={18} className="shrink-0" />
            <span>Back to Biznex</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DashboardSidebar;