import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './Search/searchSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice,
  },
});
