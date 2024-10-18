import React from 'react';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <h1 className="text-2xl text-center font-bold mb-6">Expense Tracker</h1>
      <Summary />
      <AddExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;