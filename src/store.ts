import { configureStore } from '@reduxjs/toolkit';
import viewedPagesSlice from './store/viewedPagesSlice';

export default configureStore({
  reducer: {
    viewedPagesSlice: viewedPagesSlice.reducer,
  },
});
