import { configureStore } from '@reduxjs/toolkit';
import paginationSlice from './Pagination/paginationSlice';
import searchSlice from './Search/searchSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    pagination: paginationSlice,
  },
});
