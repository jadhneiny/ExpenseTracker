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
      budget: 0,
      tags: [],
      currency: 'USD',
    },
    reducers: {
      setCurrency: (state, action) => {
        state.currency = action.payload;
      },
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
      setBudget: (state, action) => {
        state.budget = action.payload; // Set the budget
      },
      addTag: (state, action) => {
        state.tags.push(action.payload); // Add new tag
      },
      markAsRecurring: (state, action) => {
        const index = state.expenses.findIndex(exp => exp.id === action.payload.id);
        if (index !== -1) {
          state.expenses[index].recurring = action.payload.recurring;
          saveToLocalStorage(state.expenses);
        }
      },
    },
  });
  
  export const { setCurrency, addExpense, removeExpense, editExpense, setBudget, addTag, markAsRecurring } = expensesSlice.actions;
  export default expensesSlice.reducer;