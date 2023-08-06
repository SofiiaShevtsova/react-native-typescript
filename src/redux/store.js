import {configureStore} from '@reduxjs/toolkit';
import productsSlice from './product/productsSlice';
import authSlice from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productsSlice,
  },
});
