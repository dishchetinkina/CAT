import { createSlice } from '@reduxjs/toolkit';
import { ICurrency } from '../types/ICurrency';

interface ICurrencyState {
  currencyList: Array<ICurrency>
  currentCurrency: ICurrency
}

const currencySlice = createSlice({
  name: 'currencySlice',
  initialState: {
    currencyList: [],
    currentCurrency: {},
  } as ICurrencyState,
  reducers: {
    setCurrencyList: (state, action) => {
      state.currencyList = action.payload;
    },

    setCurrentCurrency: (state, action) => {
      state.currentCurrency = action.payload;
    },
  },
});

export const { setCurrencyList, setCurrentCurrency } = currencySlice.actions;
export default currencySlice.reducer;