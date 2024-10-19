import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  ArcElement, // Import ArcElement for Pie chart
  Tooltip,
  Legend
} from 'chart.js';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = () => {
  const expenses = useSelector(state => state.expenses.expenses);

  // Group expenses by category and calculate totals
  const categoryTotals = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + parseFloat(exp.amount);
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: 'Expenses by Category',
        data: Object.values(categoryTotals),
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#4bc0c0'],
        borderColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'], // Adding white borders for contrast
        borderWidth: 2, // Slightly thicker borders for better visibility
      },
    ],
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-4 rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
      <h3 className="text-xl font-semibold mb-4">Expenses by Category</h3>
      <Pie data={data} />
    </div>
  );
};

export default ExpenseChart;