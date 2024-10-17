import React from 'react';
import { useSelector } from 'react-redux';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const expenses = useSelector(state => state.expenses.expenses);

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl mb-4">Expense History</h2>
      <ul>
        {expenses.map(exp => (
          <ExpenseItem key={exp.id} expense={exp} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;