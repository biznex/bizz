// src/app/dashboard/page.jsx

"use client";

import React, { useState } from 'react';
import DashboardLayout from '../../components/dashboardlayout';


import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'; // Import arrow icons

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function FinanceOverviewPage() {
  const [profitDateRange, setProfitDateRange] = useState('7days');
  const [orderDateRange, setOrderDateRange] = useState('7days');


  const getChartData = () => {
    switch (profitDateRange) {
      case "24hours":
        return {
          labels: ["1 AM", "4 AM", "7 AM", "10 AM", "1 PM", "4 PM", "7 PM", "10 PM"],
          datasets: [
            {
              label: "Profit",
              data: [5, 12, 8, 15, 20, 14, 10, 18],
              fill: false,
              backgroundColor: "green",
              borderColor: "rgba(0, 255, 0, 0.5)",
            },
            {
              label: "Expenses",
              data: [3, 6, 5, 8, 12, 10, 7, 9],
              fill: false,
              backgroundColor: "red",
              borderColor: "rgba(255, 0, 0, 0.5)",
            },
          ],
        };

      case "7days":
        return {
          labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
          datasets: [
            {
              label: "Profit",
              data: [10, 15, 8, 12, 18, 14, 20],
              fill: false,
              backgroundColor: "green",
              borderColor: "rgba(0, 255, 0, 0.5)",
            },
            {
              label: "Expenses",
              data: [5, 7, 3, 6, 9, 7, 10],
              fill: false,
              backgroundColor: "red",
              borderColor: "rgba(255, 0, 0, 0.5)",
            },
          ],
        };

        case "1month":
  return {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`), // Generates labels for Day 1 to Day 30
    datasets: [
      {
        label: "Profit",
        data: [100, 120, 130, 110, 150, 160, 140, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390], // Example profit data for 30 days
        fill: false,
        backgroundColor: "green",
        borderColor: "rgba(0, 255, 0, 0.5)",
      },
      {
        label: "Expenses",
        data: [80, 90, 85, 95, 100, 110, 105, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225], // Example expenses data for 30 days
        fill: false,
        backgroundColor: "red",
        borderColor: "rgba(255, 0, 0, 0.5)",
      },
    ],
  };   
        case "1year":
          return {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
              {
                label: "Profit",
                data: [200, 300, 250, 400, 500, 450, 600, 700, 650, 750, 800, 900],
                fill: false,
                backgroundColor: "green",
                borderColor: "rgba(0, 255, 0, 0.5)",
              },
              {
                label: "Expenses",
                data: [100, 150, 125, 200, 250, 225, 300, 350, 325, 375, 400, 450],
                fill: false,
                backgroundColor: "red",
                borderColor: "rgba(255, 0, 0, 0.5)",
              },
            ],
          };

      default:
        return {};
    }
  };

  // Chart options (set styles, tooltips, grid colors)
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#2F2F2F",
        },
      },
      title: {
        display: true,
        text: "Profit/Expenses Over Time",
        color: "#2F2F2F",
      },
      tooltip: {
        titleColor: "#2F2F2F",
        bodyColor: "#2F2F2F",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#2F2F2F",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      y: {
        ticks: {
          color: "#2F2F2F",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };

  const getOrdersData = (dateRange) => {
    const labels = {
      "24hours": ["1 AM", "4 AM", "7 AM", "10 AM", "1 PM", "4 PM", "7 PM", "10 PM"],
      "7days": ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      "1month": Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      "1year": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    };
  
    const data = {
      "24hours": [5, 7, 6, 8, 10, 12, 9, 11],
      "7days": [5, 8, 6, 10, 12, 9, 15],
      "1month": Array.from({ length: 30 }, () => Math.floor(Math.random() * 50) + 10),
      "1year": [200, 220, 250, 280, 300, 320, 350, 370, 390, 400, 420, 12],
    };
  
    return {
      labels: labels[dateRange] || [],
      datasets: [
        {
          label: "Orders",
          data: data[dateRange] || [],
          fill: true,
          backgroundColor: "rgba(0, 123, 255, 0.2)",
          borderColor: "rgba(0, 123, 255, 0.5)",
          pointBackgroundColor: "blue",
          tension: 0.4,
        },
      ],
    };
  };
  
  const ordersChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#2F2F2F",
        },
      },
      title: {
        display: true,
        text: "Orders Over Time",
        color: "#2F2F2F",
      },
      tooltip: {
        titleColor: "#2F2F2F",
        bodyColor: "#2F2F2F",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#2F2F2F",
        },
        grid: {
          color: "rgba(47, 47, 47, 0.1)",
        },
      },
      y: {
        ticks: {
          color: "#2F2F2F",
        },
        grid: {
          color: "rgba(47, 47, 47, 0.1)",
        },
      },
    },
  };
  
  

  return (
    <DashboardLayout>
      <div className="bg-opacity-0 p-4 text-[#2F2F2F]">
  <h1 className="text-lg font-semibold mb-4">Today's Summary</h1>

  {/* Bento Boxes (3 Columns) */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div className="bg-opacity-0 border border-[#2F2F2F] rounded-xl p-4">
      <div className="text-left">
        <h2 className="text-sm font-semibold text-[#2F2F2F]">Income</h2>
        <p className="text-lg text-[#2F2F2F]">₹1,500.00</p>
        <p className="text-xs text-[#2F2F2F]">
          Compared to last week:
          <span className="ml-1 text-green-500 flex items-center">
            +10% <FaArrowUp className="ml-1" />
          </span>
        </p>
      </div>
    </div>

    <div className="bg-opacity-0 border border-[#2F2F2F] rounded-xl p-4">
      <div className="text-left">
        <h2 className="text-sm font-semibold text-[#2F2F2F]">Profit</h2>
        <p className="text-lg text-[#2F2F2F]">₹800.00</p>
        <p className="text-xs text-[#2F2F2F]">
          Compared to last week:
          <span className="ml-1 text-red-500 flex items-center">
            -5% <FaArrowDown className="ml-1" />
          </span>
        </p>
      </div>
    </div>

    <div className="bg-opacity-0 border border-[#2F2F2F] rounded-xl p-4">
      <div className="text-left">
        <h2 className="text-sm font-semibold text-[#2F2F2F]">Expenses</h2>
        <p className="text-lg text-[#2F2F2F]">₹700.00</p>
        <p className="text-xs text-[#2F2F2F]">
          Compared to last week:
          <span className="ml-1 text-green-500 flex items-center">
            +2% <FaArrowUp className="ml-1" />
          </span>
        </p>
      </div>
    </div>
  </div>

  {/* Graphs (2 Columns) */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    
    {/* Profit/Expenses Graph */}
    <div className="bg-opacity-0 border border-[#2F2F2F] rounded-xl p-4">
      <div className="flex justify-end mb-4">
        <select
          className="bg-white text-[#2F2F2F] border border-[#2F2F2F] p-2 rounded-md"
          value={profitDateRange}
          onChange={(e) => setProfitDateRange(e.target.value)}
        >
          <option value="24hours">Last 24 Hours</option>
          <option value="7days">Last Week</option>
          <option value="1month">Last Month</option>
          <option value="1year">Last Year</option>
        </select>
      </div>

      <h2 className="text-lg font-semibold text-[#2F2F2F] mb-4">Profit & Expenses Over Time</h2>

      <Line
        data={getChartData(profitDateRange)}
        options={{
          ...chartOptions,
          elements: { line: { tension: 0.4 } },
        }}
        dataset={{
          fill: true,
          backgroundColor: 'rgba(0, 123, 255, 0.2)',
          borderColor: 'rgba(0, 123, 255, 0.5)',
          pointBackgroundColor: 'blue',
        }}
      />
    </div>

    {/* Orders Graph */}
    <div className="bg-opacity-0 border border-[#2F2F2F] rounded-xl p-4">
      <div className="flex justify-end mb-4">
        <select
          className="bg-white text-[#2F2F2F] border border-[#2F2F2F] p-2 rounded-md"
          value={orderDateRange}
          onChange={(e) => setOrderDateRange(e.target.value)}
        >
          <option value="24hours">Last 24 Hours</option>
          <option value="7days">Last Week</option>
          <option value="1month">Last Month</option>
          <option value="1year">Last Year</option>
        </select>
      </div>

      <h2 className="text-lg font-semibold text-[#2F2F2F] mb-4">Orders Over Time</h2>

      <Line data={getOrdersData(orderDateRange)} options={ordersChartOptions} />
    </div>

  </div>
</div>

    </DashboardLayout>
  );
}

export default FinanceOverviewPage;