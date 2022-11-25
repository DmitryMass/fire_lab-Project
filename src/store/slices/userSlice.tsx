import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  user: localStorage.user,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<string | object | boolean>) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = false;
    },
  },
});

export const userSliceReducer = userSlice.reducer;
export const userSliceActions = userSlice.actions;
