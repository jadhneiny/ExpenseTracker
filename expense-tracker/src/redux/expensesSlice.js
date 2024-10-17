import { createSlice } from '@reduxjs/toolkit';

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: [],
    categories: ['Food', 'Transport', 'Bills', 'Entertainment', 'Others'],
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter(exp => exp.id !== action.payload);
    },
    editExpense: (state, action) => {
      const index = state.expenses.findIndex(exp => exp.id === action.payload.id);
      if (index !== -1) {
        state.expenses[index] = action.payload;
      }
    },
  },
});

export const { addExpense, removeExpense, editExpense } = expensesSlice.actions;
export default expensesSlice.reducer;