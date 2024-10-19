import React from 'react';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';
import ExpenseChart from './components/ExpenseChart';
import BudgetInput from './components/BudgetInput';
import ExportCSV from './components/ExportCSV';
import BudgetNotification from './components/BudgetNotification';
import DarkModeToggle from './components/DarkModeToggle';
import CurrencySelector from './components/CurrencySelector';
import { useTheme } from './ThemeContext';

function App() {
  const { darkMode } = useTheme();

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'} min-h-screen p-6 flex flex-col items-center space-y-8`}>
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">Expense Tracker</h1>

      {/* Section 1: Dark Mode Toggle and Currency Selector */}
      <div className="w-full max-w-3xl flex justify-between items-center">
        <DarkModeToggle />
        <CurrencySelector />
      </div>

      {/* Section 2: Budget Controls */}
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-4">
        <BudgetInput />
        <BudgetNotification />
        <Summary />
      </div>

      {/* Section 3: Add Expense Form & Expense List */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <AddExpenseForm />
        <ExpenseList />
      </div>

      {/* Section 4: Expense Chart */}
      <div className="w-full max-w-4xl">
        <ExpenseChart />
      </div>

      {/* Section 5: Export CSV */}
      <div className="w-full max-w-3xl text-center">
        <ExportCSV />
      </div>
      
    </div>
  );
}

export default App;