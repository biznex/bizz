// src/app/dashboard/finance/page.jsx

"use client";

import React, { useState } from 'react';
import DashboardLayout from '../components/dashboardlayout';
import { FaMoneyBillAlt, FaChartLine, FaChartBar } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function FinancePage() {
  const [dateRange, setDateRange] = useState('7days');
  
     // --- Account Payable Related ---
  const [accountsPayable, setAccountsPayable] = useState([
    { accountName: 'Supplier X', amount: 1000, date: '2023-11-15', paymentMethod: 'Cash' },
    { accountName: 'Supplier Y', amount: 1500, date: '2023-11-20', paymentMethod: 'Bank Transfer' },
    // Add more sample data here
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAccount, setNewAccount] = useState({
    accountName: '',
    amount: '',
    date: '',
    paymentMethod: 'Cash',
  });
  const [editIndex, setEditIndex] = useState(null); // Track the index of the item being edited
  const [editAccount, setEditAccount] = useState({ // Store the data being edited
    accountName: '',
    amount: '',
    date: '',
    paymentMethod: 'Cash',
  });
  // --- Account Payable Related ---



     // --- Account Receivable Related ---
    const [accountsReceivable, setAccountsReceivable] = useState([
      { customerName: 'Customer A', amount: 1200, dueDate: '2023-11-25', paymentStatus: 'Pending' },
      { customerName: 'Customer B', amount: 1800, dueDate: '2023-11-30', paymentStatus: 'Paid' },
      // Add sample receivable data
    ]);
    const [showAddReceivableForm, setShowAddReceivableForm] = useState(false);
    const [newReceivable, setNewReceivable] = useState({
      customerName: '',
      amount: '',
      dueDate: '',
      paymentStatus: 'Pending',
    });
    // --- Account Receivable Related ---


    // --- Salary Related ---
  const [employees, setEmployees] = useState([
    { name: 'John Doe', salary: 50000, role: 'Developer', paymentStatus: 'Pending' },
    { name: 'Jane Smith', salary: 60000, role: 'Manager', paymentStatus: 'Paid' },
    // Add more employee data
  ]);
  const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    salary: '',
    role: '',
    paymentStatus: 'Pending',
  });
  // --- Salary Related ---

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

   // --- Account Payable Related ---
   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAccount({ ...newAccount, [name]: value });
  };

  const handleAddAccount = () => {
    // Add the new account to the state
    setAccountsPayable([...accountsPayable, newAccount]);
    setShowAddForm(false);
    setNewAccount({ accountName: '', amount: '', date: '', paymentMethod: 'Cash' });
  };
  // --- Account Payable Related ---

  // --- Account Receivable Related ---
  const handleReceivableInputChange = (e) => {
    const { name, value } = e.target;
    setNewReceivable({ ...newReceivable, [name]: value });
  };

  const handleAddReceivable = () => {
    setAccountsReceivable([...accountsReceivable, newReceivable]);
    setShowAddReceivableForm(false);
    setNewReceivable({ customerName: '', amount: '', dueDate: '', paymentStatus: 'Pending' });
  };
  // --- Account Receivable Related ---


  // --- Salary Related ---
  const handleEmployeeInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleAddEmployee = () => {
    setEmployees([...employees, newEmployee]);
    setShowAddEmployeeForm(false);
    setNewEmployee({ name: '', salary: '', role: '', paymentStatus: 'Pending' });
  };
  // --- Salary Related ---





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

       {/* Accounts Payable Heading */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 mb-4">
  <h1 className="text-lg font-semibold mb-2 md:mb-0">Accounts Payable</h1>
  <button onClick={() => setShowAddForm(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Add New Account Payable
  </button>
</div>

{showAddForm && (
  <div className="bg-opacity-0 border border-white rounded-xl p-4 mb-4">
    {/* ... (Payable Form) ... */}
     <input
      type="text"
      name="accountName"
      placeholder="Account Name"
      value={newAccount.accountName}
      onChange={handleInputChange}
      className="bg-gray-800 border border-white rounded-md p-2 mb-2 w-full"
    />
    <input
      type="number"
      name="amount"
      placeholder="Amount"
      value={newAccount.amount}
      onChange={handleInputChange}
      className="bg-gray-800 border border-white rounded-md p-2 mb-2 w-full"
    />
    <input
      type="date"
      name="date"
      value={newAccount.date}
      onChange={handleInputChange}
      className="bg-gray-800 border border-white rounded-md p-2 mb-2 w-full"
    />
    <select
      name="paymentMethod"
      value={newAccount.paymentMethod}
      onChange={handleInputChange}
      className="bg-gray-800 border border-white rounded-md p-2 mb-2 w-full"
    >
      <option value="Cash">Cash</option>
      <option value="Cheque">Cheque</option>
      <option value="Bank Transfer">Bank Transfer</option>
    </select>
    <button onClick={handleAddAccount} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
      Add Account
    </button>
    <button onClick={() => setShowAddForm(false)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">
      Cancel
    </button>
  </div>
)}

{/* Accounts Payable Table Bento Box with White Borders */}
<div className="bg-opacity-0 border border-white rounded-xl p-4 overflow-y-auto max-h-[300px]">
  <table className="w-full border-collapse">
    <thead>
      <tr>
        <th className="text-left text-white border border-white p-2">Sl. No.</th>
        <th className="text-left text-white border border-white p-2">Account Name</th>
        <th className="text-right text-white border border-white p-2">Amount</th>
        <th className="text-left text-white border border-white p-2">Date</th>
        <th className="text-left text-white border border-white p-2">Payment Method</th>
      </tr>
    </thead>
    <tbody>
      {accountsPayable.map((item, index) => (
        <tr key={index}>
          <td className="text-left text-white border border-white p-2">{index + 1}</td>
          <td className="text-left text-white border border-white p-2">{item.accountName}</td>
          <td className="text-right text-white border border-white p-2">₹{item.amount}</td>
          <td className="text-left text-white border border-white p-2">{item.date}</td>
          <td className="text-left text-white border border-white p-2">{item.paymentMethod}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
{/* --- Account Payable Related --- */}

{/* Accounts Receivable Heading */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 mb-4">
  <h1 className="text-lg font-semibold mb-2 md:mb-0">Accounts Receivable</h1>
  <button onClick={() => setShowAddReceivableForm(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Add New Account Receivable
  </button>
</div>

        {showAddReceivableForm && (
          <div className="bg-opacity-0 border border-white rounded-xl p-4 mb-4">
            {/* ... (Receivable Form) ... */}
            <input
              type="text"
              name="customerName"
              placeholder="Customer Name"
              value={newReceivable.customerName}
              onChange={handleReceivableInputChange}
              className="bg-gray-800 border border-white rounded-md p-2 mb-2 w-full"
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={newReceivable.amount}
              onChange={handleReceivableInputChange}
              className="bg-gray-800 border border-white rounded-md p-2 mb-2 w-full"
            />
            <input
              type="date"
              name="dueDate"
              value={newReceivable.dueDate}
              onChange={handleReceivableInputChange}
              className="bg-gray-800 border border-white rounded-md p-2 mb-2 w-full"
            />
            <select
              name="paymentStatus"
              value={newReceivable.paymentStatus}
              onChange={handleReceivableInputChange}
              className="bg-gray-800 border border-white rounded-md p-2 mb-2 w-full"
            >
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
            </select>
            <button onClick={handleAddReceivable} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Add Receivable
            </button>
            <button onClick={() => setShowAddReceivableForm(false)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">
              Cancel
            </button>
          </div>
        )}

        {/* Accounts Receivable Table Bento Box with White Borders */}
        <div className="bg-opacity-0 border border-white rounded-xl p-4 overflow-y-auto max-h-[300px]">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left text-white border border-white p-2">Sl. No.</th>
                <th className="text-left text-white border border-white p-2">Customer Name</th>
                <th className="text-right text-white border border-white p-2">Amount</th>
                <th className="text-left text-white border border-white p-2">Due Date</th>
                <th className="text-left text-white border border-white p-2">Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {accountsReceivable.map((item, index) => (
                <tr key={index}>
                  <td className="text-left text-white border border-white p-2">{index + 1}</td>
                  <td className="text-left text-white border border-white p-2">{item.customerName}</td>
                  <td className="text-right text-white border border-white p-2">₹{item.amount}</td>
                  <td className="text-left text-white border border-white p-2">{item.dueDate}</td>
                  <td className="text-left text-white border border-white p-2">{item.paymentStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* --- Account Receivable Related --- */}




        {/* Salary Heading and Buttons */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 mb-4">
  <h1 className="text-lg font-semibold mb-2 md:mb-0">Salary</h1>
  <div className="flex flex-col md:flex-row mt-2 md:mt-0">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:mr-2 mb-2 md:mb-0">
      Edit Employee Details
    </button>
    <button
      onClick={() => setShowAddEmployeeForm(true)}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Add New Employee
    </button>
  </div>
</div>
          {/* Salary Heading and Buttons */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 mb-4">
  <h1 className="text-lg font-semibold mb-2 md:mb-0">Salary</h1>
  <div className="flex flex-col md:flex-row mt-2 md:mt-0">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:mr-2 mb-2 md:mb-0">
      Edit Employee Details
    </button>
    <button
      onClick={() => setShowAddEmployeeForm(true)}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Add New Employee
    </button>
  </div>
</div>

        {/* Add Employee Form */}
        {showAddEmployeeForm && (
          <div className="bg-opacity-0 border border-white rounded-xl p-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newEmployee.name}
              onChange={handleEmployeeInputChange}
              className="bg-gray-800 border border-white rounded-md p-2 mb-2 w-full"
            />
            <input
              type="number"
              name="salary"
              placeholder="Salary"
              value={newEmployee.salary}
              onChange={handleEmployeeInputChange}
              className="bg-gray-800 border border-white rounded-md p-2 mb-2 w-full"
            />
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={newEmployee.role}
              onChange={handleEmployeeInputChange}
              className="bg-gray-800 border border-white rounded-md p-2 mb-2 w-full"
            />
            <select
              name="paymentStatus"
              value={newEmployee.paymentStatus}
              onChange={handleEmployeeInputChange}
              className="bg-gray-800 border border-white rounded-md p-2 mb-2 w-full"
            >
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
            </select>
            <button
              onClick={handleAddEmployee}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Employee
            </button>
            <button
              onClick={() => setShowAddEmployeeForm(false)}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Cancel
            </button>
          </div>
        )}

        {/* Salary Table */}
        <div className="bg-opacity-0 border border-white rounded-xl p-4 overflow-y-auto max-h-[300px]">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left text-white border border-white p-2">Sl. No.</th>
                <th className="text-left text-white border border-white p-2">Name</th>
                <th className="text-right text-white border border-white p-2">Salary</th>
                <th className="text-left text-white border border-white p-2">Role</th>
                <th className="text-left text-white border border-white p-2">Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index}>
                  <td className="text-left text-white border border-white p-2">{index + 1}</td>
                  <td className="text-left text-white border border-white p-2">{employee.name}</td>
                  <td className="text-right text-white border border-white p-2">₹{employee.salary}</td>
                  <td className="text-left text-white border border-white p-2">{employee.role}</td>
                  <td className="text-left text-white border border-white p-2">{employee.paymentStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>








      </div>
    </DashboardLayout>
  );
}

export default FinancePage;