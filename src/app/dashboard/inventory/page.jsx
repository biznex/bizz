// src/app/dashboard/inventory/page.jsx

"use client";

import React, { useState } from 'react';
import DashboardLayout from '../components/dashboardlayout';
import { FaBoxes, FaExclamationTriangle, FaTimesCircle, FaPlus, FaMinus, FaSyncAlt, FaListAlt, FaFileExport } from 'react-icons/fa';
import jsPDF from 'jspdf';
import * as autoTable from 'jspdf-autotable'; //Try this import

function InventoryPage() {
  const totalProducts = 150;
  const lowStockProducts = 20;
  const outOfStockProducts = 5;

  const [inventoryData, setInventoryData] = useState([
    { id: 'INV001', name: 'Laptop', category: 'Electronics', quantity: 50, price: 60000, status: 'In Stock', lastUpdated: '2023-11-25' },
    { id: 'INV002', name: 'Mouse', category: 'Accessories', quantity: 200, price: 500, status: 'In Stock', lastUpdated: '2023-11-24' },
    { id: 'INV003', name: 'Keyboard', category: 'Accessories', quantity: 15, price: 1200, status: 'Low Stock', lastUpdated: '2023-11-23' },
    { id: 'INV004', name: 'Monitor', category: 'Electronics', quantity: 5, price: 15000, status: 'Out of Stock', lastUpdated: '2023-11-22' },
    { id: 'INV005', name: 'Printer', category: 'Office Supplies', quantity: 30, price: 8000, status: 'In Stock', lastUpdated: '2023-11-21' },
    { id: 'INV006', name: 'Headphones', category: 'Accessories', quantity: 100, price: 2500, status: 'In Stock', lastUpdated: '2023-11-20' },
    { id: 'INV007', name: 'Webcam', category: 'Electronics', quantity: 10, price: 3000, status: 'Low Stock', lastUpdated: '2023-11-19' },
    { id: 'INV008', name: 'Paper', category: 'Office Supplies', quantity: 500, price: 200, status: 'In Stock', lastUpdated: '2023-11-18' },
  ]);

  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    category: '',
    quantity: '',
    price: '',
    status: 'In Stock',
    lastUpdated: new Date().toISOString().split('T')[0],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    setInventoryData([...inventoryData, newProduct]);
    setShowAddProductForm(false);
    setNewProduct({
      id: '',
      name: '',
      category: '',
      quantity: '',
      price: '',
      status: 'In Stock',
      lastUpdated: new Date().toISOString().split('T')[0],
    });
  };

  const amountDueData = [
    { amount: 1000, date: '2023-11-15' },
    { amount: 1500, date: '2023-11-20' },
  ];

  
  const exportInventoryToPDF = () => {
    const doc = new jsPDF();
    console.log(doc); // Add this line - ONLY ONCE!
    doc.autoTable({
      head: [['Product ID', 'Product Name', 'Category', 'Quantity', 'Unit Price (₹)', 'Stock Status', 'Last Updated']],
      body: inventoryData.map((item) => [
        item.id,
        item.name,
        item.category,
        item.quantity,
        item.price,
        item.status,
        item.lastUpdated,
      ]),
    });
    doc.save('inventory.pdf');
  };

  const exportAmountDueToPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['Amount Due', 'Date']],
      body: amountDueData.map((item) => [item.amount, item.date]),
    });
    doc.save('amount_due.pdf');
  };

  return (
    <DashboardLayout>
      <div className="p-4 text-white">
        {/* Heading Section Start */}
        <h1 className="text-2xl font-semibold mb-4">Inventory Dashboard</h1>
        {/* Heading Section End */}

        {/* Bento Boxes Section Start */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-opacity-0 border border-white rounded-xl p-4 flex items-center justify-between">
            <FaBoxes className="text-3xl" />
            <div className="text-right">
              <h2 className="text-sm font-semibold">Total Products</h2>
              <p className="text-lg">{totalProducts}</p>
            </div>
          </div>
          <div className="bg-opacity-0 border border-white rounded-xl p-4 flex items-center justify-between">
            <FaExclamationTriangle className="text-3xl text-yellow-500" />
            <div className="text-right">
              <h2 className="text-sm font-semibold">Low Stock</h2>
              <p className="text-lg">{lowStockProducts}</p>
            </div>
          </div>
          <div className="bg-opacity-0 border border-white rounded-xl p-4 flex items-center justify-between">
            <FaTimesCircle className="text-3xl text-red-500" />
            <div className="text-right">
              <h2 className="text-sm font-semibold">Out of Stock</h2>
              <p className="text-lg">{outOfStockProducts}</p>
            </div>
          </div>
        </div>
        {/* Bento Boxes Section End */}

        {/* Button Section Start */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setShowAddProductForm(true)}
            className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-3 rounded flex items-center transition-colors duration-200"
          >
            <FaPlus className="mr-2 text-sm" /> Add Product
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-3 rounded flex items-center transition-colors duration-200">
            <FaMinus className="mr-2 text-sm" /> Remove Product
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-3 rounded flex items-center transition-colors duration-200">
            <FaSyncAlt className="mr-2 text-sm" /> Update Stock
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-3 rounded flex items-center transition-colors duration-200">
            <FaListAlt className="mr-2 text-sm" /> Manage Categories
          </button>
          <button
            onClick={exportInventoryToPDF}
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-3 rounded flex items-center transition-colors duration-200"
          >
            <FaFileExport className="mr-2 text-sm" /> Export Inventory
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-3 rounded flex items-center transition-colors duration-200">
            <FaFileExport className="mr-2 text-sm" /> Export Low Stock
          </button>
          <button
            onClick={exportAmountDueToPDF}
            className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-3 rounded flex items-center transition-colors duration-200"
          >
            <FaFileExport className="mr-2 text-sm" /> Export Amount Due
          </button>
        </div>
        {/* Button Section End */}

        {/* Add Product Form Section Start */}
        {showAddProductForm && (
          <div className="bg-opacity-0 border border-white rounded-xl p-4 mb-4">
            <input
              type="text"
              name="id"
              placeholder="Product ID"
              value={newProduct.id}
              onChange={handleInputChange}
              className="bg-gray-800 border border-white rounded-md p-2 mb-2 w-full"
            />
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={handleInputChange}
              className="bg-gray-800 border border-white rounded-md p-2 mb-2 w-full"
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={newProduct.category}
              onChange={handleInputChange}
              className="bg-gray-800 border border-white rounded-md p-2 mb-2 w-full"
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={newProduct.quantity}
              onChange={handleInputChange}
              className="bg-gray-800 border border-white rounded-md p-2 mb-2 w-full"
            />
            <input
              type="number"
              name="price"
              placeholder="Unit Price (₹)"
              value={newProduct.price}
              onChange={handleInputChange}
              className="bg-gray-800 border border-white rounded-md p-2 mb-2 w-full"
            />
            <select
              name="status"
              value={newProduct.status}
              onChange={handleInputChange}
              className="bg-gray-800 border border-white rounded-md p-2 mb-2 w-full"
            >
              <option value="In Stock">In Stock</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
            <input
              type="date"
              name="lastUpdated"
              value={newProduct.lastUpdated}
              onChange={handleInputChange}
              className="bg-gray-800 border border-white rounded-md p-2 mb-2 w-full"
            />
            <button
              onClick={handleAddProduct}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Product
            </button>
            <button
              onClick={() => setShowAddProductForm(false)}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Cancel
            </button>
          </div>
        )}
        {/* Add Product Form Section End */}

        {/* Inventory Table Section Start */}
        <div className="bg-opacity-0 border border-white rounded-xl p-4 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-white p-2">Product ID</th>
                <th className="border border-white p-2">Product Name</th>
                <th className="border border-white p-2">Category</th>
                <th className="border border-white p-2">Quantity</th>
                <th className="border border-white p-2">Unit Price (₹)</th>
                <th className="border border-white p-2">Stock Status</th>
                <th className="border border-white p-2">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((item) => (
                <tr key={item.id}>
                  <td className="border border-white p-2">{item.id}</td>
                  <td className="border border-white p-2">{item.name}</td>
                  <td className="border border-white p-2">{item.category}</td>
                  <td className="border border-white p-2">{item.quantity}</td>
                  <td className="border border-white p-2">{item.price}</td>
                  <td className="border border-white p-2">{item.status}</td>
                  <td className="border border-white p-2">{item.lastUpdated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Inventory Table Section End */}
      </div>
    </DashboardLayout>
  );
}

export default InventoryPage;