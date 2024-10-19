import React from 'react';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';
import ExpenseChart from './components/ExpenseChart';
import BudgetInput from './components/BudgetInput';
import ExportCSV from './components/ExportCSV';
import BudgetNotification from './components/BudgetNotification';
import DarkModeToggle from './components/DarkModeToggle';
import { useTheme } from './ThemeContext'; // Import the theme hook

function App() {
  const { darkMode } = useTheme();

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'} min-h-screen p-4`}>
      <h1 className="text-2xl text-center font-bold mb-6">Expense Tracker</h1>
      <DarkModeToggle />
      <BudgetNotification />
      <BudgetInput />
      <Summary />
      <ExpenseChart />
      <ExportCSV />
      <AddExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;