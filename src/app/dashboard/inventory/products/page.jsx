"use client";

import React, { useState } from 'react';
import DashboardLayout from '../../components/dashboardlayout';

function InventoryPage() {
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [showUpdateStockForm, setShowUpdateStockForm] = useState(false);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'non-active', 'low-stock'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const products = [
    { id: 1, name: 'Product A', status: 'active', stock: 100, category: 'Electronics' },
    { id: 2, name: 'Product B', status: 'inactive', stock: 0, category: 'Clothing' },
    { id: 3, name: 'Product C', status: 'active', stock: 5, category: 'Books' },
    { id: 4, name: 'Product D', status: 'active', stock: 200, category: 'Electronics' },
    { id: 5, name: 'Product E', status: 'inactive', stock: 0, category: 'Home' },
    { id: 6, name: 'Product F', status: 'active', stock: 10, category: 'Books' },
    { id: 7, name: 'Product G', status: 'inactive', stock: 3, category: 'Clothing' },
    { id: 8, name: 'Product H', status: 'active', stock: 150, category: 'Electronics' },
    { id: 9, name: 'Product I', status: 'inactive', stock: 0, category: 'Home' },
    { id: 10, name: 'Product J', status: 'active', stock: 25, category: 'Books' },
    { id: 11, name: 'Product K', status: 'inactive', stock: 1, category: 'Clothing' },
    { id: 12, name: 'Product L', status: 'active', stock: 300, category: 'Electronics' },
    { id: 13, name: 'Product M', status: 'inactive', stock: 0, category: 'Home' },
    { id: 14, name: 'Product N', status: 'active', stock: 30, category: 'Books' },
    { id: 15, name: 'Product O', status: 'inactive', stock: 2, category: 'Clothing' },
    { id: 16, name: 'Product P', status: 'active', stock: 180, category: 'Electronics' },
    { id: 17, name: 'Product Q', status: 'inactive', stock: 0, category: 'Home' },
    { id: 18, name: 'Product R', status: 'active', stock: 35, category: 'Books' },
    { id: 19, name: 'Product S', status: 'inactive', stock: 4, category: 'Clothing' },
    { id: 20, name: 'Product T', status: 'active', stock: 220, category: 'Electronics' },
    { id: 21, name: 'Product U', status: 'inactive', stock: 0, category: 'Home' },
    { id: 22, name: 'Product V', status: 'active', stock: 40, category: 'Books' },
    { id: 23, name: 'Product W', status: 'inactive', stock: 5, category: 'Clothing' },
    { id: 24, name: 'Product X', status: 'active', stock: 250, category: 'Electronics' },
    { id: 25, name: 'Product Y', status: 'inactive', stock: 0, category: 'Home' },
  ];

  const filteredProducts = products.filter((product) => {
    if (filter === 'all') return true;
    if (filter === 'active') return product.status === 'active';
    if (filter === 'non-active') return product.status === 'inactive';
    if (filter === 'low-stock') return product.stock <= 10; // Assuming low stock is 10 or less
    return true;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProducts.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Bento Boxes */}
          <div className="bg-white border border-black rounded-xl p-4">
            <div className="text-left">
              <h2 className="text-lg font-semibold mb-4 text-black">Product Types</h2>
              <p>50</p>
            </div>
          </div>
          <div className="bg-white border border-black rounded-xl p-4">
            <div className="text-left">
              <h2 className="text-lg font-semibold mb-4 text-black">Total Products</h2>
              <p>227</p>
            </div>
          </div>
          <div className="bg-white border border-black rounded-xl p-4">
            <div className="text-left">
              <h2 className="text-lg font-semibold mb-4 text-black">Low Stock Products</h2>
              <p>20</p>
            </div>
          </div>
          <div className="bg-white border border-black rounded-xl p-4">
            <div className="text-left">
              <h2 className="text-lg font-semibold mb-4 text-black">Total Inventory Value</h2>
              <p>₹ 5,97,263.00</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="bg-blue-500 text-white border border-black rounded-xl p-4 cursor-pointer" onClick={() => setShowAddProductForm(!showAddProductForm)}>Add Product</div>
          <div className="bg-blue-500 text-white border border-black rounded-xl p-4 cursor-pointer" onClick={() => setShowUpdateStockForm(!showUpdateStockForm)}>Update Stock/Product Details</div>
          <div className="bg-blue-500 text-white border border-black rounded-xl p-4">Export PDF</div>
          <div className="bg-blue-500 text-white border border-black rounded-xl p-4">Export Low Stock PDF</div>

          {/* Forms */}
          {showAddProductForm && (
            <div className="bg-white border border-black rounded-xl p-4 col-span-1">
              <h2 className="text-lg font-semibold mb-4 text-center">Add Product</h2>
              <input type="text" placeholder="Product Name" className="w-full mx-auto p-2 border rounded mb-2 text-center" style={{ width: 'calc(100%)' }} />
              <input type="text" placeholder="Category" className="w-full mx-auto p-2 border rounded mb-2 text-center" style={{ width: 'calc(100% )' }} />
              <input type="number" placeholder="Stock Quantity" className="w-full mx-auto p-2 border rounded mb-2 text-center" style={{ width: 'calc(100% )' }} />
              <input type="text" placeholder="SKU" className="w-full mx-auto p-2 border rounded mb-2 text-center" style={{ width: 'calc(100% )' }} />
              <input type="number" placeholder="Unit Price" className="w-full mx-auto p-2 border rounded mb-2 text-center" style={{ width: 'calc(100% )' }} />
              <button className="w-full p-2 bg-blue-500 text-white rounded" onClick={() => setShowAddProductForm(false)}>Submit</button>
              <button className="w-full p-2 bg-gray-300 text-black rounded mt-2" onClick={() => setShowAddProductForm(false)}>Cancel</button>
            </div>
          )}

{showUpdateStockForm && (
            <div className="bg-white border border-black rounded-xl p-4 col-span-1">
              <h2 className="text-lg font-semibold mb-4 text-center">Update Stock/Product Details</h2>
              <input type="text" placeholder="Product ID/Name" className="w-full mx-auto p-2 border rounded mb-2 text-center" style={{ width: 'calc(100% )' }} />
              <input type="number" placeholder="New Stock Quantity" className="w-full mx-auto p-2 border rounded mb-2 text-center" style={{ width: 'calc(100% )' }} />
              <input type="text" placeholder="Reason for Update" className="w-full mx-auto p-2 border rounded mb-2 text-center" style={{ width: 'calc(100% )' }} />
              <input type="date" placeholder="Update Date" className="w-full mx-auto p-2 border rounded mb-2 text-center" style={{ width: 'calc(100%)' }} />
              <button className="w-full p-2 bg-blue-500 text-white rounded" onClick={() => setShowUpdateStockForm(false)}>Submit</button>
              <button className="w-full p-2 bg-gray-300 text-black rounded mt-2" onClick={() => setShowUpdateStockForm(false)}>Cancel</button>
            </div>
          )}
        </div>

        {/* Product Table Bento Box with Filter */}
        <div className="mt-4 bg-white border border-black rounded-xl p-4">
          {/* Filter System inside Bento Box */}
          <div className="flex space-x-2 mb-4 justify-around">
            <button className={`p-2 border rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-white'}`} style={{ width: '20%' }} onClick={() => setFilter('all')}>All</button>
            <button className={`p-2 border rounded ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-white'}`} style={{ width: '20%' }} onClick={() => setFilter('active')}>Active</button>
            <button className={`p-2 border rounded ${filter === 'non-active' ? 'bg-blue-500 text-white' : 'bg-white'}`} style={{ width: '20%' }} onClick={() => setFilter('non-active')}>Inactive</button>
            <button className={`p-2 border rounded ${filter === 'low-stock' ? 'bg-blue-500 text-white' : 'bg-white'}`} style={{ width: '20%' }} onClick={() => setFilter('low-stock')}>Low Stock</button>
            <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} className="p-2 border rounded" style={{ width: '10%' }}>
              &lt;
            </button>
            <button disabled={currentPage === pageNumbers[pageNumbers.length - 1]} onClick={() => handlePageChange(currentPage + 1)} className="p-2 border rounded" style={{ width: '10%' }}>
              &gt;
            </button>
          </div>

          <h2 className="text-lg font-semibold mb-4 text-center">Products</h2>
          <table className="w-full border-collapse border border-slate-800">
            <thead>
              <tr>
                <th className="text-center border border-slate-800 p-2">Product</th>
                <th className="text-center border border-slate-800 p-2">Status</th>
                <th className="text-center border border-slate-800 p-2">Stock</th>
                <th className="text-center border border-slate-800 p-2">Category</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((product) => (
                <tr key={product.id}>
                  <td className="py-2 border border-slate-800 p-2 text-left">{product.name}</td>
                  <td className="py-2 border border-slate-800 p-2 text-left">
                    {product.status === 'active' ? (
                      <span className="bg-green-500 text-white rounded-md p-1">Active</span>
                    ) : (
                      <span className="bg-red-500 text-white rounded-md p-1">Inactive</span>
                    )}
                  </td>
                  <td className="py-2 border border-slate-800 p-2 text-left">
                    {product.stock <= 10 ? (
                      <span className="bg-red-500 text-white rounded-md p-1">{product.stock}</span>
                    ) : (
                      product.stock
                    )}
                  </td>
                  <td className="py-2 border border-slate-800 p-2 text-left">{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination below table */}
          <div className="flex justify-center mt-4">
            <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} className="p-2 border rounded">
              &lt;
            </button>
            <div className="flex space-x-2">
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => handlePageChange(number)}
                  className={`p-2 border rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white'}`}
                >
                  {number}
                </button>
              ))}
            </div>
            <button disabled={currentPage === pageNumbers[pageNumbers.length - 1]} onClick={() => handlePageChange(currentPage + 1)} className="p-2 border rounded">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default InventoryPage;