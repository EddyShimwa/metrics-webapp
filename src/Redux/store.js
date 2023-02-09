import { configureStore } from '@reduxjs/toolkit';
import countrySlice from './Country/countrySlice';
import detailSlice from './details';

const store = configureStore({
  reducer: {
    countries: countrySlice,
    country: detailSlice,
  },
});

export default store;
