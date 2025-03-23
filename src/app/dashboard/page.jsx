// src/app/dashboard/page.jsx

import React from 'react';
import DashboardLayout from './components/dashboardlayout';

function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="bg-opacity-0 p-4 text-white"> {/* Transparent background */}
        <h1>Welcome to the Home Dashboard!</h1>
        <p>This is the main dashboard content.</p>
      </div>
    </DashboardLayout>
  );
}

export default DashboardPage;