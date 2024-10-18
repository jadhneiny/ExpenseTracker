import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Filter = ({ onFilterChange, onDateChange }) => {
  const categories = useSelector(state => state.expenses.categories);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilterChange(category);
  };

  const handleDateChange = () => {
    onDateChange(startDate, endDate);
  };

  return (
    <div className="mb-4 max-w-lg mx-auto">
      <label className="block text-gray-700 mb-2">Filter by Category:</label>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="All">All</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <div className="mt-4">
        <label className="block text-gray-700 mb-2">Filter by Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-2"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button onClick={handleDateChange} className="w-full p-2 mt-2 bg-blue-500 text-white rounded-md">
          Apply Date Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;