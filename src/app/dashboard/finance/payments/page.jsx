// src/app/dashboard/finance/payments/page.jsx

"use client";

import React, { useState } from "react";
import DashboardLayout from '../../components/dashboardlayout';

const FinancePayments = () => {
  const [accountsPayable, setAccountsPayable] = useState([
    { id: 1, accountName: 'John Doe', amount: 500, date: '2025-03-24', paymentMethod: 'Bank Transfer' },
    { id: 2, accountName: 'Jane Smith', amount: 750, date: '2025-03-25', paymentMethod: 'Credit Card' },
    { id: 3, accountName: 'Bob Johnson', amount: 300, date: '2025-03-26', paymentMethod: 'Cash' },
    // ... more data
  ]);

  const [accountsReceivable, setAccountsReceivable] = useState([
    { id: 1, accountName: 'Jane Smith', amount: 750, dueDate: '2025-04-10', status: 'Pending' },
    { id: 2, accountName: 'Bob Johnson', amount: 300, dueDate: '2025-04-12', status: 'Paid' },
    { id: 3, accountName: 'Alice Williams', amount: 900, dueDate: '2025-04-15', status: 'Overdue' },
    // ... more data
  ]);

  const [payableFormData, setPayableFormData] = useState({
    accountName: '',
    amount: '',
    date: '',
    paymentMethod: 'Payment Method',
  });

  const [receivableFormData, setReceivableFormData] = useState({
    accountName: '',
    amount: '',
    dueDate: '',
    status: 'Payment Status',
  });

  const [editingPayableId, setEditingPayableId] = useState(null);
  const [editingReceivableId, setEditingReceivableId] = useState(null);

  const handlePayableChange = (e) => {
    setPayableFormData({ ...payableFormData, [e.target.name]: e.target.value });
  };

  const handleReceivableChange = (e) => {
    setReceivableFormData({ ...receivableFormData, [e.target.name]: e.target.value });
  };

  const handleAddPayable = () => {
    if (editingPayableId) {
      setAccountsPayable(accountsPayable.map((item) =>
        item.id === editingPayableId ? { ...item, ...payableFormData } : item
      ));
      setEditingPayableId(null);
    } else {
      setAccountsPayable([...accountsPayable, { id: Date.now(), ...payableFormData }]);
    }
    setPayableFormData({ accountName: '', amount: '', date: '', paymentMethod: 'Payment Method' });
  };

  const handleAddReceivable = () => {
    if (editingReceivableId) {
      setAccountsReceivable(accountsReceivable.map((item) =>
        item.id === editingReceivableId ? { ...item, ...receivableFormData } : item
      ));
      setEditingReceivableId(null);
    } else {
      setAccountsReceivable([...accountsReceivable, { id: Date.now(), ...receivableFormData }]);
    }
    setReceivableFormData({ accountName: '', amount: '', dueDate: '', status: 'Payment Status' });
  };

  const handleDeletePayable = (id) => {
    setAccountsPayable(accountsPayable.filter((item) => item.id !== id));
    if (editingPayableId === id) {
      setEditingPayableId(null);
      setPayableFormData({ accountName: '', amount: '', date: '', paymentMethod: 'Payment Method' });
    }
  };

  const handleDeleteReceivable = (id) => {
    setAccountsReceivable(accountsReceivable.filter((item) => item.id !== id));
    if (editingReceivableId === id) {
      setEditingReceivableId(null);
      setReceivableFormData({ accountName: '', amount: '', dueDate: '', status: 'Payment Status' });
    }
  };

  const handleEditPayable = (item) => {
    setEditingPayableId(item.id);
    setPayableFormData({
      accountName: item.accountName,
      amount: item.amount.toString(),
      date: item.date,
      paymentMethod: item.paymentMethod,
    });
  };

  const handleEditReceivable = (item) => {
    setEditingReceivableId(item.id);
    setReceivableFormData({
      accountName: item.accountName,
      amount: item.amount.toString(),
      dueDate: item.dueDate,
      status: item.status,
    });
  };

  return (
    <DashboardLayout>
      <div className="bg-opacity-0 p-4 text-[#2F2F2F]">
        <h1 className="text-lg font-semibold mb-4">Payments</h1>
        <div className="flex flex-col gap-4 w-full">
          {/* Accounts Payable Section */}
          <div className="flex flex-col lg:flex-row gap-4 w-full">
            <div className="w-full lg:w-3/4 p-4 border border-[#2F2F2F] rounded-xl flex flex-col">
              <h2 className="text-lg font-semibold mb-4">Accounts Payable</h2>
              <div className="overflow-y-auto" style={{ maxHeight: '300px' }}>
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2">Sl. No</th>
                      <th className="border border-gray-300 p-2">Account Name</th>
                      <th className="border border-gray-300 p-2">Amount</th>
                      <th className="border border-gray-300 p-2">Date</th>
                      <th className="border border-gray-300 p-2">Payment Method</th>
                      <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accountsPayable.map((item) => (
                      <tr key={item.id}>
                        <td className="border border-gray-300 p-2">{item.id}</td>
                        <td className="border border-gray-300 p-2">{item.accountName}</td>
                        <td className="border border-gray-300 p-2">${item.amount.toFixed(2)}</td>
                        <td className="border border-gray-300 p-2">{item.date}</td>
                        <td className="border border-gray-300 p-2">{item.paymentMethod}</td>
                        <td className="border border-gray-300 p-2">
                          <button onClick={() => handleEditPayable(item)} className="text-blue-500 mr-2">Edit</button>
                          <button onClick={() => handleDeletePayable(item.id)} className="text-red-500">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full lg:w-1/4 p-4 border border-[#2F2F2F] rounded-xl flex flex-col">
            <h2 className="text-lg font-semibold mb-4">
                {editingPayableId ? 'Update Accounts Payable' : 'Add to Accounts Payable'}
              </h2>
              <div className="flex flex-col gap-2">
                <input type="text" name="accountName" value={payableFormData.accountName} onChange={handlePayableChange} placeholder="Account Name" className="p-2 border rounded text-[#2F2F2F]" />
                <input type="number" name="amount" value={payableFormData.amount} onChange={handlePayableChange} placeholder="Amount" className="p-2 border rounded text-[#2F2F2F]" />
                <input type="date" name="date" value={payableFormData.date} onChange={handlePayableChange} className="p-2 border rounded text-[#2F2F2F]" />
                <select name="paymentMethod" value={payableFormData.paymentMethod} onChange={handlePayableChange} className="p-2 border rounded text-[#2F2F2F]">
                  <option>Payment Method</option>
                  <option>Bank Transfer</option>
                  <option>Credit Card</option>
                  <option>Cash</option>
                </select>
                <button onClick={handleAddPayable} className="mt-2 p-2 bg-blue-500 text-white rounded">
                  {editingPayableId ? 'Update' : 'Add'}
                </button>
              </div>
            </div>
          </div>

          {/* Accounts Receivable Section */}
          <div className="flex flex-col lg:flex-row gap-4 w-full">
            <div className="w-full lg:w-3/4 p-4 border border-[#2F2F2F] rounded-xl flex flex-col">
              <h2 className="text-lg font-semibold mb-4">Accounts Receivable</h2>
              <div className="overflow-y-auto" style={{ maxHeight: '300px' }}>
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2">Sl. No</th>
                      <th className="border border-gray-300 p-2">Account Name</th>
                      <th className="border border-gray-300 p-2">Amount</th>
                      <th className="border border-gray-300 p-2">Due Date</th>
                      <th className="border border-gray-300 p-2">Status</th>
                      <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accountsReceivable.map((item) => (
                      <tr key={item.id}>
                        <td className="border border-gray-300 p-2">{item.id}</td>
                        <td className="border border-gray-300 p-2">{item.accountName}</td>
                        <td className="border border-gray-300 p-2">${item.amount.toFixed(2)}</td>
                        <td className="border border-gray-300 p-2">{item.dueDate}</td>
                        <td className="border border-gray-300 p-2">{item.status}</td>
                        <td className="border border-gray-300 p-2">
                          <button onClick={() => handleEditReceivable(item)} className="text-blue-500 mr-2">Edit</button>
                          <button onClick={() => handleDeleteReceivable(item.id)} className="text-red-500">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full lg:w-1/4 p-4 border border-[#2F2F2F] rounded-xl flex flex-col">
              <h2 className="text-lg font-semibold mb-4">
                {editingReceivableId ? 'Update Accounts Receivable' : 'Add to Accounts Receivable'}
              </h2>
              <div className="flex flex-col gap-2">
                <input type="text" name="accountName" value={receivableFormData.accountName} onChange={handleReceivableChange} placeholder="Account Name" className="p-2 border rounded text-[#2F2F2F]" />
                <input type="number" name="amount" value={receivableFormData.amount} onChange={handleReceivableChange} placeholder="Amount" className="p-2 border rounded text-[#2F2F2F]" />
                <input type="date" name="dueDate" value={receivableFormData.dueDate} onChange={handleReceivableChange} className="p-2 border rounded text-[#2F2F2F]" />
                <select name="status" value={receivableFormData.status} onChange={handleReceivableChange} className="p-2 border rounded text-[#2F2F2F]">
                  <option>Payment Status</option>
                  <option>Pending</option>
                  <option>Paid</option>
                  <option>Overdue</option>
                </select>
                <button onClick={handleAddReceivable} className="mt-2 p-2 bg-blue-500 text-white rounded">
                  {editingReceivableId ? 'Update' : 'Add'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FinancePayments;