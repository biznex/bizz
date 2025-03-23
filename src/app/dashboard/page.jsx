// src/app/dashboard/page.jsx

"use client";

import React, { useState } from 'react';
import DashboardLayout from './components/dashboardlayout';
import { FaMoneyBillAlt, FaChartLine, FaChartBar, FaCalendarDay } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function DashboardPage() {
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

  const ordersChartOptions = {
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
        text: 'Orders Over Time',
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
  

  const lowStockProducts = [
    { product: 'Product A', quantity: 5 },
    { product: 'Product B', quantity: 2 },
    { product: 'Product C', quantity: 1},
    { product: 'Product D', quantity: 8 },
    { product: 'Product E', quantity: 3 },
    { product: 'Product F', quantity: 6 },
    { product: 'Product G', quantity: 4 },
    { product: 'Product H', quantity: 9 },
    { product: 'Product I', quantity: 2 },
    { product: 'Product J', quantity: 6 },
    { product: 'Product K', quantity: 4 },
    { product: 'Product L', quantity: 9 },
    { product: 'Product M', quantity: 2 },
  ];

  return (
    <DashboardLayout>
      <div className="bg-opacity-0 p-4 text-white">
        <h1 className="text-lg font-semibold mb-4">Today's Summary</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
          <div className="bg-opacity-0 border border-white rounded-xl p-4 flex items-center justify-between">
            <FaCalendarDay className="text-2xl" />
            <div className="text-right">
              <h2 className="text-sm font-semibold text-white">Orders</h2>
              <p className="text-lg text-white">25</p>
            </div>
          </div>

          {/* Profit/Expenses Graph */}
          <div className="col-span-2 bg-opacity-0 border border-white rounded-xl p-4">
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


         {/* Orders Graph */}
        <div className="col-span-2 bg-opacity-0 border border-white rounded-xl p-4">
          <h2 className="text-lg font-semibold text-white mb-4">Orders Over Time</h2>
          <Line
            data={{
              labels: dateRange === '7days' 
                ? ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']
                : ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
              datasets: [
                {
                  label: 'Orders',
                  data: dateRange === '7days' 
                    ? [5, 8, 6, 10, 12, 9, 15] 
                    : [30, 45, 40, 55],
                  fill: false,
                  backgroundColor: 'blue',
                  borderColor: 'rgba(0, 123, 255, 0.5)',
                },
              ],
            }}
            options={ordersChartOptions} 
          />
        </div>



          {/* Low Stock Products (Updated) */}
          <div className="col-span-2 bg-opacity-0 border border-white rounded-xl p-4 overflow-y-auto max-h-[300px]">
            <h2 className="text-lg font-semibold text-white mb-2">Low Stock</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-white">Product</th>
                  <th className="text-right text-white">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {lowStockProducts.map((item, index) => (
                  <tr key={index}>
                    <td className="text-left text-white">{item.product}</td>
                    <td className="text-right text-white">{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <style jsx>{`
              ::-webkit-scrollbar {
                width: 6px;
              }
              ::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 3px;
              }
              ::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.2);
                border-radius: 3px;
              }
              ::-webkit-scrollbar-thumb:hover {
                background: rgba(255, 255, 255, 0.3);
              }
              `}</style>
              </div>
            </div>
            </div>
            </DashboardLayout>
            );
            }

export default DashboardPage;