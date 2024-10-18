import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const BudgetNotification = () => {
  const expenses = useSelector(state => state.expenses.expenses);
  const budget = useSelector(state => state.expenses.budget);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Calculate total expenses for the current month
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const monthlyExpenses = expenses.filter(exp => {
      const expenseDate = new Date(exp.date);
      return (
        expenseDate.getMonth() === currentMonth &&
        expenseDate.getFullYear() === currentYear
      );
    });

    const totalExpenses = monthlyExpenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0);

    // Show notification if expenses exceed 80% of the budget
    if (budget > 0 && totalExpenses >= budget * 0.8) {
      setShowNotification(true);
    } else {
      setShowNotification(false);
    }
  }, [expenses, budget]);

  return (
    <>
      {showNotification && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 max-w-lg mx-auto">
          <strong className="font-bold">Warning!</strong>
          <span className="block sm:inline"> You’ve spent more than 80% of your budget for this month.</span>
        </div>
      )}
    </>
  );
};

export default BudgetNotification;