// src/app/dashboard/finance/salary/page.jsx

"use client";

import React, { useState } from "react";
import DashboardLayout from '../../components/dashboardlayout';

const FinanceSalary = () => {
  const [salaries, setSalaries] = useState([
    { id: 1, employeeName: 'John Doe', amount: 3000, paymentDate: '2025-03-24', paymentMethod: 'Bank Transfer' },
    { id: 2, employeeName: 'Jane Smith', amount: 3500, paymentDate: '2025-03-25', paymentMethod: 'Credit Card' },
    { id: 3, employeeName: 'Bob Johnson', amount: 2800, paymentDate: '2025-03-26', paymentMethod: 'Cash' },
    // Add more placeholder data as needed
  ]);

  const [salaryFormData, setSalaryFormData] = useState({
    employeeName: '',
    amount: '',
    paymentDate: '',
    paymentMethod: 'Payment Method', // Default value
  });

  const [editingSalaryId, setEditingSalaryId] = useState(null);

  const handleSalaryChange = (e) => {
    setSalaryFormData({ ...salaryFormData, [e.target.name]: e.target.value });
  };

  const handleAddSalary = () => {
    if (editingSalaryId) {
      setSalaries(salaries.map((salary) =>
        salary.id === editingSalaryId ? { ...salary, ...salaryFormData } : salary
      ));
      setEditingSalaryId(null);
    } else {
      setSalaries([...salaries, { id: Date.now(), ...salaryFormData }]);
    }
    setSalaryFormData({ employeeName: '', amount: '', paymentDate: '', paymentMethod: 'Payment Method' }); // Reset to default
  };

  const handleDeleteSalary = (id) => {
    setSalaries(salaries.filter((salary) => salary.id !== id));
    if (editingSalaryId === id) {
      setEditingSalaryId(null);
      setSalaryFormData({ employeeName: '', amount: '', paymentDate: '', paymentMethod: 'Payment Method' }); // Reset to default
    }
  };

  const handleEditSalary = (salary) => {
    setEditingSalaryId(salary.id);
    setSalaryFormData({
      employeeName: salary.employeeName,
      amount: salary.amount.toString(),
      paymentDate: salary.paymentDate,
      paymentMethod: salary.paymentMethod,
    });
  };

  return (
    <DashboardLayout>
      <div className="p-4 text-[#2F2F2F]">
        <h1 className="text-lg font-semibold mb-4">Salaries</h1>
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="w-full lg:w-3/4 p-4 border border-[#2F2F2F] rounded-xl flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Salary Payments</h2>
            <div className="overflow-y-auto" style={{ maxHeight: '400px' }}>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">Sl. No</th>
                    <th className="border border-gray-300 p-2">Employee Name</th>
                    <th className="border border-gray-300 p-2">Amount</th>
                    <th className="border border-gray-300 p-2">Payment Date</th>
                    <th className="border border-gray-300 p-2">Payment Method</th>
                    <th className="border border-gray-300 p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {salaries.map((salary) => (
                    <tr key={salary.id}>
                      <td className="border border-gray-300 p-2">{salary.id}</td>
                      <td className="border border-gray-300 p-2">{salary.employeeName}</td>
                      <td className="border border-gray-300 p-2">${salary.amount.toFixed(2)}</td>
                      <td className="border border-gray-300 p-2">{salary.paymentDate}</td>
                      <td className="border border-gray-300 p-2">{salary.paymentMethod}</td>
                      <td className="border border-gray-300 p-2">
                        <button onClick={() => handleEditSalary(salary)} className="text-blue-500 mr-2">Edit</button>
                        <button onClick={() => handleDeleteSalary(salary.id)} className="text-red-500">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full lg:w-1/4 p-4 border border-[#2F2F2F] rounded-xl flex flex-col">
            <h2 className="text-lg font-semibold mb-4">
              {editingSalaryId ? 'Update Salary' : 'Add Salary'}
            </h2>
            <div className="flex flex-col gap-2">
              <input type="text" name="employeeName" value={salaryFormData.employeeName} onChange={handleSalaryChange} placeholder="Employee Name" className="p-2 border rounded text-[#2F2F2F]" />
              <input type="number" name="amount" value={salaryFormData.amount} onChange={handleSalaryChange} placeholder="Amount" className="p-2 border rounded text-[#2F2F2F]" />
              <input type="date" name="paymentDate" value={salaryFormData.paymentDate} onChange={handleSalaryChange} className="p-2 border rounded text-[#2F2F2F]" />
              <select name="paymentMethod" value={salaryFormData.paymentMethod} onChange={handleSalaryChange} className="p-2 border rounded text-[#2F2F2F]">
                <option>Payment Method</option>
                <option>Bank Transfer</option>
                <option>Credit Card</option>
                <option>Cash</option>
              </select>
              <button onClick={handleAddSalary} className="mt-2 p-2 bg-blue-500 text-white rounded">
                {editingSalaryId ? 'Update' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FinanceSalary;