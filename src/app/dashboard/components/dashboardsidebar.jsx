// src/app/dashboard/components/dashboardsidebar.jsx

import React from 'react';
import Link from 'next/link';

function DashboardSidebar() {
  return (
    <div className="flex flex-col h-full">
      <ul className="flex-grow">
        <li className="pt-4"><Link href="/dashboard" className="block p-2 hover:bg-gray-800 rounded">Home</Link></li>
        <li><Link href="/dashboard/finance" className="block p-2 hover:bg-gray-800 rounded">Finance</Link></li>
        <li><Link href="/dashboard/inventory" className="block p-2 hover:bg-gray-800 rounded">Inventory</Link></li>
      </ul>
      <div className="mt-4"> {/* Changed from mt-auto to mt-4 */}
        <Link href="/" className="block p-2 hover:bg-gray-800 rounded">Return to Biznex</Link>
      </div>
    </div>
  );
}

export default DashboardSidebar;