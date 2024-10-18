import { createSlice } from '@reduxjs/toolkit';

// Helper functions to handle localStorage
const loadFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('expenses');
      return serializedState ? JSON.parse(serializedState) : [];
    } catch (e) {
      console.error('Could not load state', e);
      return [];
    }
  };
  
  const saveToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('expenses', serializedState);
    } catch (e) {
      console.error('Could not save state', e);
    }
  };
  
  
  const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {
      expenses: loadFromLocalStorage(), // Load from localStorage
      categories: ['Food', 'Transport', 'Bills', 'Entertainment', 'Others'],
    },
    reducers: {
      addExpense: (state, action) => {
        state.expenses.push(action.payload);
        saveToLocalStorage(state.expenses); // Save after adding
      },
      removeExpense: (state, action) => {
        state.expenses = state.expenses.filter(exp => exp.id !== action.payload);
        saveToLocalStorage(state.expenses); // Save after removing
      },
      editExpense: (state, action) => {
        const index = state.expenses.findIndex(exp => exp.id === action.payload.id);
        if (index !== -1) {
          state.expenses[index] = action.payload;
          saveToLocalStorage(state.expenses); // Save after editing
        }
      },
    },
  });
  
  export const { addExpense, removeExpense, editExpense } = expensesSlice.actions;
  export default expensesSlice.reducer;