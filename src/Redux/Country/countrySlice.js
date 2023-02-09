/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const api = await fetch('https://restcountries.com/v3.1/region/america');
  const data = await api.json();
  return data;
});
export const fetchCountry = createAsyncThunk('data/fetchCountry', async () => {
  const country = '';
  const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const result = await response.json();
  return result;
});

const countrySlice = createSlice({
  name: 'countrySlice',
  initialState: {
    list: [],
  },
  reducers: {
    addCountry: (action, state = initialState) => {
      state.list = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const newState = { ...state, list: [...action.payload] };
      return newState;
    });
  },
});

export const { addCountry } = countrySlice.actions;
export default countrySlice.reducer;
