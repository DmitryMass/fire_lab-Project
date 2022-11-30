import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { menuSliceReducer } from './slices/menuSlice';
import { userSliceReducer } from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    menu: menuSliceReducer,
  },
});

setupListeners(store.dispatch);

export default store;
export type TypeRootState = ReturnType<typeof store.getState>;
