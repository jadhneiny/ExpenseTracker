import React from 'react';
import { useSelector } from 'react-redux';

const Summary = () => {
  const expenses = useSelector(state => state.expenses.expenses);

  // Get current month and year
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  // Calculate total expenses for the current month
  const monthlyExpenses = expenses.filter(exp => {
    const expenseDate = new Date(exp.date);
    return (
      expenseDate.getMonth() === currentMonth &&
      expenseDate.getFullYear() === currentYear
    );
  });

  const total = monthlyExpenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0);

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg p-4 shadow-md mb-4">
      <h3 className="text-xl font-semibold mb-2">Monthly Summary</h3>
      <p className="text-lg">Total Expenses for {new Date().toLocaleString('default', { month: 'long' })}: ${total.toFixed(2)}</p>
    </div>
  );
};

export default Summary;