import { createSlice } from '@reduxjs/toolkit';

// Helper functions to handle localStorage
const loadFromLocalStorage = (key, defaultValue) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState ? JSON.parse(serializedState) : defaultValue;
  } catch (e) {
    console.error(`Could not load ${key} from localStorage`, e);
    return defaultValue;
  }
};

const saveToLocalStorage = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (e) {
    console.error(`Could not save ${key} to localStorage`, e);
  }
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: loadFromLocalStorage('expenses', []), // Load expenses from localStorage
    categories: ['Food', 'Transport', 'Bills', 'Entertainment', 'Others'],
    budget: loadFromLocalStorage('budget', 0), // Load budget from localStorage
    tags: [],
    currency: 'USD',
  },
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
      saveToLocalStorage('expenses', state.expenses); // Save expenses after adding
    },
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter(exp => exp.id !== action.payload);
      saveToLocalStorage('expenses', state.expenses); // Save expenses after removing
    },
    editExpense: (state, action) => {
      const index = state.expenses.findIndex(exp => exp.id === action.payload.id);
      if (index !== -1) {
        state.expenses[index] = action.payload;
        saveToLocalStorage('expenses', state.expenses); // Save expenses after editing
      }
    },
    setBudget: (state, action) => {
      state.budget = action.payload; // Set the budget
      saveToLocalStorage('budget', state.budget); // Save budget to localStorage
    },
    addTag: (state, action) => {
      state.tags.push(action.payload); // Add new tag
    },
    markAsRecurring: (state, action) => {
      const index = state.expenses.findIndex(exp => exp.id === action.payload.id);
      if (index !== -1) {
        state.expenses[index].recurring = action.payload.recurring;
        saveToLocalStorage('expenses', state.expenses);
      }
    },
  },
});

export const { setCurrency, addExpense, removeExpense, editExpense, setBudget, addTag, markAsRecurring } = expensesSlice.actions;
export default expensesSlice.reducer;