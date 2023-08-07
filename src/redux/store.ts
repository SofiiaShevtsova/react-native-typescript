import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import productsSlice from './product/productsSlice';
import authSlice from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
