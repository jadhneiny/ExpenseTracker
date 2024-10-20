import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense } from '../redux/expensesSlice';

const AddExpenseForm = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Food');
  const [tags, setTags] = useState('');
  const [isRecurring, setIsRecurring] = useState(false); // Recurring state
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
      recurring: isRecurring, // Add recurring field
      date: new Date().toLocaleDateString(),
    }));

    setAmount('');
    setDescription('');
    setTags('');
    setIsRecurring(false); // Reset recurring checkbox
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Expense Description"
        className="w-full p-2 border border-gray-300 rounded-md mb-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="w-full p-2 border border-gray-300 rounded-md mb-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
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
        className="w-full p-2 border border-gray-300 rounded-md mb-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />
      <label className="block text-gray-700 mb-2 dark:text-gray-300">
        <input
          type="checkbox"
          checked={isRecurring}
          onChange={() => setIsRecurring(!isRecurring)}
          className="mr-2"
        />
        Recurring Expense
      </label>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md dark:bg-blue-700">
        Add Expense
      </button>
    </form>
  );
};

export default AddExpenseForm;