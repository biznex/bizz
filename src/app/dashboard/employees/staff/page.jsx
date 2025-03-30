// src/app/dashboard/employees/staff/page.jsx

"use client";

import React, { useState } from "react";
import DashboardLayout from '../../components/dashboardlayout';

const EmployeesStaff = () => {
  const [staff, setStaff] = useState([
    { id: 1, name: 'John Doe', joinDate: '2023-01-15', role: 'Manager', salary: 5000, email: 'john.doe@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', joinDate: '2023-03-01', role: 'Developer', salary: 4000, email: 'jane.smith@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Bob Johnson', joinDate: '2023-05-10', role: 'Designer', salary: 3500, email: 'bob.johnson@example.com', phone: '555-123-4567' },
    // Add more placeholder data as needed
  ]);

  const [staffFormData, setStaffFormData] = useState({
    name: '',
    joinDate: '',
    role: '',
    salary: '',
    email: '',
    phone: '',
  });

  const [editingStaffId, setEditingStaffId] = useState(null);

  const handleStaffChange = (e) => {
    setStaffFormData({ ...staffFormData, [e.target.name]: e.target.value });
  };

  const handleAddStaff = () => {
    if (editingStaffId) {
      setStaff(staff.map((employee) =>
        employee.id === editingStaffId ? { ...employee, ...staffFormData } : employee
      ));
      setEditingStaffId(null);
    } else {
      setStaff([...staff, { id: Date.now(), ...staffFormData }]);
    }
    setStaffFormData({ name: '', joinDate: '', role: '', salary: '', email: '', phone: '' });
  };

  const handleDeleteStaff = (id) => {
    setStaff(staff.filter((employee) => employee.id !== id));
    if (editingStaffId === id) {
      setEditingStaffId(null);
      setStaffFormData({ name: '', joinDate: '', role: '', salary: '', email: '', phone: '' });
    }
  };

  const handleEditStaff = (employee) => {
    setEditingStaffId(employee.id);
    setStaffFormData({
      name: employee.name,
      joinDate: employee.joinDate,
      role: employee.role,
      salary: employee.salary.toString(),
      email: employee.email,
      phone: employee.phone,
    });
  };

  return (
    <DashboardLayout>
      <div className="p-4 text-[#2F2F2F]">
        <h1 className="text-lg font-semibold mb-4">Staff</h1>
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="w-full lg:w-3/4 p-4 border border-[#2F2F2F] rounded-xl flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Employee Details</h2>
            <div className="overflow-y-auto" style={{ maxHeight: '400px' }}>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">Sl. No</th>
                    <th className="border border-gray-300 p-2">Name</th>
                    <th className="border border-gray-300 p-2">Join Date</th>
                    <th className="border border-gray-300 p-2">Role</th>
                    <th className="border border-gray-300 p-2">Salary</th>
                    <th className="border border-gray-300 p-2">Email</th>
                    <th className="border border-gray-300 p-2">Phone</th>
                    <th className="border border-gray-300 p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {staff.map((employee) => (
                    <tr key={employee.id}>
                      <td className="border border-gray-300 p-2">{employee.id}</td>
                      <td className="border border-gray-300 p-2">{employee.name}</td>
                      <td className="border border-gray-300 p-2">{employee.joinDate}</td>
                      <td className="border border-gray-300 p-2">{employee.role}</td>
                      <td className="border border-gray-300 p-2">${employee.salary}</td>
                      <td className="border border-gray-300 p-2">{employee.email}</td>
                      <td className="border border-gray-300 p-2">{employee.phone}</td>
                      <td className="border border-gray-300 p-2">
                        <button onClick={() => handleEditStaff(employee)} className="text-blue-500 mr-2">Edit</button>
                        <button onClick={() => handleDeleteStaff(employee.id)} className="text-red-500">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full lg:w-1/4 p-4 border border-[#2F2F2F] rounded-xl flex flex-col">
            <h2 className="text-lg font-semibold mb-4">
              {editingStaffId ? 'Update Employee' : 'Add Employee'}
            </h2>
            <div className="flex flex-col gap-2">
              <input type="text" name="name" value={staffFormData.name} onChange={handleStaffChange} placeholder="Name" className="p-2 border rounded text-[#2F2F2F]" />
              <input type="date" name="joinDate" value={staffFormData.joinDate} onChange={handleStaffChange} className="p-2 border rounded text-[#2F2F2F]" />
              <input type="text" name="role" value={staffFormData.role} onChange={handleStaffChange} placeholder="Role" className="p-2 border rounded text-[#2F2F2F]" />
              <input type="number" name="salary" value={staffFormData.salary} onChange={handleStaffChange} placeholder="Salary" className="p-2 border rounded text-[#2F2F2F]" />
              <input type="email" name="email" value={staffFormData.email} onChange={handleStaffChange} placeholder="Email" className="p-2 border rounded text-[#2F2F2F]" />
              <input type="tel" name="phone" value={staffFormData.phone} onChange={handleStaffChange} placeholder="Phone" className="p-2 border rounded text-[#2F2F2F]" />
              <button onClick={handleAddStaff} className="mt-2 p-2 bg-blue-500 text-white rounded">
                {editingStaffId ? 'Update' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EmployeesStaff;