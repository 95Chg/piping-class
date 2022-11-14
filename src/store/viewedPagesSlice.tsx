import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from '../store';

const viewedPagesSlice = createSlice({
  name: 'viewedPages',
  initialState: ['Home'],
  reducers: {
    addPage(state, action: PayloadAction<string>): void {
      const page = action.payload;
      if (state.length < 3) state.push(page);
      else {
        state.splice(state.indexOf(page), 1);
        state.push(page);
      }
    },
    deletePages(state): void {
      if (state.length > 1) state.pop();
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const { addPage, deletePages } = viewedPagesSlice.actions;
export default viewedPagesSlice;
