// src/app/dashboard/components/dashboardsidebar.jsx

import React from 'react';
import Link from 'next/link';

function DashboardSidebar() {
  return (
    <div>
      <ul>
        <li className="pt-8"><Link href="/dashboard" className="block p-2 hover:bg-gray-800 rounded">Home</Link></li>
        <li><Link href="/dashboard/finance" className="block p-2 hover:bg-gray-800 rounded">Finance</Link></li>
        <li><Link href="/dashboard/inventory" className="block p-2 hover:bg-gray-800 rounded">Inventory</Link></li>
      </ul>
    </div>
  );
}

export default DashboardSidebar;