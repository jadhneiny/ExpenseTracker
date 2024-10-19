import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrency } from '../redux/expensesSlice';

const CurrencySelector = () => {
  const currencies = ['USD', 'EUR', 'GBP', 'JPY'];
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(state => state.expenses.currency);
  const [currency, setCurrencyInput] = useState(selectedCurrency);

  const handleCurrencyChange = (e) => {
    const selected = e.target.value;
    setCurrencyInput(selected);
    dispatch(setCurrency(selected));
  };

  return (
    <div className="max-w-lg mx-auto mb-4">
      <label className="block text-gray-700 mb-2">Select Currency:</label>
      <select
        value={currency}
        onChange={handleCurrencyChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        {currencies.map(cur => (
          <option key={cur} value={cur}>{cur}</option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;