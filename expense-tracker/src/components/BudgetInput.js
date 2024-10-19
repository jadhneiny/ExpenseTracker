import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBudget } from '../redux/expensesSlice';

const BudgetInput = () => {
  const dispatch = useDispatch();
  const budget = useSelector(state => state.expenses.budget);
  const [inputBudget, setInputBudget] = useState(budget);

  const handleSetBudget = () => {
    if (inputBudget > 0) {
      dispatch(setBudget(parseFloat(inputBudget)));
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-4 rounded-lg shadow-md mb-4 dark:bg-gray-800 dark:text-white">
      <h3 className="text-xl font-semibold mb-2">Set Monthly Budget</h3>
      <input
        type="number"
        value={inputBudget}
        onChange={(e) => setInputBudget(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        placeholder="Enter your budget"
      />
      <button onClick={handleSetBudget} className="w-full p-2 bg-blue-500 text-white rounded-md dark:bg-blue-700">
        Set Budget
      </button>
    </div>
  );
};

export default BudgetInput;