// src/app/dashboard/finance/transactions/page.jsx

"use client";

import React, { useState } from 'react';
import DashboardLayout from '../../components/dashboardlayout';

const FinanceTransactionsPage = () => {
  const [manualTransactions, setManualTransactions] = useState([
    { id: 1, date: '2023-10-26', description: 'Payment from Client A', amount: 500, type: 'Income' },
    { id: 2, date: '2023-10-25', description: 'Office Supplies', amount: 100, type: 'Expense' },
    { id: 3, date: '2023-10-24', description: 'Salary Payment', amount: 2000, type: 'Expense' },
  ]);

  const [onlineTransactions, setOnlineTransactions] = useState([
    { id: 4, date: '2023-10-27', description: 'Online Sale #123', amount: 150, type: 'Income' },
    { id: 5, date: '2023-10-27', description: 'Online Sale #124', amount: 200, type: 'Income' },
  ]);

  const [formData, setFormData] = useState({
    date: '',
    description: '',
    amount: '',
    type: 'Income',
  });

  const [editingId, setEditingId] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddTransaction = () => {
    if (editingId) {
      setManualTransactions(manualTransactions.map((transaction) =>
        transaction.id === editingId ? { ...transaction, ...formData } : transaction
      ));
      setEditingId(null);
    } else {
      setManualTransactions([
        ...manualTransactions,
        { id: Date.now(), ...formData },
      ]);
    }
    setFormData({ date: '', description: '', amount: '', type: 'Income' });
  };

  const handleDeleteTransaction = (id) => {
    setManualTransactions(manualTransactions.filter((transaction) => transaction.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setFormData({ date: '', description: '', amount: '', type: 'Income' });
    }
  };

  const handleEditTransaction = (transaction) => {
    setEditingId(transaction.id);
    setFormData({
      date: transaction.date,
      description: transaction.description,
      amount: transaction.amount.toString(),
      type: transaction.type,
    });
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Finance Transactions</h1>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Manual Transactions (3/4) */}
          <div className="w-full lg:w-3/4 bg-white border border-gray-300 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Manual Transactions</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2">Date</th>
                    <th className="border border-gray-300 p-2">Description</th>
                    <th className="border border-gray-300 p-2">Amount</th>
                    <th className="border border-gray-300 p-2">Type</th>
                    <th className="border border-gray-300 p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {manualTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="border border-gray-300 p-2">{formatDate(transaction.date)}</td>
                      <td className="border border-gray-300 p-2">{transaction.description}</td>
                      <td className="border border-gray-300 p-2">${transaction.amount.toFixed(2)}</td>
                      <td className="border border-gray-300 p-2">{transaction.type}</td>
                      <td className="border border-gray-300 p-2">
                        <button onClick={() => handleEditTransaction(transaction)} className="text-blue-500 mr-2">Edit</button>
                        <button onClick={() => handleDeleteTransaction(transaction.id)} className="text-red-500">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Update Transaction Form (1/4) */}
          <div className="w-full lg:w-1/4 bg-white border border-gray-300 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">
              {editingId ? 'Update Transaction' : 'Add Transaction'}
            </h2>
            <div className="flex flex-col gap-2">
              <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="border border-gray-300 p-2 rounded" />
              <input type="text" name="description" value={formData.description} onChange={handleInputChange} className="border border-gray-300 p-2 rounded" placeholder="Description" />
              <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} className="border border-gray-300 p-2 rounded" placeholder="Amount" />
              <select name="type" value={formData.type} onChange={handleInputChange} className="border border-gray-300 p-2 rounded">
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
              <button onClick={handleAddTransaction} className="bg-blue-500 text-white p-2 rounded">
                {editingId ? 'Update' : 'Add'}
              </button>
            </div>
          </div>
        </div>

        {/* Online Transactions Table (Full Width) */}
        <div className="w-full bg-white border border-gray-300 rounded-lg p-4 mt-4">
          <h2 className="text-lg font-semibold mb-4">Online Transactions</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Date</th>
                  <th className="border border-gray-300 p-2">Description</th>
                  <th className="border border-gray-300 p-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {onlineTransactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="border border-gray-300 p-2">{formatDate(transaction.date)}</td>
                    <td className="border border-gray-300 p-2">{transaction.description}</td>
                    <td className="border border-gray-300 p-2">${transaction.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FinanceTransactionsPage;