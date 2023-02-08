import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchCountry =createAsyncThunk('data/fetchCountry', async (country) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const result = await response.json();
    return result[0];
  })

  const detailSlice = createSlice({
    name: 'detailSlice',
    initialState: {
      country: {}
    },

   extraReducers: (builder) => {
    builder.addCase(fetchCountry.fulfilled, (state, action) => {
      const newState = { ...state, country: {...action.payload} };
      return newState;
    });

  },
});

export default detailSlice.reducer
