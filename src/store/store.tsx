import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { userSliceReducer } from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
  },
});

setupListeners(store.dispatch);

export default store;
export type TypeRootState = ReturnType<typeof store.getState>;
