"use client";

import React from 'react';
import DashboardLayout from '../components/dashboardlayout';

function InventoryPage() {
  return (
    <DashboardLayout>
      <div className="p-4 text-white">
        <h1 className="text-2xl font-semibold mb-4">Inventory Dashboard</h1>
      </div>
    </DashboardLayout>
  );
}

export default InventoryPage;