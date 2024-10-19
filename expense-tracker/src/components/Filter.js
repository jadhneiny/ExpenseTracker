import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Filter = ({ onFilterChange, onDateChange, onTagChange }) => {
  const categories = useSelector(state => state.expenses.categories);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilterChange(category);
  };

  const handleTagChange = (e) => {
    const tag = e.target.value;
    setSelectedTag(tag);
    onTagChange(tag);
  };

  const handleDateChange = () => {
    onDateChange(startDate, endDate);
  };

  return (
    <div className="mb-4 max-w-lg mx-auto bg-white p-4 rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
      <label className="block text-gray-700 mb-2 dark:text-gray-300">Filter by Category:</label>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
      >
        <option value="All">All</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <label className="block text-gray-700 mt-4 mb-2 dark:text-gray-300">Filter by Tag:</label>
      <input
        type="text"
        value={selectedTag}
        onChange={handleTagChange}
        placeholder="Enter tag"
        className="w-full p-2 border border-gray-300 rounded-md mb-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />

      <div className="mt-4">
        <label className="block text-gray-700 mb-2 dark:text-gray-300">Filter by Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        <button onClick={handleDateChange} className="w-full p-2 mt-2 bg-blue-500 text-white rounded-md dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-600">
          Apply Date Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;