import React from 'react';
import { useSelector } from 'react-redux';
import { CSVLink } from 'react-csv';

const ExportCSV = () => {
  const expenses = useSelector(state => state.expenses.expenses);

  const headers = [
    { label: 'Description', key: 'description' },
    { label: 'Amount', key: 'amount' },
    { label: 'Category', key: 'category' },
    { label: 'Date', key: 'date' },
  ];

  return (
    <div className="max-w-lg mx-auto p-4">
      <CSVLink
        data={expenses}
        headers={headers}
        filename="expenses.csv"
        className="w-full p-2 bg-green-500 text-white rounded-md"
      >
        Download Expenses CSV
      </CSVLink>
    </div>
  );
};

export default ExportCSV;