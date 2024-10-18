import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Filter = ({ onFilterChange }) => {
  const categories = useSelector(state => state.expenses.categories);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleFilterChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="mb-4 max-w-lg mx-auto">
      <label className="block text-gray-700 mb-2">Filter by Category:</label>
      <select
        value={selectedCategory}
        onChange={handleFilterChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="All">All</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;