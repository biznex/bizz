// src/app/dashboard/finance/page.jsx

"use client"; // Add this line at the very top

import React, { useState } from 'react';
import DashboardLayout from '../components/dashboardlayout';
import { FaMoneyBillAlt, FaChartLine, FaChartBar } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function FinancePage() {
  const [dateRange, setDateRange] = useState('7days');

  const getChartData = () => {
    if (dateRange === '7days') {
      return {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
          {
            label: 'Profit',
            data: [10, 15, 8, 12, 18, 14, 20],
            fill: false,
            backgroundColor: 'green',
            borderColor: 'rgba(0, 255, 0, 0.2)',
          },
          {
            label: 'Expenses',
            data: [5, 7, 3, 6, 9, 7, 10],
            fill: false,
            backgroundColor: 'red',
            borderColor: 'rgba(255, 0, 0, 0.2)',
          },
        ],
      };
    } else {
      return {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Profit',
            data: [40, 60, 50, 70],
            fill: false,
            backgroundColor: 'green',
            borderColor: 'rgba(0, 255, 0, 0.2)',
          },
          {
            label: 'Expenses',
            data: [20, 30, 25, 35],
            fill: false,
            backgroundColor: 'red',
            borderColor: 'rgba(255, 0, 0, 0.2)',
          },
        ],
      };
    }
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
        },
      },
      title: {
        display: true,
        text: 'Profit/Expenses Over Time',
        color: 'white',
      },
      tooltip: {
        titleColor: 'white',
        bodyColor: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      y: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  return (
    <DashboardLayout>
      <div className="p-4 text-white">
        <h1 className="text-lg font-semibold mb-4">Finance Overview</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Bento Boxes */}
          <div className="bg-opacity-0 border border-white rounded-xl p-4 flex items-center justify-between">
            <FaMoneyBillAlt className="text-2xl" />
            <div className="text-right">
              <h2 className="text-sm font-semibold text-white">Income</h2>
              <p className="text-lg text-white">₹1,500.00</p>
            </div>
          </div>
          <div className="bg-opacity-0 border border-white rounded-xl p-4 flex items-center justify-between">
            <FaChartLine className="text-2xl" />
            <div className="text-right">
              <h2 className="text-sm font-semibold text-white">Profit</h2>
              <p className="text-lg text-white">₹800.00</p>
            </div>
          </div>
          <div className="bg-opacity-0 border border-white rounded-xl p-4 flex items-center justify-between">
            <FaChartBar className="text-2xl" />
            <div className="text-right">
              <h2 className="text-sm font-semibold text-white">Expenses</h2>
              <p className="text-lg text-white">₹700.00</p>
            </div>
          </div>
        </div>

        {/* Profit/Expenses Graph */}
        <div className="bg-opacity-0 border border-white rounded-xl p-4">
          <div className="flex justify-end mb-4">
            <button
              className={`text-white p-2 rounded-md ${dateRange === '7days' ? 'bg-blue-500' : 'bg-gray-800'}`}
              onClick={() => setDateRange('7days')}
            >
              Last 7 Days
            </button>
            <button
              className={`text-white p-2 rounded-md ml-2 ${dateRange === 'month' ? 'bg-blue-500' : 'bg-gray-800'}`}
              onClick={() => setDateRange('month')}
            >
              Last Month
            </button>
          </div>
          <Line data={getChartData()} options={chartOptions} />
        </div>


    
      </div>
    </DashboardLayout>
  );
}

export default FinancePage;