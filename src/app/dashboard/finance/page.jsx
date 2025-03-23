// src/app/dashboard/finance/page.jsx

import React from 'react';
import DashboardLayout from '../components/dashboardlayout'; // Correct path to DashboardLayout

function FinancePage() {
  return (
    <DashboardLayout>
      <div>
        <h1>Finance Dashboard</h1>
        <p>This is the finance section of the dashboard.</p>
      </div>
    </DashboardLayout>
  );
}

export default FinancePage;