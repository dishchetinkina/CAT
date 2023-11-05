import { configureStore } from '@reduxjs/toolkit';
import CurrencySlice from './Slices/CurrencySlice';

const store = configureStore({
  reducer: {
    currency: CurrencySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;