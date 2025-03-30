// src/app/dashboard/inventory/categories/page.jsx

"use client";

import React, { useState } from "react";
import DashboardLayout from '../../components/dashboardlayout';

const InventoryCategories = () => {
  const [categories, setCategories] = useState([
    { id: 1, categoryName: 'Electronics', productCount: 5 },
    { id: 2, categoryName: 'Clothing', productCount: 3 },
    { id: 3, categoryName: 'Books', productCount: 2 },
    // Add more placeholder data as needed
  ]);

  const [categoryFormData, setCategoryFormData] = useState({
    categoryName: '',
  });

  const [editingCategoryId, setEditingCategoryId] = useState(null);

  const handleCategoryChange = (e) => {
    setCategoryFormData({ ...categoryFormData, [e.target.name]: e.target.value });
  };

  const handleAddCategory = () => {
    if (editingCategoryId) {
      setCategories(categories.map((category) =>
        category.id === editingCategoryId ? { ...category, ...categoryFormData } : category
      ));
      setEditingCategoryId(null);
    } else {
      setCategories([...categories, { id: Date.now(), ...categoryFormData, productCount:0 }]);
    }
    setCategoryFormData({ categoryName: '' });
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
    if (editingCategoryId === id) {
      setEditingCategoryId(null);
      setCategoryFormData({ categoryName: '' });
    }
  };

  const handleEditCategory = (category) => {
    setEditingCategoryId(category.id);
    setCategoryFormData({
      categoryName: category.categoryName,
    });
  };

  return (
    <DashboardLayout>
      <div className="p-4 text-[#2F2F2F]">
        <h1 className="text-lg font-semibold mb-4">Categories</h1>
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="w-full lg:w-3/4 p-4 border border-[#2F2F2F] rounded-xl flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Available Categories</h2>
            <div className="overflow-y-auto" style={{ maxHeight: '400px' }}>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">Sl. No</th>
                    <th className="border border-gray-300 p-2">Category Name</th>
                    <th className="border border-gray-300 p-2">Number of Products</th>
                    <th className="border border-gray-300 p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => (
                    <tr key={category.id}>
                      <td className="border border-gray-300 p-2">{category.id}</td>
                      <td className="border border-gray-300 p-2">{category.categoryName}</td>
                      <td className="border border-gray-300 p-2">{category.productCount}</td>
                      <td className="border border-gray-300 p-2">
                        <button onClick={() => handleEditCategory(category)} className="text-blue-500 mr-2">Edit</button>
                        <button onClick={() => handleDeleteCategory(category.id)} className="text-red-500">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full lg:w-1/4 p-4 border border-[#2F2F2F] rounded-xl flex flex-col">
            <h2 className="text-lg font-semibold mb-4">
              {editingCategoryId ? 'Update Category' : 'Add Category'}
            </h2>
            <div className="flex flex-col gap-2">
              <input type="text" name="categoryName" value={categoryFormData.categoryName} onChange={handleCategoryChange} placeholder="Category Name" className="p-2 border rounded text-[#2F2F2F]" />
              <button onClick={handleAddCategory} className="mt-2 p-2 bg-blue-500 text-white rounded">
                {editingCategoryId ? 'Update' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InventoryCategories;