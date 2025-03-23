// src/app/dashboard/inventory/page.jsx

import React from 'react';
import DashboardLayout from '../components/dashboardlayout'; // Correct path to DashboardLayout

function InventoryPage() {
  return (
    <DashboardLayout>
      <div>
        <h1>Inventory Dashboard</h1>
        <p>This is the inventory section of the dashboard.</p>
      </div>
    </DashboardLayout>
  );
}

export default InventoryPage;