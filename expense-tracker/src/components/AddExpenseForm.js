import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense } from '../redux/expensesSlice';

const AddExpenseForm = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Food');
  const [tags, setTags] = useState('');
  const categories = useSelector(state => state.expenses.categories);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description) return;

    const tagsArray = tags.split(',').map(tag => tag.trim());

    dispatch(addExpense({
      id: Date.now(),
      amount,
      description,
      category,
      tags: tagsArray, 
      date: new Date().toLocaleDateString(),
    }));

    setAmount('');
    setDescription('');
    setTags(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto bg-white rounded-lg shadow-md">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Expense Description"
        className="w-full p-2 border border-gray-300 rounded-md mb-2"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="w-full p-2 border border-gray-300 rounded-md mb-2"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-2"
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags (comma separated)"
        className="w-full p-2 border border-gray-300 rounded-md mb-2"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">
        Add Expense
      </button>
    </form>
  );
};

export default AddExpenseForm;