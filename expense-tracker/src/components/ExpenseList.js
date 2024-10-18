import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import Filter from './Filter';

const ExpenseList = () => {
  const expenses = useSelector(state => state.expenses.expenses);
  const [filteredCategory, setFilteredCategory] = useState('All');

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
  };

  const filteredExpenses = expenses.filter(exp => {
    return filteredCategory === 'All' || exp.category === filteredCategory;
  });

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl mb-4">Expense History</h2>
      <Filter onFilterChange={handleFilterChange} />
      <ul>
        {filteredExpenses.map(exp => (
          <ExpenseItem key={exp.id} expense={exp} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;