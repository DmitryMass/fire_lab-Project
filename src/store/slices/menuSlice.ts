import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: false,
};

export const menuSlice = createSlice({
  name: 'menuSlice',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.menu = true;
    },
    closeMenu: (state) => {
      state.menu = false;
    },
  },
});

export const menuSliceReducer = menuSlice.reducer;
export const menuSliceAction = menuSlice.actions;
