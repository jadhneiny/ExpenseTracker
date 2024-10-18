import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import Filter from './Filter';

const ExpenseList = () => {
  const expenses = useSelector(state => state.expenses.expenses);
  const [filteredCategory, setFilteredCategory] = useState('All');
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
  };

  const handleDateChange = (startDate, endDate) => {
    setDateRange({ startDate, endDate });
  };

  const filteredExpenses = expenses.filter(exp => {
    // Category filter
    const categoryMatch = filteredCategory === 'All' || exp.category === filteredCategory;

    // Date range filter
    const expenseDate = new Date(exp.date);
    const startDateMatch = !dateRange.startDate || expenseDate >= new Date(dateRange.startDate);
    const endDateMatch = !dateRange.endDate || expenseDate <= new Date(dateRange.endDate);

    return categoryMatch && startDateMatch && endDateMatch;
  });

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl mb-4">Expense History</h2>
      <Filter onFilterChange={handleFilterChange} onDateChange={handleDateChange} />
      <ul>
        {filteredExpenses.map(exp => (
          <ExpenseItem key={exp.id} expense={exp} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;