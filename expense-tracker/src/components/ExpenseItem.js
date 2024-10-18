import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeExpense, editExpense } from '../redux/expensesSlice';

const ExpenseItem = ({ expense }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [amount, setAmount] = useState(expense.amount);
  const [description, setDescription] = useState(expense.description);

  const handleSave = () => {
    dispatch(editExpense({
      id: expense.id,
      amount,
      description,
      category: expense.category,
      date: expense.date,
    }));
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded-lg shadow-sm">
      {isEditing ? (
        <>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-1/2 p-2 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-1/4 p-2 border border-gray-300 rounded-md ml-2"
          />
          <button onClick={handleSave} className="ml-2 text-green-500">Save</button>
        </>
      ) : (
        <>
          <div>
            <p className="text-lg font-semibold">{expense.description}</p>
            <p className="text-sm text-gray-600">{expense.category} - {expense.date}</p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-lg">${expense.amount}</p>
            <button onClick={() => setIsEditing(true)} className="text-blue-500">Edit</button>
            <button onClick={() => dispatch(removeExpense(expense.id))} className="text-red-500">Delete</button>
          </div>
        </>
      )}
    </li>
  );
};

export default ExpenseItem;