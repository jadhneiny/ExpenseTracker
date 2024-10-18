import React from 'react';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';
import ExpenseChart from './components/ExpenseChart';
import BudgetInput from './components/BudgetInput';
import ExportCSV from './components/ExportCSV';
import BudgetNotification from './components/BudgetNotification';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <h1 className="text-2xl text-center font-bold mb-6">Expense Tracker</h1>
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