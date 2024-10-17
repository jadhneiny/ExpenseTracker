import React from 'react';
import { useDispatch } from 'react-redux';
import { removeExpense } from '../redux/expensesSlice';

const ExpenseItem = ({ expense }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded-lg shadow-sm">
      <div>
        <p className="text-lg font-semibold">{expense.description}</p>
        <p className="text-sm text-gray-600">{expense.category} - {expense.date}</p>
      </div>
      <div className="flex items-center space-x-4">
        <p className="text-lg">${expense.amount}</p>
        <button
          onClick={() => dispatch(removeExpense(expense.id))}
          className="text-red-500"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;