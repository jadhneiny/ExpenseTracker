import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { removeExpense, editExpense } from '../redux/expensesSlice';

const ExpenseItem = ({ expense }) => {
  const dispatch = useDispatch();
  const currency = useSelector(state => state.expenses.currency); 

  const [isEditing, setIsEditing] = useState(false);
  const [amount, setAmount] = useState(expense.amount);
  const [description, setDescription] = useState(expense.description);
  const [tags, setTags] = useState(expense.tags ? expense.tags.join(', ') : '');

  const handleSave = () => {
    const updatedTags = tags.split(',').map(tag => tag.trim());
    dispatch(editExpense({
      id: expense.id,
      amount,
      description,
      category: expense.category,
      tags: updatedTags,
      date: expense.date,
      recurring: expense.recurring,
    }));
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded-lg shadow-sm dark:bg-gray-800 dark:text-white">
      {isEditing ? (
        <>
          <div className="flex-1">
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Tags (comma separated)"
            />
          </div>
          <button
            onClick={handleSave}
            className="ml-2 text-green-500 dark:text-green-400"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <div className="flex-1">
            <p className="text-lg font-semibold">{expense.description}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{expense.category} - {expense.date}</p>
            {expense.recurring && (
              <p className="text-xs text-green-500 dark:text-green-400">Recurring</p>
            )}
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {expense.tags && expense.tags.map(tag => (
                <span key={tag} className="inline-block mr-2 px-2 py-1 bg-blue-100 text-blue-500 rounded dark:bg-blue-700 dark:text-blue-300">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-lg">{currency} {expense.amount}</p> {/* Display amount with currency */}
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500 dark:text-blue-300"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(removeExpense(expense.id))}
              className="text-red-500 dark:text-red-400"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default ExpenseItem;